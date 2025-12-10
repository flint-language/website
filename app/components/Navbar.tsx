"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SiGithub, SiDiscord } from "react-icons/si";
import { AiOutlineHome } from "react-icons/ai";
import { MdDescription, MdCode } from "react-icons/md";
import { HiOutlineDownload } from "react-icons/hi";

export default function Navbar() {
    const path = usePathname();
    const [open, setOpen] = useState(false);
    const NavItem = ({ href, label, icon }: { href: string; label: string; icon?: React.ReactNode }) => {
        const active = path === href;
        return (
            <Link
                href={href}
                className={`relative flex items-center gap-1 px-2 py-1 text-sm font-medium transition-all duration-300
          ${active ? "text-orange-500" : "text-black/80 dark:text-white/80"}
          hover:text-orange-500 group`}
            >
                {icon && <span className="text-lg">{icon}</span>}
                <span>{label}</span>
                <span
                    className={`absolute left-0 -bottom-0.5 h-[1.5px] w-full rounded-full
          bg-gradient-to-r from-orange-400 via-red-500 to-pink-500
          scale-x-0 origin-left transition-transform duration-300
          group-hover:scale-x-100 ${active ? "scale-x-100" : ""}`}
                />
            </Link>
        );
    };
    const IconOrb = ({
        href,
        children,
        hoverColor,
        ariaLabel,
    }: {
        href: string;
        children: React.ReactNode;
        hoverColor: string;
        ariaLabel: string;
    }) => (
        <a
            href={href}
            target="_blank"
            aria-label={ariaLabel}
            className={`flex items-center justify-center h-9 w-9 rounded-full backdrop-blur-md
        border border-black/10 dark:border-white/10
        shadow-md transform transition-all duration-200
        hover:scale-110 hover:shadow-[0_0_15px_${hoverColor}] active:scale-95`}
        >
            {children}
        </a>
    );
    return (
        <>
            <header className="fixed top-0 z-50 w-full">
                <div className="backdrop-blur-xl border-b border-black/10 dark:border-white/10">
                    <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
                        <Link href="/" className="flex items-center gap-3 group">
                            <Image
                                src="/logo.png"
                                alt="Flint"
                                width={36}
                                height={36}
                                className="rounded-md transition-transform group-hover:scale-105"
                            />
                            <span className="text-lg font-semibold tracking-tight">
                                Flint
                            </span>
                        </Link>
                        <nav className="hidden md:flex items-center gap-4">
                            <NavItem href="/" label="Home" icon={<AiOutlineHome />} />
                            <NavItem href="/docs" label="Docs" icon={<MdDescription />} />
                            <NavItem href="/playground" label="Playground" icon={<MdCode />} />
                            <NavItem href="/download" label="Download" icon={<HiOutlineDownload />} />
                            <div className="flex gap-2 ml-2">
                                <IconOrb
                                    href="https://github.com/flint-language"
                                    hoverColor="rgba(50,50,50,0.5)"
                                    ariaLabel="GitHub"
                                >
                                    <SiGithub className="h-5 w-5 text-black dark:text-white" />
                                </IconOrb>

                                <IconOrb
                                    href="https://discord.com/invite/kAPNzu6TGr"
                                    hoverColor="rgba(88,101,242,0.6)"
                                    ariaLabel="Discord"
                                >
                                    <SiDiscord className="h-5 w-5 text-black dark:text-white" />
                                </IconOrb>
                            </div>
                        </nav>
                        <button
                            onClick={() => setOpen(!open)}
                            className="md:hidden text-xl transition hover:scale-110"
                            aria-label="Menu"
                        >
                            {open ? "✕" : "☰"}
                        </button>
                    </div>
                </div>
                <div className="h-[1.5px] bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 opacity-80" />
            </header>
            {open && (
                <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6
                        bg-white/85 dark:bg-black/80 backdrop-blur-lg text-xl">
                    <NavItem href="/" label="Home" icon={<AiOutlineHome />} />
                    <NavItem href="/docs" label="Docs" icon={<MdDescription />} />
                    <NavItem href="/playground" label="Playground" icon={<MdCode />} />
                    <NavItem href="/download" label="Download" icon={<HiOutlineDownload />} />
                    <div className="flex gap-4 mt-4">
                        <IconOrb
                            href="https://github.com"
                            hoverColor="rgba(50,50,50,0.5)"
                            ariaLabel="GitHub"
                        >
                            <SiGithub className="h-5 w-5 text-black dark:text-white" />
                        </IconOrb>

                        <IconOrb
                            href="https://discord.com"
                            hoverColor="rgba(88,101,242,0.6)"
                            ariaLabel="Discord"
                        >
                            <SiDiscord className="h-5 w-5 text-black dark:text-white" />
                        </IconOrb>
                    </div>
                </div>
            )}
            <div className="h-16" />
        </>
    );
}
