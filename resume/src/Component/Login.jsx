import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (loading) return;

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      console.log(res.data);

      if (res.data.success) {
        alert("Login successful");

        // store user
        localStorage.setItem("user", JSON.stringify(res.data.user));

        console.log("LOGGED USER:", res.data.user);

        navigate("/dashboard");
      } else {
        alert(res.data.message || "Invalid credentials");
      }

    } catch (error) {
      console.log(error);
      alert("Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="w-[400px] p-8 bg-slate-950 rounded-xl border border-cyan-900">

        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-slate-800 text-white border border-slate-700 outline-none"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-slate-800 text-white border border-slate-700 outline-none"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="cursor-pointer w-full p-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

<p className="text-center text-gray-400 mt-4">
  Don't have an account?{" "}
  <Link to="/signup" className="text-cyan-400 hover:underline">
    Sign Up
  </Link>
</p>

      </div>
    </div>
  );
}

export default Login;