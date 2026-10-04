import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LuMenu, LuMoon, LuSun, LuX } from "react-icons/lu";
import { navLinks } from "../data/profile";
import { useActiveSection } from "../hooks/useActiveSection";

const sectionIds = navLinks.map((l) => l.href.slice(1));

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="font-mono text-lg font-semibold tracking-tight">
          <span className="text-brand">&lt;</span>
          Nitin
          <span className="text-brand"> /&gt;</span>
        </a>

        <ul className="hidden items-center gap-1 text-sm font-medium md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative isolate rounded-full px-3.5 py-2 transition-colors ${
                    isActive
                      ? "text-brand"
                      : "text-slate-600 hover:text-brand dark:text-slate-300"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-brand/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 transition-all hover:border-brand hover:text-brand dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              {theme === "dark" ? <LuSun size={16} /> : <LuMoon size={16} />}
            </motion.div>
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 md:hidden dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
          >
            {open ? <LuX size={16} /> : <LuMenu size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-slate-200 md:hidden dark:border-slate-800"
          >
            <ul className="container-x flex flex-col gap-1 py-4 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-slate-700 transition-colors hover:bg-slate-100 hover:text-brand dark:text-slate-200 dark:hover:bg-slate-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
