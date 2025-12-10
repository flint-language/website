export default function Landing() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-28 text-foreground">
      <section className="text-center max-w-5xl mb-32 animate-fade-in">
        <h1 className="text-7xl font-extrabold mb-8 tracking-tight drop-shadow-lg animate-fade-up">
          Flint Programming Language
        </h1>
        <p className="text-2xl opacity-90 mb-14 leading-relaxed max-w-3xl mx-auto animate-fade-up delay-100">
          A fast, expressive, strongly typed language engineered for clarity,
          safety, and performance.
        </p>
        <div className="flex flex-wrap gap-6 justify-center animate-fade-up delay-200">
          <a
            href="/docs"
            className="px-10 py-4 rounded-2xl bg-foreground text-background shadow-xl hover:scale-110 transition-all duration-300 font-semibold hover:shadow-2xl"
          >
            Read the Docs
          </a>
          <a
            href="/playground"
            className="px-10 py-4 rounded-2xl border border-foreground/30 shadow-lg hover:scale-110 transition-all duration-300 backdrop-blur-sm"
          >
            Try Playground
          </a>
          <a
            href="https://github.com/flint-language/flint"
            className="px-10 py-4 rounded-2xl border border-foreground/30 shadow-lg hover:scale-110 transition-all duration-300 backdrop-blur-sm"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
