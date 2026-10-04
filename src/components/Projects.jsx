import { motion } from "motion/react";
import { LuCircleCheck } from "react-icons/lu";
import { projects } from "../data/profile";
import Section, { reveal } from "./Section";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built."
      kicker="Academic and internship builds — each one a sensor, a decision, and a real-world response."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            {...reveal(i * 0.06)}
            whileHover={{ y: -4 }}
            className="card group flex flex-col"
          >
            <div className="flex items-start gap-4">
              <div className="icon-box h-12 w-12 rounded-xl transition-transform duration-300 group-hover:scale-110">
                <project.Icon size={22} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg leading-snug font-semibold">{project.title}</h3>
                  {project.inProgress && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold text-amber-700 dark:text-amber-400">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
                      In progress
                    </span>
                  )}
                </div>
                <p className="mt-1 font-mono text-xs text-slate-500 dark:text-slate-400">{project.stage}</p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {project.description}
            </p>

            <p className="mt-4 inline-flex items-start gap-2 text-xs text-emerald-700 dark:text-emerald-400">
              <LuCircleCheck size={14} className="mt-0.5 shrink-0" />
              <span>{project.impact}</span>
            </p>

            <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
              {project.tech.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
