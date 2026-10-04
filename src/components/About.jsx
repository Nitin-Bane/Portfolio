import { motion } from "motion/react";
import { focusAreas, stats } from "../data/profile";
import Section, { reveal } from "./Section";

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A short version of who I am."
      kicker="I'm an Electronics & Telecommunication student in Pune who likes building things that work in the real world — sensors, circuits, and the logic that ties them together. I'm looking for an entry-level role in embedded systems, electronics, or software development."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {focusAreas.map(({ Icon, title, body }, i) => (
          <motion.div key={title} {...reveal(i * 0.08)} className="card">
            <div className="icon-box mb-4">
              <Icon size={18} />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{body}</p>
          </motion.div>
        ))}
      </div>

      <motion.dl
        {...reveal(0.1)}
        className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-4 dark:border-slate-800 dark:bg-slate-800"
      >
        {stats.map(({ value, label }) => (
          <div key={label} className="bg-white px-6 py-5 dark:bg-slate-900">
            <dt className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {label}
            </dt>
            <dd className="mt-1 font-mono text-3xl font-semibold tracking-tight text-brand">{value}</dd>
          </div>
        ))}
      </motion.dl>
    </Section>
  );
}
