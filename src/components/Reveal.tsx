import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  index,
  title,
  kicker,
}: {
  index: string;
  title: string;
  kicker?: string;
}) {
  return (
    <Reveal className="mb-10 md:mb-16">
      <div className="flex items-end justify-between gap-6 border-b border-hairline pb-5">
        <div>
          <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">{index}</span>
          <h2 className="mt-3 font-display text-3xl leading-none font-bold tracking-tight sm:text-5xl">
            {title}
          </h2>
        </div>
        {kicker ? (
          <p className="hidden max-w-xs text-right text-sm text-muted-foreground md:block">
            {kicker}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
