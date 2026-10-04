import { LuArrowUp, LuLinkedin, LuMail, LuPhone } from "react-icons/lu";
import { profile } from "../data/profile";

const links = [
  { Icon: LuLinkedin, label: "LinkedIn", href: profile.linkedin },
  { Icon: LuMail, label: "Email", href: `mailto:${profile.email}` },
  { Icon: LuPhone, label: "Phone", href: `tel:${profile.phone.replace(/\s/g, "")}` },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="container-x flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-center text-xs text-slate-500 sm:text-left dark:text-slate-400">
          © {new Date().getFullYear()} {profile.fullName}. Built with React, Tailwind CSS, and Motion.
        </p>
        <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
          {links.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              className="transition-colors hover:text-brand"
            >
              <Icon size={16} />
            </a>
          ))}
          <a
            href="#top"
            aria-label="Back to top"
            className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 transition-colors hover:border-brand hover:text-brand dark:border-slate-800"
          >
            <LuArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
