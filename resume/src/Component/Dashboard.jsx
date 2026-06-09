import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import axios from "axios";

function Dashboard() {
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleChooseClick = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user?.email) {
    alert("Please login first");
    navigate("/login");
    return;
  }

  fileInputRef.current.click();
};

  const handleAnalyze = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    // 🔒 ONLY ACTION LEVEL PROTECTION
    if (!user?.email) {
      alert("Please login first to analyze resume");
      navigate("/login");
      return;
    }

    if (!file) {
      alert("Please select a file");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("resume", file);
      formData.append("userId", user.email);

      const res = await axios.post(
        "http://localhost:5000/upload",
        formData
      );

      console.log("Backend response:", res.data);

      const analysis = res.data.analysis;
      const fileUrl = res.data.fileUrl || "";

      setResult(analysis);

      navigate("/result", { state: { analysis } });

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-['Poppins',sans-serif] text-center bg-slate-900 text-white pt-10 pb-4">

      {/* Heading Section */}
      <h6 className="text-cyan-400 text-[10px] font-bold tracking-widest">
        GET STARTED
      </h6>

      <h2 className="text-[45px] font-bold">
        Analyze Your{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          Resume Now
        </span>
      </h2>

      <p className="font-bold text-gray-300">
        Upload your resume. Our AI will analyze it in under 10 seconds.
      </p>

      {/* Drag & Drop Box */}
      <div className="border-2 border-dashed border-cyan-700 bg-slate-900 p-[50px] w-[400px] h-[220px] rounded-[10px] mt-[40px] mx-auto flex flex-col items-center justify-center text-white">

        <h1 className="text-[20px] w-[40px] h-[40px] flex items-center justify-center mx-auto bg-blue-900 border border-cyan-500 rounded-[17px] p-[10px] mb-3">
          📄
        </h1>

        <p className="font-bold text-sm text-gray-300">
          Drag and Drop Your Resume Here <br />
          or click anywhere to browse files.
        </p>

        <button
  onClick={handleChooseClick}
  className="mt-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-[29px] px-[20px] py-[10px] text-white font-bold cursor-pointer hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
>
  Choose File
</button>

<input
  ref={fileInputRef}
  type="file"
  accept=".pdf,.doc,.docx"
  className="hidden"
  onChange={handleFileChange}
/>
        {file && (
          <p className="text-green-400 mt-3 font-bold">
            📄 Selected File: {file.name}
          </p>
        )}
      </div>

      {/* Analyze Button */}
      <button
        className="mt-[40px] px-[20px] py-[10px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-[29px] text-white font-bold cursor-pointer hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 disabled:opacity-60"
        onClick={handleAnalyze}
        disabled={loading}
      >
        {loading ? "ANALYZING..." : "ANALYZE RESUME"}
      </button>

      {/* Loading */}
      {loading && (
        <p className="text-cyan-400 mt-3 font-semibold">
          Analyzing your resume, please wait...
        </p>
      )}

      {/* Divider */}
      <div className="mx-auto my-6 w-[70%] h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

    </div>
  );
}

export default Dashboard;