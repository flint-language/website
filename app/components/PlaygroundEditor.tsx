"use client";

import { useRef, useEffect } from "react";
import { setupFlint } from "../monaco-setup";

export default function PlaygroundEditor({
  value,
  onChange,
  language,
}: {
  value: string;
  onChange: (v: string) => void;
  language: string;
}) {
  const el = useRef<HTMLDivElement | null>(null);
  const editorRef = useRef<any>(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      const monaco = await import("monaco-editor");

      const res = await fetch("/themes/krTheme.json");
      const themeJson = await res.json();

      monaco.editor.defineTheme("krTheme", themeJson as any);
      monaco.editor.setTheme("krTheme");

      if (!el.current || editorRef.current || !mounted) return;

      const editor = monaco.editor.create(el.current, {
        value,
        language,
        theme: "krTheme",

        fontFamily: "JetBrains Mono, monospace",
        fontSize: 16,
        lineHeight: 1.6,

        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        renderLineHighlight: "line",
        padding: { top: 12 },

        cursorBlinking: "solid",
        cursorStyle: "line",
        automaticLayout: false,
        cursorSmoothCaretAnimation: "on"
      });

      editorRef.current = editor;

      editor.onDidChangeModelContent(() => {
        onChange(editor.getValue());
      });

      await setupFlint(editor);
      const relayout = () => {
        editor.layout();
      };

      requestAnimationFrame(relayout);
      setTimeout(relayout, 50);
      setTimeout(relayout, 250);
    })();

    return () => {
      mounted = false;
      editorRef.current?.dispose();
    };
  }, []);

  return (
    <div className="h-full w-full overflow-hidden">
      <div ref={el} className="h-full w-full" />
    </div>
  );
}
