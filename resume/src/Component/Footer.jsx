import Icon from "../assets/resumelogo.jpg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white font-['Poppins',sans-serif]">

      <hr className="border-[0.5px] border-cyan-900 mt-10" />

      {/* WRAPPER */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-10">

        {/* 🔥 SPACE BETWEEN FIX */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10">

          {/* BRAND */}
          <div className="md:w-[32%] flex flex-col">

            <img
              src={Icon}
              alt="logo"
              className="p-[3px] bg-slate-900 border border-cyan-700 w-[42px] h-[42px] rounded-[8px]"
            />

            <h2 className="font-bold mt-3 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              AI RESUME ANALYZER
            </h2>

            <p className="text-gray-300 mt-3 text-sm leading-6">
              AI-powered resume intelligence platform helping professionals
              land their dream jobs with smart optimization.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div className=" flex flex-col">

            <h3 className="font-bold text-cyan-400">QUICK LINKS</h3>

            <div className="mt-3 space-y-2">
              <Link to="/" className="text-gray-300 hover:text-cyan-400 block">Home</Link>
              <Link to="/feature" className="text-gray-300 hover:text-cyan-400 block">Features</Link>
              <Link to="/dashboard" className="text-gray-300 hover:text-cyan-400 block">Dashboard</Link>
              <Link to="/about" className="text-gray-300 hover:text-cyan-400 block">About</Link>
            </div>

          </div>

          {/* FEATURES */}
          <div className=" flex flex-col">

            <h3 className="font-bold text-cyan-400">FEATURES</h3>

            <div className="mt-3 space-y-2 text-gray-300 text-sm">
              <p>ATS Score Analysis</p>
              <p>Skill Gap Detection</p>
              <p>AI Resume Suggestions</p>
              <p>Recommended Job Roles</p>
            </div>

          </div>

        </div>
      </div>

      <hr className="border-[0.5px] border-cyan-900" />

      {/* BOTTOM */}
      <div className="text-left px-4 md:px-10 lg:px-20 py-4 text-gray-400 text-sm">
        <p>© 2026 AI Resume Analyzer. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;