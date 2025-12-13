"use client";

import { HiX, HiOutlineDownload as DownloadIcon } from "react-icons/hi";
import { useState, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Download() {
  const [openCard, setOpenCard] = useState<
    "windows" | "macos" | "linux" | null
  >(null);
  const [linuxShell, setLinuxShell] = useState<"bash" | "zsh" | "fish">("bash");
  const prevCard = useRef<"windows" | "macos" | "linux" | null>(null);
  const [expandedHeight, setExpandedHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const cardData = [
    {
      id: "windows",
      title: "Windows",
      description: "Amber console installer for Windows 10 and newer.",
      download: "/downloads/amber-windows.zip",
      install: `# Extract Amber
tar -xzf amber-windows.zip
move amber C:\\Amber
C:\\Amber`,
      verify: `flint --version`,
    },
    {
      id: "macos",
      title: "macOS",
      description: "Amber installer for Apple Silicon & Intel.",
      download: "/downloads/amber-macos.zip",
      install: `unzip amber-macos.zip
mv amber ~/Amber
echo 'export PATH=$HOME/Amber:$PATH' >> ~/.zshrc
source ~/.zshrc`,
      verify: `flint --version`,
    },
    {
      id: "linux",
      title: "Linux",
      description: "Amber installer with shell-specific PATH instructions.",
      download: "/downloads/amber-linux.tar.gz",
      install: `tar -xzf amber-linux.tar.gz
mv amber ~/Amber`,
      verify: `flint --version`,
      shells: ["bash", "zsh", "fish"] as const,
    },
  ];

  const toggleCard = (cardId: "windows" | "macos" | "linux") => {
    prevCard.current = openCard;
    setOpenCard(openCard === cardId ? null : cardId);
    setLinuxShell("bash");
  };

  const getSlideDirection = () => {
    if (!prevCard.current || !openCard) return 0;
    const order = ["windows", "macos", "linux"];
    return order.indexOf(openCard) > order.indexOf(prevCard.current) ? -50 : 50;
  };

  const isSwitching =
    prevCard.current && openCard && prevCard.current !== openCard;
  const isOpening = !prevCard.current && openCard;

  useLayoutEffect(() => {
    if (contentRef.current) {
      setExpandedHeight(contentRef.current.offsetHeight);
    } else {
      setExpandedHeight(0);
    }
  }, [openCard, linuxShell]);

  return (
    <main className="min-h-screen px-6 py-28 bg-background text-foreground">
      <section className="max-w-7xl mx-auto space-y-8 relative">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
          Download Flint
        </h1>
        <p className="text-lg opacity-90 max-w-2xl">
          Use the Amber console installer to install Flint on your platform. You
          will need to add it to your PATH manually.
        </p>

        {/* Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cardData.map((card) => (
            <motion.div
              key={card.id}
              layout
              className={`rounded-2xl border border-foreground/15 backdrop-blur-sm p-6 cursor-pointer transition-all shadow-sm hover:shadow-lg hover:border-foreground/30 ${
                openCard === card.id
                  ? "shadow-2xl border-foreground/30 bg-background/80 backdrop-blur-lg"
                  : ""
              }`}
              onClick={() =>
                toggleCard(card.id as "windows" | "macos" | "linux")
              }
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">{card.title}</h2>
                <span className="text-2xl">
                  {openCard === card.id ? (
                    <HiX className="text-red-500" />
                  ) : (
                    "+"
                  )}
                </span>
              </div>
              <p className="opacity-80 mt-2">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Expanded Content */}
        <div className="relative mt-4 min-h-[1px]">
          <AnimatePresence initial={false}>
            {openCard && (
              <motion.div
                ref={contentRef}
                key={openCard}
                initial={{
                  opacity: 0,
                  y: isOpening ? -10 : 0,
                  x: isSwitching ? getSlideDirection() : 0,
                }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
                className="absolute inset-x-0 overflow-hidden rounded-2xl border border-foreground/15 bg-background/70 backdrop-blur-md shadow-lg"
              >
                <div className="p-6 space-y-6">
                  {(() => {
                    const card = cardData.find((c) => c.id === openCard)!;
                    return (
                      <>
                        <a
                          href={card.download}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-gray-900 font-semibold hover:bg-gray-100 hover:scale-105 transition-all shadow-md"
                        >
                          <DownloadIcon className="text-lg text-gray-900" />
                          Download Amber
                        </a>

                        <div>
                          <h3 className="font-semibold mb-2">Install Amber</h3>
                          <pre className="rounded-xl border border-foreground/15 bg-background/50 backdrop-blur-sm p-4 text-sm font-mono overflow-x-auto">
                            {card.install}
                          </pre>
                        </div>

                        {card.shells && (
                          <div>
                            <h3 className="font-semibold mb-2">
                              Add Amber to PATH
                            </h3>
                            <div className="flex gap-4 mb-4">
                              {card.shells.map((s) => (
                                <button
                                  key={s}
                                  className={`px-4 py-2 rounded-xl font-mono font-semibold text-sm transition-all ${
                                    linuxShell === s
                                      ? "bg-white text-gray-900 shadow-md"
                                      : "bg-background/30 text-gray-200 hover:bg-background/50"
                                  }`}
                                  onClick={() => setLinuxShell(s)}
                                >
                                  {s.toUpperCase()}
                                </button>
                              ))}
                            </div>
                            <div className="rounded-xl border border-foreground/15 bg-background/50 backdrop-blur-sm p-4 font-mono text-sm overflow-x-auto">
                              {linuxShell === "bash" && (
                                <pre>{`echo 'export PATH=$HOME/Amber:$PATH' >> ~/.bashrc\nsource ~/.bashrc`}</pre>
                              )}
                              {linuxShell === "zsh" && (
                                <pre>{`echo 'export PATH=$HOME/Amber:$PATH' >> ~/.zshrc\nsource ~/.zshrc`}</pre>
                              )}
                              {linuxShell === "fish" && (
                                <pre>{`set -Ux PATH $HOME/Amber $PATH`}</pre>
                              )}
                            </div>
                          </div>
                        )}

                        <div>
                          <h3 className="font-semibold mb-2">
                            Verify Installation
                          </h3>
                          <pre className="rounded-xl border border-foreground/15 bg-background/50 backdrop-blur-sm p-4 text-sm font-mono overflow-x-auto">
                            {card.verify}
                          </pre>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          {/* Dummy div to push content */}
          <motion.div
            key={openCard ?? "dummy"} // ensures exit animation triggers
            initial={{ height: 0 }}
            animate={{ height: expandedHeight }}
            exit={{ height: 0 }}
            transition={{
              type: false,
              stiffness: 150, // faster than the cards
              damping: 1000,
            }}
          />
        </div>

        <div className="mt-12 text-sm opacity-70">
          Looking for source builds?{" "}
          <a
            href="https://github.com/flint-language/flint"
            className="underline underline-offset-4 hover:opacity-100"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
