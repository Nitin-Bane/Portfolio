import { motion } from "motion/react";
import { LuArrowRight, LuLinkedin, LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { profile } from "../data/profile";
import Section, { reveal } from "./Section";

const channels = [
  { Icon: LuMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { Icon: LuPhone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { Icon: LuLinkedin, label: "LinkedIn", value: "nitin-bane", href: profile.linkedin },
  { Icon: LuMapPin, label: "Location", value: profile.location },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something."
      kicker="Open to entry-level roles in embedded systems, electronics, or software development — and to interesting projects. Email is the fastest way to reach me."
    >
      <div className="grid gap-5 md:grid-cols-5">
        <motion.div {...reveal()} className="card relative isolate overflow-hidden md:col-span-3">
          <div
            aria-hidden
            className="absolute -top-24 -right-24 -z-10 h-64 w-64 rounded-full bg-brand/10 blur-3xl"
          />
          <h3 className="text-lg font-semibold">Get in touch</h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Have a role, an internship, or a hardware idea you'd like to talk through? Drop a line —
            I'll get back to you soon.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              Say hello <LuArrowRight />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">
              <LuLinkedin /> Connect on LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.ul
          {...reveal(0.05)}
          className="card divide-y divide-slate-200 overflow-hidden p-0 md:col-span-2 dark:divide-slate-800"
        >
          {channels.map(({ Icon, label, value, href }) => {
            const body = (
              <div className="flex items-center gap-3 px-5 py-3.5">
                <span className="icon-box h-8 w-8">
                  <Icon size={14} />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {label}
                  </p>
                  <p className="truncate text-sm font-medium">{value}</p>
                </div>
              </div>
            );
            const external = href?.startsWith("http");
            return (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="block transition-colors hover:bg-slate-50 dark:hover:bg-slate-900/60"
                  >
                    {body}
                  </a>
                ) : (
                  body
                )}
              </li>
            );
          })}
        </motion.ul>
      </div>
    </Section>
  );
}
