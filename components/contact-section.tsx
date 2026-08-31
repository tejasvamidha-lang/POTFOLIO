"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const contactOptions = [
  {
    title: "Email",
    value: "tejasvamidha@gmail.com",
    description: "Best for internship opportunities and introductions.",
    href: "mailto:tejasvamidha@gmail.com",
    icon: Mail,
  },
  {
    title: "LinkedIn",
    value: "Connect professionally",
    description: "Let’s connect and talk about engineering opportunities.",
    href: "https://www.linkedin.com/in/tejasva-midha-736849431/",
    icon: Linkedin,
  },
  {
    title: "GitHub",
    value: "View my code",
    description: "Explore projects, experiments, and engineering work.",
    href: "https://github.com/tejasvamidha-lang",
    icon: Github,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 py-24 sm:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-mono text-sm text-emerald-400">
            03 / Let&apos;s Connect
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Have an opportunity?
            <br />
            <span className="text-zinc-500">Let&apos;s build something.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-zinc-400">
            I&apos;m open to conversations with recruiters, engineering
            managers, founders, and teams looking for a motivated software
            engineering intern.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
          {contactOptions.map((option, index) => {
            const Icon = option.icon;

            return (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <Link
                  href={option.href}
                  target={option.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    option.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group block h-full rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900"
                >
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-3 text-emerald-400">
                      <Icon className="h-5 w-5" />
                    </div>

                    <ArrowUpRight className="h-4 w-4 text-zinc-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-300" />
                  </div>

                  <h3 className="mt-6 font-semibold text-zinc-100">
                    {option.title}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-zinc-300">
                    {option.value}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {option.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}