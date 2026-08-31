"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Github,
  Library,
  Linkedin,
  Mail,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:tejasva@example.com",
    icon: Mail,
  },
];

const tractionCards = [
  {
    title: "QuickMart",
    description: "Campus commerce",
    icon: ShoppingCart,
  },
  {
    title: "Trading Bots",
    description: "Real-time systems",
    icon: TrendingUp,
  },
  {
    title: "Gym / Library",
    description: "n8n automation",
    icon: Library,
  },
  {
    title: "Expense Splitter",
    description: "Graph algorithms",
    icon: Users,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-36 sm:pt-40">
      <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute right-0 top-96 -z-10 h-64 w-64 rounded-full bg-emerald-400/5 blur-3xl" />

      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for Software Engineering Internships (2026)
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mb-4 font-mono text-sm text-indigo-400"
          >
            Software Engineer • Full-Stack • Systems
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-balance text-5xl font-bold tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl"
          >
            Building software that{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-indigo-400 bg-clip-text text-transparent">
              solves real problems.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-2xl text-balance text-base leading-7 text-zinc-400 sm:text-lg"
          >
            I&apos;m Tejasva Midha, a software engineering candidate focused on
            building reliable full-stack applications, real-time systems, and
            automation workflows that turn ideas into useful products.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition-all hover:bg-emerald-300 hover:shadow-lg hover:shadow-emerald-400/10"
            >
              Explore Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/70 px-5 py-3 text-sm font-semibold text-zinc-100 transition-all hover:border-zinc-700 hover:bg-zinc-900"
            >
              <BriefcaseBusiness className="h-4 w-4" />
              View Resume
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-6 flex items-center justify-center gap-2"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={social.label}
                  className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-2.5 text-zinc-400 transition-all hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-100"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.65 }}
          className="mx-auto mt-16 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {tractionCards.map((card) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-4 backdrop-blur-md transition-colors hover:border-zinc-700"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-2.5 text-emerald-400">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="text-left">
                    <p className="text-sm font-semibold text-zinc-100">
                      {card.title}
                    </p>
                    <p className="mt-0.5 text-xs text-zinc-500">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}