import Image from "../assets/scoreimg.png";

function Hero() {
  return (
    <div className="font-[Poppins] bg-slate-900 text-white">

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-10 lg:px-24 py-20 gap-16">

        {/* Left Content */}
        <div className="flex-1">

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Analyze Your<br/> Resume
            with{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI<br/> Intelligence
            </span>
          </h1>

          <p className="text-gray-300 text-lg mt-8 leading-relaxed max-w-xl">
            Upload your resume and receive instant AI-powered insights,
            ATS score analysis, skill-gap detection, and personalized
            recommendations to improve your career opportunities.
          </p>
          </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">

          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>

            <img
              src={Image}
              alt="AI Resume Analyzer"
              className="w-[600px] rounded-3xl border-2 border-cyan-400 shadow-lg shadow-cyan-300/40"
            />

          </div>

        </div>

      </div>

      {/* Divider */}
      <div className="mx-auto w-[80%] h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

    </div>
  );
}

export default Hero;