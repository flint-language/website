let onigasmInitialized = false;

export async function setupFlint(editor: any) {
  const monaco = await import("monaco-editor");
  const { Registry } = await import("monaco-textmate");
  const { wireTmGrammars } = await import("monaco-editor-textmate");
  const { loadWASM } = await import("onigasm");

  if (!onigasmInitialized) {
    await loadWASM("/onigasm.wasm");
    onigasmInitialized = true;
  }

  monaco.languages.register({ id: "flint" });

  monaco.languages.setLanguageConfiguration("flint", {
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"],
  ],
  autoClosingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"', notIn: ["string"] },
    { open: "'", close: "'", notIn: ["string", "comment"] },
  ],
  surroundingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" },
  ],
  comments: {
    lineComment: "//",
  },
});


  const registry = new Registry({
    getGrammarDefinition: async () => ({
      format: "json",
      content: await fetch("/lang/flint.tmLanguage.json").then((r) => r.json()),
    }),
  });

  const grammars = new Map<string, string>();
  grammars.set("flint", "source.flint");

  await wireTmGrammars(monaco, registry, grammars, editor);
}
