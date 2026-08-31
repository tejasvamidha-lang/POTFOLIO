"use client";

import { motion } from "framer-motion";
import {
  Braces,
  Code2,
  Database,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "C/C++"],
  },
  {
    title: "Web & Frameworks",
    icon: Braces,
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Tailwind CSS",
    ],
  },
  {
    title: "Databases & Backend",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "REST APIs",
      "WebSockets",
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: [
      "Docker",
      "Git/GitHub",
      "n8n",
      "Linux",
      "Postman",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-28 border-y border-zinc-900 py-24 sm:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-12 max-w-2xl"
        >
          <p className="font-mono text-sm text-indigo-400">
            02 / Technical Stack
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Tools I build with.
          </h2>

          <p className="mt-4 leading-7 text-zinc-400">
            A practical engineering toolkit spanning application development,
            backend systems, data, real-time communication, and developer
            infrastructure.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-2.5 text-emerald-400">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="font-semibold text-zinc-100">
                    {group.title}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 font-mono text-xs text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}