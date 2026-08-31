"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Library,
  Network,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

type Project = {
  title: string;
  tag: string;
  description: string;
  icon: typeof ShoppingCart;
  bullets: string[];
  stack: string[];
  github: string;
  demo: string;
};

const projects: Project[] = [
  {
    title: "QuickMart Campus Store",
    tag: "Full-Stack E-Commerce",
    description:
      "A campus commerce platform designed around real student purchases, order workflows, and operational visibility.",
    icon: ShoppingCart,
    bullets: [
      "Built end-to-end product browsing, cart, checkout, and order tracking workflows.",
      "Designed backend APIs and persistent data models for active student transactions.",
      "Added operational views for tracking orders, inventory, and revenue activity.",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "Automated Trading Bots",
    tag: "Quant / Systems",
    description:
      "A real-time trading system combining streaming market data, automated execution logic, and risk controls.",
    icon: TrendingUp,
    bullets: [
      "Consumed real-time market streams through WebSocket connections.",
      "Implemented strategy execution with position sizing and automated risk controls.",
      "Built monitoring around live execution and profitability analysis.",
    ],
    stack: ["Python", "WebSockets", "Redis", "Docker"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "Gym & Library CRM Engine",
    tag: "Workflow Automation",
    description:
      "An n8n-powered automation engine that reduces repetitive membership and renewal management.",
    icon: Library,
    bullets: [
      "Automated membership status checks and scheduled reminder workflows.",
      "Triggered renewal alerts based on configurable dates and customer states.",
      "Connected operational workflows to reduce manual administrative work.",
    ],
    stack: ["n8n", "Node.js", "PostgreSQL", "REST APIs"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "Peer Expense Splitter",
    tag: "Algorithms / Full-Stack",
    description:
      "A Splitwise-style expense sharing application that simplifies group debts into fewer settlements.",
    icon: Users,
    bullets: [
      "Implemented group expense creation and proportional split calculations.",
      "Built a debt simplification algorithm to reduce unnecessary transactions.",
      "Created an intuitive workflow for tracking balances across groups.",
    ],
    stack: ["React", "TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com/",
    demo: "#",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-28 py-24 sm:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-12 max-w-2xl"
        >
          <p className="font-mono text-sm text-emerald-400">
            01 / Selected Work
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects built to ship.
          </h2>

          <p className="mt-4 leading-7 text-zinc-400">
            A selection of systems and products focused on practical
            engineering, automation, algorithms, and real-world workflows.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
          className="grid gap-5 lg:grid-cols-2"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.55,
                      ease: "easeOut",
                    },
                  },
                }}
                whileHover={{ y: -4 }}
                className="group flex flex-col rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-6 backdrop-blur-md transition-colors hover:border-zinc-700"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-3 text-emerald-400">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="font-mono text-xs text-indigo-400">
                        0{index + 1}
                      </p>
                      <h3 className="mt-1 text-xl font-semibold text-zinc-100">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <span className="hidden rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-400 sm:inline-flex">
                    {project.tag}
                  </span>
                </div>

                <span className="mt-4 inline-flex w-fit rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-400 sm:hidden">
                  {project.tag}
                </span>

                <p className="mt-5 leading-7 text-zinc-400">
                  {project.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {project.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-6 text-zinc-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1.5 font-mono text-xs text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex items-center gap-3 border-t border-zinc-800/80 pt-5">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 px-3.5 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:bg-zinc-800 hover:text-zinc-100"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </Link>

                  <Link
                    href={project.demo}
                    className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-3.5 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-300"
                  >
                    Live Demo
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}