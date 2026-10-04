import { motion } from "motion/react";
import { LuCalendar, LuGraduationCap, LuMapPin } from "react-icons/lu";
import { education } from "../data/profile";
import Section, { reveal } from "./Section";

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Where I studied.">
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((edu, i) => (
          <motion.div key={edu.school} {...reveal(i * 0.06)} className="card">
            <div className="flex items-start justify-between gap-3">
              <div className="icon-box mb-4">
                <LuGraduationCap size={18} />
              </div>
              {edu.note && (
                <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-[11px] font-semibold text-brand">
                  {edu.note}
                </span>
              )}
            </div>
            <h3 className="text-base font-semibold">{edu.school}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{edu.degree}</p>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <LuCalendar size={12} /> {edu.period}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <LuMapPin size={12} /> {edu.location}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
