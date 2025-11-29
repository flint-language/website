"use client";

import { useState } from "react";
import PlaygroundEditor from "../components/PlaygroundEditor";

export default function Playground() {
  const [code, setCode] = useState(`
/*
  Welcome to the official Flint Playground!

  You don't need to install anything - just write your code
  and see the results appear in the Output panel.

  This playground is powered by Flint.
*/
    
use flint/io.{println}

fn fib(n) {
  if n < 2 then 1 
  else fib(n - 1) + fib(n - 2)
}
    
pub fn main() {
  println(fib(10))
}
`);
  const [output, setOutput] = useState("");

  return (
      <div className="fixed inset-x-0 bottom-0 top-16 bg-[#1e1e1e] text-neutral-200">
        <div className="grid grid-cols-[3fr_2fr] h-full">
          <div className="flex flex-col border-r border-neutral-800 min-h-0">
            <div className="flex-1 min-h-0">
              <PlaygroundEditor
                value={code}
                onChange={setCode}
                language="flint"
              />
            </div>
            <div className="h-11 shrink-0 flex justify-end items-center px-4 border-t border-[#141414] bg-[#222] mb-2 rounded-b-lg">
              <button
                onClick={() => setOutput(`Executed:\n${code}`)}
                className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest bg-gradient-to-br from-[#ff7a18] to-[#ff3d00] text-white shadow-[0_0_0_1px_rgba(0,0,0,.35),0_8px_18px_rgba(255,90,0,.25)] hover:from-[#ff8c2b] hover:to-[#ff4f1a] active:scale-95 transition-all">
                RUN ▶
              </button>
            </div>
          </div>
          <div className="flex flex-col bg-[#242424] min-h-0">
            <div className="
            h-9 shrink-0 flex justify-between items-center px-4
            text-xs tracking-wide
            bg-gradient-to-b from-[#2d2d2d] to-[#252526]
            border-b border-[#151515]
          ">
              <span>Output</span>
              <button
                onClick={() => setOutput("")}
                className="text-neutral-400 hover:text-neutral-200 transition"
              >
                Clear
              </button>
            </div>
            <pre className="flex-1 overflow-auto p-5 text-sm font-mono bg-[#1c1c1c] text-[#4EC9B0]">
              {output || <span className="text-neutral-600">No output.</span>}
            </pre>
          </div>
        </div>
      </div>
  );
}
