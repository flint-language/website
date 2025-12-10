"use client";

import Link from "next/link";
import { SiGithub, SiDiscord } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
    return (
        <footer className="w-full h-[1.5px] bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 opacity-80">
            <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                    <h3 className="text-xl font-semibold mb-3">Flint</h3>
                    <p className="opacity-80 leading-relaxed max-w-sm">
                        A fast, expressive, strongly typed programming language designed for clarity,
                        safety, and modern systems development.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-3">Navigation</h4>
                    <ul className="space-y-2 opacity-90">
                        <li><Link href="/" className="hover:text-orange-500 transition">Home</Link></li>
                        <li><Link href="/docs" className="hover:text-orange-500 transition">Docs</Link></li>
                        <li><Link href="/playground" className="hover:text-orange-500 transition">Playground</Link></li>
                        <li><Link href="/download" className="hover:text-orange-500 transition">Download</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-3">Community</h4>
                    <div className="flex gap-3">
                        <a
                            href="https://github.com/flint-language"
                            target="_blank"
                            className="flex items-center justify-center h-10 w-10 rounded-full bg-white/80 dark:bg-black/70 backdrop-blur-md border border-black/10 dark:border-white/10 shadow-md hover:scale-110 transition"
                        >
                            <SiGithub className="h-5 w-5" />
                        </a>

                        <a
                            href="https://discord.com/invite/kAPNzu6TGr"
                            target="_blank"
                            className="flex items-center justify-center h-10 w-10 rounded-full bg-white/80 dark:bg-black/70 backdrop-blur-md border border-black/10 dark:border-white/10 shadow-md hover:scale-110 transition"
                        >
                            <SiDiscord className="h-5 w-5" />
                        </a>

                        <a
                            href="mailto:contact@flint-lang.org"
                            className="flex items-center justify-center h-10 w-10 rounded-full bg-white/80 dark:bg-black/70 backdrop-blur-md border border-black/10 dark:border-white/10 shadow-md hover:scale-110 transition"
                        >
                            <AiOutlineMail className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center py-6 text-sm opacity-70">
                &copy; {new Date().getFullYear()} Flint Language. All rights reserved.
            </div>
        </footer>
    );
}
