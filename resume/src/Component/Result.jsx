import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
const navigate = useNavigate();

const analysis = location.state?.analysis;

if (!analysis) {
  return (
    <div className="text-white text-center mt-10">
      <p>No result found.</p>
      <button onClick={() => navigate("/dashboard")}
        className="mt-4 px-6 py-2 bg-cyan-500 rounded-full">
        Go Back
      </button>
    </div>
  );
}

const result = {
  atsScore: analysis.atsScore ?? 0,
  readabilityScore: analysis.readabilityScore ?? 0,
  skills: analysis.skills ?? [],
  skillGaps: analysis.skillGaps ?? [],
  suggestions: analysis.suggestions ?? [],
  recommendedRoles: analysis.recommendedRoles ?? [],
};

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10 font-[Poppins]">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-3">
        Resume Analysis Report
      </h1>

      <p className="text-center text-gray-400 mb-10">
        AI-powered insights for your resume
      </p>

      {/* Score Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

        <div className="bg-slate-900 p-6 rounded-2xl border border-cyan-500 text-center">
          <h2 className="text-xl font-semibold mb-3">ATS Score</h2>
          <p className="text-5xl font-bold text-cyan-400">
            {result.atsScore ?? 0}/100
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-purple-500 text-center">
          <h2 className="text-xl font-semibold mb-3">
            Readability Score
          </h2>
          <p className="text-5xl font-bold text-purple-400">
            {result.readabilityScore ?? 0}/100
          </p>
        </div>

      </div>

      {/* Skills */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mt-8">

        <div className="bg-slate-900 p-6 rounded-2xl border border-green-500">
          <h2 className="text-2xl font-semibold mb-4 text-green-400">
            Skills Found
          </h2>

          <ul className="space-y-2">
            {result.skills?.length > 0 ? (
              result.skills.map((skill, i) => (
                <li key={i}>✅ {skill}</li>
              ))
            ) : (
              <li className="text-gray-400">No skills found</li>
            )}
          </ul>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-red-500">
          <h2 className="text-2xl font-semibold mb-4 text-red-400">
            Skill Gap Detection
          </h2>

          <ul className="space-y-2">
            {result.skillGaps?.length > 0 ? (
              result.skillGaps.map((gap, i) => (
                <li key={i}>❌ {gap}</li>
              ))
            ) : (
              <li className="text-gray-400">No skill gaps found</li>
            )}
          </ul>
        </div>

      </div>

      {/* Recommended Roles */}
      <div className="max-w-6xl mx-auto bg-slate-900 p-6 rounded-2xl border border-yellow-500 mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
          Recommended Job Roles
        </h2>

        <div className="flex flex-wrap gap-3">
          {result.recommendedRoles?.length > 0 ? (
            result.recommendedRoles.map((role, i) => (
              <span
                key={i}
                className="bg-yellow-500/20 px-4 py-2 rounded-full"
              >
                {role}
              </span>
            ))
          ) : (
            <span className="text-gray-400">No roles found</span>
          )}
        </div>
      </div>

      {/* Suggestions */}
      <div className="max-w-6xl mx-auto bg-slate-900 p-6 rounded-2xl border border-blue-500 mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">
          AI Resume Suggestions
        </h2>

        <ul className="space-y-3">
          {result.suggestions?.length > 0 ? (
            result.suggestions.map((s, i) => (
              <li key={i}>✔ {s}</li>
            ))
          ) : (
            <li className="text-gray-400">No suggestions found</li>
          )}
        </ul>
      </div>

    </div>
  );
}

export default Result;