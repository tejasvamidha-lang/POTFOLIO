"use client";

import { motion } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto max-w-5xl rounded-2xl border border-zinc-800/80 bg-zinc-900/70 shadow-2xl shadow-black/20 backdrop-blur-md">
        <div className="flex h-16 items-center justify-between px-5">
          <Link
            href="/"
            className="group flex items-center gap-2 font-semibold tracking-tight"
            onClick={() => setMobileOpen(false)}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400 font-mono text-sm font-bold text-zinc-950 transition-transform group-hover:rotate-3">
              TM
            </span>

            <span className="hidden sm:inline">Tejasva Midha</span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/70 px-4 py-2 text-sm font-medium text-zinc-100 transition-all hover:border-emerald-400/50 hover:bg-zinc-800"
            >
              <FileText className="h-4 w-4" />
              Resume (PDF)
            </Link>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
            className="rounded-lg p-2 text-zinc-300 transition-colors hover:bg-zinc-800 md:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-zinc-800/80 px-5 pb-5 md:hidden"
          >
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-300"
              >
                <FileText className="h-4 w-4" />
                Resume (PDF)
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}