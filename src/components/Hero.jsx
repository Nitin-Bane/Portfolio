import { Fragment } from "react";
import { motion } from "motion/react";
import { LuArrowRight, LuChevronRight, LuDownload, LuLinkedin, LuMail, LuMapPin } from "react-icons/lu";
import { pipeline, profile } from "../data/profile";
import CircuitArt from "./CircuitArt";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60 dark:opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(600px circle at 15% 20%, color-mix(in oklab, var(--color-brand) 16%, transparent), transparent 45%), radial-gradient(520px circle at 85% 35%, rgba(56,189,248,0.12), transparent 45%)",
        }}
      />

      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-4 py-1.5 text-xs font-medium text-slate-600 backdrop-blur dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-300"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Open to entry-level roles
          </motion.div>

          <motion.h1
            {...fadeUp(0.05)}
            className="mt-6 text-4xl leading-[1.08] font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I'm <span className="text-brand">{profile.name.split(" ")[0]}</span>.
            <br />
            <span className="text-slate-600 dark:text-slate-400">
              I build systems that sense and respond.
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.1)}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400"
          >
            {profile.bio}
          </motion.p>

          <motion.div {...fadeUp(0.15)} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View my projects <LuArrowRight />
            </a>
            <a href={profile.resume} download className="btn-ghost">
              <LuDownload /> Download Resume
            </a>
          </motion.div>

          <motion.div
            {...fadeUp(0.2)}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500 dark:text-slate-400"
          >
            <span className="inline-flex items-center gap-2">
              <LuMapPin /> {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-brand"
            >
              <LuMail /> {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-brand"
            >
              <LuLinkedin /> LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block"
        >
          <CircuitArt />
          <div className="mt-2 flex items-center justify-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
            {pipeline.map(({ Icon, label }, i) => (
              <Fragment key={label}>
                {i > 0 && <LuChevronRight className="text-slate-300 dark:text-slate-600" />}
                <span className="chip">
                  <Icon className="text-brand" /> {label}
                </span>
              </Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
