import { motion } from "motion/react";

export const reveal = (delay = 0, y = 18) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, delay },
});

export default function Section({ id, eyebrow, title, kicker, children }) {
  return (
    <section id={id} className="section">
      <div className="container-x">
        <motion.div {...reveal(0, 16)} className="mb-10 max-w-2xl">
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          <h2 className="heading">{title}</h2>
          {kicker && (
            <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">{kicker}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
