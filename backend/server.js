const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const pdfParse = require("pdf-parse");

const Groq = require("groq-sdk");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// serve uploads
app.use("/uploads", express.static("uploads"));

// Groq init
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// ensure uploads folder
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// supabase import (single time)
const supabase = require("./supabaseClient");

// SIGNUP API

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const { data, error } = await supabase.from("users").insert([
      {
        username,
        email,
        password,
      },
    ]);

    if (error) {
      return res.json({ success: false, error });
    }

    res.json({
      success: true,
      message: "Signup successful",
    });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});

// LOGIN API

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .eq("password", password)
      .single();

    if (error || !data) {
      return res.json({
        success: false,
        message: "Account not found. Please sign up first.",
      });
    }

    res.json({
      success: true,
      user: data,
    });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});


// TEST ROUTE

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});


// UPLOAD ROUTE 

app.post("/upload", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const dataBuffer = fs.readFileSync(req.file.path);
    const pdfData = await pdfParse(dataBuffer);
    const text = pdfData.text;

   

console.log("===== EXTRACTED RESUME TEXT =====");
console.log(text);
console.log("=================================");

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
 content: `
You are an expert ATS resume analyzer.

IMPORTANT:
You MUST calculate REALISTIC scores based on resume content.

Rules:
- atsScore must be between 40 to 95 (never 0 unless resume is empty)
- readabilityScore must be between 40 to 95
- Do NOT return 0 unless resume is empty
- Analyze based on skills, projects, experience

Return ONLY valid JSON:

{
  "atsScore": number,
  "readabilityScore": number,
  "skills": [],
  "skillGaps": [],
  "suggestions": [],
  "recommendedRoles": []
}

Resume:
${text}
          `,
        },
      ],
      model: "llama-3.1-8b-instant",
      temperature: 0,
    });

    const response = chatCompletion.choices[0].message.content;

    console.log("===== RAW AI RESPONSE =====");
console.log(response);
console.log("===========================");

    const jsonMatch = response.match(/\{[\s\S]*\}/);
const cleaned = jsonMatch ? jsonMatch[0] : "{}";

    let analysis;
    try {
      analysis = JSON.parse(cleaned);
    } catch (e) {
      analysis = {};
    }

    const fileUrl = `http://localhost:5000/uploads/${req.file.filename}`;

    const { error } = await supabase.from("resume_results").insert([
      {
        user_id: req.body.userId || null,
        file_name: req.file.originalname,
        file_url: fileUrl,
        result: JSON.stringify(analysis),
      },
    ]);

    if (error) {
      console.log("SUPABASE INSERT ERROR:", error);
    }

    res.json({
      success: true,
      analysis,
      fileUrl,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// START SERVER

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});