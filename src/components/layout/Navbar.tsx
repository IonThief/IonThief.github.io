"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Check if we are on the home page
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", hash: "#hero" },
    { name: "/logs", hash: "#latest-logs" },
    { name: "Projects", hash: "#projects" },
    { name: "Publications", hash: "#publications" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? "bg-background/80 backdrop-blur-md border-slate-800 py-4" : "bg-transparent border-transparent py-6"}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="font-mono font-bold text-primary tracking-tighter hover:opacity-80 transition-opacity">
          IS_CV.exe
        </Link>
        <ul className="hidden md:flex gap-8 font-mono text-sm">
          {navLinks.map((link) => {
            // Logic:
            // 1. If we are on Home, just use the hash (e.g., "#projects") for smooth scroll.
            // 2. If we are NOT on Home, use the full path (e.g., "/#projects") to redirect.
            const href = isHome ? link.hash : `/${link.hash}`;

            return (
              <li key={link.name}>
                <Link
                  href={href}
                  className="text-secondary hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
