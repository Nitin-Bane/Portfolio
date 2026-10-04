import { motion } from "motion/react";
import { LuBriefcase, LuCalendar } from "react-icons/lu";
import { experience } from "../data/profile";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked.">
      <ol className="relative ml-3 space-y-8 border-l border-slate-200 dark:border-slate-800">
        {experience.map((job, i) => (
          <motion.li
            key={job.company}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="ml-6"
          >
            <span className="absolute -left-2.75 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-on-brand ring-4 ring-white dark:ring-slate-950">
              <LuBriefcase size={11} />
            </span>
            <div className="card">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  {job.role} · <span className="whitespace-nowrap text-brand">{job.company}</span>
                </h3>
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <LuCalendar size={12} /> {job.period}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {job.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
