import { motion } from "motion/react";
import { LuLanguages, LuWrench } from "react-icons/lu";
import { languages, practices, skillGroups } from "../data/profile";
import Section, { reveal } from "./Section";

function GroupHeader({ Icon, title, count }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div className="icon-box h-8 w-8">
        <Icon size={15} />
      </div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700 dark:text-slate-200">
        {title}
      </h3>
      <span className="h-px flex-1 bg-linear-to-r from-slate-200 to-transparent dark:from-slate-800" />
      <span className="font-mono text-xs text-slate-400 dark:text-slate-500">{count}</span>
    </div>
  );
}

function ChipGroup({ Icon, title, items, delay }) {
  return (
    <motion.div {...reveal(delay)} className="card">
      <GroupHeader Icon={Icon} title={title} count={items.length} />
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="chip px-3.5 py-1.5 text-[13px]">
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I work with."
      kicker="Hardware first, with a solid footing in the web — grouped by where each skill fits."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, gi) => (
          <motion.div key={group.category} {...reveal(gi * 0.08)} className="card">
            <GroupHeader Icon={group.Icon} title={group.category} count={group.items.length} />
            <div className="grid grid-cols-2 gap-3">
              {group.items.map(({ name, Icon, color }) => (
                <motion.div
                  key={name}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-3 transition-colors hover:border-brand/40 dark:border-slate-800 dark:bg-slate-950/40"
                >
                  <Icon
                    size={22}
                    style={color ? { color } : undefined}
                    className={`shrink-0 ${color ? "" : "text-brand"}`}
                  />
                  <span className="text-sm leading-snug font-medium text-slate-700 dark:text-slate-300">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-[1.6fr_1fr]">
        <ChipGroup Icon={LuWrench} title="Engineering process" items={practices} delay={0.05} />
        <ChipGroup Icon={LuLanguages} title="Spoken languages" items={languages} delay={0.1} />
      </div>
    </Section>
  );
}
