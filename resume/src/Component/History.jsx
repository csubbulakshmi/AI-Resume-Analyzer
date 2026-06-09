import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

function History() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    setLoading(true);

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user?.email) {
      setData([]);
      setLoading(false);
      return;
    }

    const { data: result, error } = await supabase
      .from("resume_results")
      .select("*")
      .eq("user_id", user.email)   // ✅ FIXED
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error);
      setData([]);
    } else {
      setData(result || []);
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-cyan-400 font-bold">
        Loading history...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white font-[Poppins] px-6 py-10">

      <h1 className="text-4xl font-bold text-center mb-10">
        Resume History
      </h1>

      {data.length === 0 ? (
        <div className="text-center text-gray-400">
          No history found
        </div>
      ) : (
        <div className="max-w-5xl mx-auto space-y-5">

          {data.map((item, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-cyan-500 rounded-2xl p-5 overflow-hidden"
            >

              {/* File Name */}
              <h2 className="text-xl font-semibold text-cyan-400 mb-2">
                📄 {item.file_name}
              </h2>

              {/* Date */}
              <p className="text-xs text-gray-400 mb-2">
                📅{" "}
              {new Date(item.created_at + "Z").toLocaleString()}
              </p>

              {/* Result */}
              <div className="text-sm text-gray-300 break-all whitespace-pre-wrap overflow-hidden">
                <span className="text-green-400 font-semibold">
                  Result:
                </span>{" "}
                {typeof item.result === "string"
                  ? item.result
                  : JSON.stringify(item.result)}
              </div>

            </div>
          ))}

        </div>
      )}
    </div>
  );
}

export default History;