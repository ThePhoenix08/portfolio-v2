import { cn } from "../../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import CardTitle from "../sub components/CardTitle.tsx";
import CardDescription from "../sub components/CardDescription.tsx";
import Card from "../sub components/Card.tsx";
import CardButtons from "../sub components/CardButtons.tsx";
import CardChips from "../sub components/CardChips.tsx";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    repo: string;
    chips: string[];
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (idx: number) => {
    setHoveredIndex(idx);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 py-4", className)}>
      {items.map((item, idx) => (
        <div
          key={item.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => handleMouseEnter(idx)}
          onMouseLeave={handleMouseLeave}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-400 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="flex gap-2 flex-col sm:flex-row justify-between">
              <CardTitle>{item.title}</CardTitle>
              <CardChips chips={item.chips}></CardChips>
            </div>
            <CardDescription>{item.description}</CardDescription>
            <CardButtons liveDemo={item.link} githubRepo={item.repo} />
          </Card>
        </div>
      ))}
    </div>
  );
};
