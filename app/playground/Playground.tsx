"use client";

import { useState } from "react";
import PlaygroundEditor from "../components/PlaygroundEditor";

export default function Playground() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  return (
    <div className="w-full flex flex-col gap-4 p-6 relative">
      {/* Container */}
      <div className="relative rounded-2xl border border-neutral-700 bg-neutral-900 p-4 shadow-lg">
        {/* Run button */}
        <div className="flex justify-end mb-3">
          <button
            onClick={() => setOutput(`Executed:\n${code}`)}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white font-medium shadow hover:opacity-90 transition"
          >
            Run
          </button>
        </div>

        {/* Split Panel */}
        <div className="grid grid-cols-[1fr_350px] gap-4 h-[70vh]">
          {/* Editor */}
          <div className="relative rounded-xl overflow-hidden border border-neutral-800">
            <PlaygroundEditor
              value={code}
              onChange={setCode}
              language="flint"
            />
          </div>

          {/* Terminal */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-3 font-mono text-sm text-neutral-200 overflow-auto">
            {output || "Output will appear here…"}
          </div>
        </div>
      </div>
    </div>
  );
}
