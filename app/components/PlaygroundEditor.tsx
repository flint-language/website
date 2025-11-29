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
    (async () => {
      const monaco = await import("monaco-editor");
      const res = await fetch("/themes/krTheme.json");
      const themeJson = await res.json();

      monaco.editor.defineTheme("krTheme", themeJson as any);
      monaco.editor.setTheme("krTheme");

      if (!el.current || editorRef.current) return;

      const editor = monaco.editor.create(el.current, {
        value,
        language,
        theme: "krTheme",
        fontSize: 14,
        fontFamily: "JetBrains Mono, monospace",
        minimap: { enabled: false },
        automaticLayout: true,
        autoClosingBrackets: "always", // (), {}, []
        autoClosingQuotes: "always", // "", '', ``
        autoSurround: "languageDefined", // for wrapping selection
        suggestOnTriggerCharacters: true,
        tabCompletion: "on",
      });

      editorRef.current = editor;

      editor.onDidChangeModelContent(() => {
        onChange(editor.getValue());
      });

      await setupFlint(editor);
    })();

    return () => {
      editorRef.current?.dispose();
    };
  }, []);

  return <div ref={el} style={{ width: "100%", height: "100%" }} />;
}
