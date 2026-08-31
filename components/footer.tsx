"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900">
      <div className="section-container flex flex-col items-center justify-between gap-5 py-8 sm:flex-row">
        <p className="text-center text-sm text-zinc-500 sm:text-left">
          © {year} Tejasva Midha. Built with Next.js & Tailwind CSS.
        </p>

        <div className="flex items-center gap-2">
          <Link
            href="https://github.com/tejasvamidha-lang"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-zinc-100"
          >
            <Github className="h-4 w-4" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/tejasva-midha-736849431/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-zinc-100"
          >
            <Linkedin className="h-4 w-4" />
          </Link>

          <Link
            href="mailto:tejasvamidha@gmail.com"
            aria-label="Email"
            className="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-zinc-100"
          >
            <Mail className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}