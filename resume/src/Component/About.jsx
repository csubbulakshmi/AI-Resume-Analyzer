import Image from "../assets/bgn.png";

function About() {
  return (
    <div className="font-['Poppins',sans-serif] text-center bg-slate-900 text-white pt-10 pb-4 px-4">

      {/* Heading Section */}
      <h6 className="text-cyan-400 text-[10px] font-bold tracking-widest">
        ABOUT AI
      </h6>

      <h2 className="text-3xl md:text-4xl lg:text-[45px] font-bold">
        Built for the{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          Modern Job <br /> Seeker
        </span>
      </h2>

      {/* Content Row */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-[70px] mt-6 max-w-6xl mx-auto">

        {/* Paragraph */}
        <p className="font-bold leading-loose text-center lg:text-left text-gray-300">
          AI Resume Analyzer is a smart web application that uses AI to analyze resumes and give useful feedback.
          It helps improve ATS score, identify skill gaps, and increase job opportunities.
        </p>

        {/* Image */}
        <img
          src={Image}
          alt="About AI Resume Analyzer"
          className="w-full max-w-[500px] h-auto p-[5px] bg-slate-900 border border-cyan-700 rounded-[15px] shadow-lg shadow-cyan-500/20"
        />
      </div>

    </div>
  );
}

export default About;