import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Feature from "./Component/Feature";
import Card from "./Component/Card";
import Dashboard from "./Component/Dashboard";
import About from "./Component/About";
import Footer from "./Component/Footer";
 import Signup from "./Component/Signup";
import Login from "./Component/Login";
import Result from "./Component/Result";
import ProtectedRoute from "./Component/ProtectedRoute";
import History from "./Component/History";

function App() {
  return (
    <BrowserRouter>

      {/* MAIN WRAPPER */}
      <div className="min-h-screen flex flex-col bg-slate-900">

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <div className="flex-1">

          <Routes>

            {/* HOME PAGE */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Feature />
                  <Card />
                  <Dashboard />
                  <About />
                </>
              }
            />

            {/* OTHER PAGES */}
            <Route path="/feature" element={<><Feature /><Card /></>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/result" element={<Result />} />
            <Route
  path="/history"
  element={
    <ProtectedRoute>
      <History />
    </ProtectedRoute>
  }
/>
          </Routes>

        </div>

        {/* FOOTER (ONLY ONCE) */}
        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;