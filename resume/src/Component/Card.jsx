function Card() {
  return (
    <div className="w-full bg-slate-900 pt-10 pb-4">

      <div className="flex flex-wrap justify-center gap-8 px-4 md:px-8 lg:px-12 text-white font-['Poppins',sans-serif]">

        {/* Card 1 */}
        <div className="w-[270px] min-h-[170px] p-[30px] bg-slate-900 border border-cyan-900 rounded-[17px] flex flex-col items-start justify-between text-left hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
          <div>
            <div className="text-[30px] mb-4 text-pink-400">🎯</div>
            <h3 className="text-[18px] font-bold mb-2 text-white">
              ATS Score Analysis
            </h3>
            <p className="text-[14px] leading-relaxed text-gray-300">
              Check how strong your resume is for ATS systems.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[270px] min-h-[170px] p-[30px] bg-slate-900 border border-cyan-900 rounded-[17px] flex flex-col items-start justify-between text-left hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
          <div>
            <div className="text-[30px] mb-4 text-purple-400">🔍</div>
            <h3 className="text-[18px] font-bold mb-2 text-white">
              Skill Gap Detection
            </h3>
            <p className="text-[14px] leading-relaxed text-gray-300">
              Find missing skills and learn what to improve for your target job.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-[270px] min-h-[170px] p-[30px] bg-slate-900 border border-cyan-900 rounded-[17px] flex flex-col items-start justify-between text-left hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
          <div>
            <div className="text-[30px] mb-4 text-cyan-400">🤖</div>
            <h3 className="text-[18px] font-bold mb-2 text-white">
              AI Resume Suggestions
            </h3>
            <p className="text-[14px] leading-relaxed text-gray-300">
              Get smart resume improvement suggestions powered by AI.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-[270px] min-h-[170px] p-[30px] bg-slate-900 border border-cyan-900 rounded-[17px] flex flex-col items-start justify-between text-left hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
          <div>
            <div className="text-[30px] mb-4 text-blue-400">💼</div>
            <h3 className="text-[18px] font-bold mb-2 text-white">
              Recommended Job Roles
            </h3>
            <p className="text-[14px] leading-relaxed text-gray-300">
              Find job titles that match your skills with percentage scores.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="w-[270px] min-h-[170px] p-[30px] bg-slate-900 border border-cyan-900 rounded-[17px] flex flex-col items-start justify-between text-left hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
          <div>
            <div className="text-[30px] mb-4 text-green-400">📖</div>
            <h3 className="text-[18px] font-bold mb-2 text-white">
              Readability Score
            </h3>
            <p className="text-[14px] leading-relaxed text-gray-300">
              See how well your resume reads — scored for clarity, format, and length.
            </p>
          </div>
        </div>

      </div>

      {/* Divider - space fixed */}
      <div className="mx-auto my-6 w-[70%] h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

    </div>
  );
}

export default Card;