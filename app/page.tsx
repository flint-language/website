"use client";

import Image from "next/image";
import { SiGithub, SiDiscord } from "react-icons/si";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white/70 dark:bg-black/70 backdrop-blur-xl relative">

      {/* Accent gradient bar at the top */}
      <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 opacity-80" />

      {/* Logo */}
      <Image
        src="/logo.png"
        alt="Logo"
        width={256}
        height={256}
        className="rounded-full mb-6 transition-transform hover:scale-105"
        priority
      />

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-white text-center mb-4">
        🚧 Work in progress 🚧
      </h1>

      {/* Subtext */}
      <p className="text-lg sm:text-xl text-black/70 dark:text-white/70 text-center max-w-md">
        Flint language is under construction. Check back soon or join our community on Discord or GitHub!
      </p>

      {/* Social icons */}
      <div className="flex gap-4 mt-6">
        <a
          href="https://github.com/flint-language"
          target="_blank"
          className="flex items-center justify-center h-12 w-12 rounded-full bg-white/85 dark:bg-black/70 backdrop-blur-md border border-black/10 dark:border-white/10 shadow-md hover:scale-110 transition transform hover:shadow-[0_0_12px_rgba(50,50,50,0.5)]"
        >
          <SiGithub className="h-6 w-6 text-black dark:text-white" />
        </a>

        <a
          href="https://discord.com/invite/kAPNzu6TGr"
          target="_blank"
          className="flex items-center justify-center h-12 w-12 rounded-full bg-white/85 dark:bg-black/70 backdrop-blur-md border border-black/10 dark:border-white/10 shadow-md hover:scale-110 transition transform hover:shadow-[0_0_12px_rgba(88,101,242,0.6)]"
        >
          <SiDiscord className="h-6 w-6 text-black dark:text-white" />
        </a>
      </div>
    </main>
  );
}
