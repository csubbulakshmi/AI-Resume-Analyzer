function Feature() {
  return (
    <div className="font-[Poppins] text-center bg-slate-900 text-white py-10 px-6">

      {/* Small Heading */}
      <h6 className="text-cyan-400 text-[10px] font-bold tracking-widest uppercase mb-4">
       WHAT WE OFFER
      </h6>

      {/* Main Heading */}
      <h2 className="text-5xl font-bold leading-tight mb-6">
        Everything You Need to{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          Land Your Dream Job
        </span>
      </h2>

      {/* Description */}
      <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto">
        Our AI analyzes every aspect of your resume and gives you
        actionable insights to maximize your chances of getting hired.
      </p>

    </div>
  );
}

export default Feature;