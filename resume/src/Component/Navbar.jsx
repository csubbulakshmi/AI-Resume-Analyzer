import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Icon from "../assets/resumelogo.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // ✅ check login
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
  localStorage.removeItem("user");
  navigate("/");
  window.location.reload();
};

  const handleHistoryClick = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/history");
    }
    setMenuOpen(false);
  };

  return (
    <nav className="w-full bg-blue-950 border-b border-cyan-900/40 px-4 md:px-6 lg:px-12 py-4 sticky top-0 z-50">

      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-3">
          <img
            src={Icon}
            alt="Logo"
            className="w-10 h-10 md:w-12 md:h-12 rounded-xl object-cover"
          />

          <h1 className="text-base sm:text-lg lg:text-2xl font-bold tracking-wide bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            AI RESUME ANALYZER
          </h1>
        </div>

        {/* Desktop Navbar */}
        <ul className="hidden lg:flex items-center gap-8">
          <li>
            <Link to="/" className="text-gray-300 font-medium hover:text-cyan-400 transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/feature" className="text-gray-300 font-medium hover:text-cyan-400 transition">
              Features
            </Link>
          </li>

          <li>
            <Link to="/dashboard" className="text-gray-300 font-medium hover:text-cyan-400 transition">
              Dashboard
            </Link>
          </li>

          <li>
            <Link to="/about" className="text-gray-300 font-medium hover:text-cyan-400 transition">
              About
            </Link>
          </li>

          {/* ✅ FIXED HISTORY */}
          <li>
            <button
              onClick={handleHistoryClick}
              className="text-gray-300 font-medium hover:text-cyan-400 transition"
            >
              History
            </button>
          </li>
        </ul>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex items-center gap-4">

          <Link to="/signup">
  <button className="cursor-pointer text-white font-medium hover:text-cyan-400 transition">
    Sign Up
  </button>
</Link>


          {user ? (
  <button
    onClick={handleLogout}
    className="cursor-pointer text-white font-medium hover:text-cyan-400 transition"
  >
    Logout
  </button>
) : (
  <Link to="/login">
    <button className="cursor-pointer text-white font-medium hover:text-cyan-400 transition">
      Login
    </button>
  </Link>
)}
</div>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 bg-slate-900 border border-cyan-900 rounded-xl p-4">

          <div className="flex flex-col gap-4">

            <Link to="/" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-cyan-400">
              Home
            </Link>

            <Link to="/feature" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-cyan-400">
              Features
            </Link>

            <Link to="/dashboard" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-cyan-400">
              Dashboard
            </Link>

            <Link to="/about" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-cyan-400">
              About
            </Link>

            <hr className="border-cyan-900" />

            {/* ✅ FIXED MOBILE HISTORY */}
            <button
              onClick={handleHistoryClick}
              className="text-gray-300 hover:text-cyan-400 text-left"
            >
              History
            </button>

            {!user && (
  <Link to="/signup" onClick={() => setMenuOpen(false)}>
    <button className="text-white font-medium">
      Sign Up
    </button>
  </Link>
)}

            {user ? (
  <button
    onClick={() => {
      handleLogout();
      setMenuOpen(false);
    }}
    className="text-white font-medium text-left"
  >
    Logout
  </button>
) : (
  <Link to="/login" onClick={() => setMenuOpen(false)}>
    <button className="text-white font">
      Login
    </button>
  </Link>
)}   

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;