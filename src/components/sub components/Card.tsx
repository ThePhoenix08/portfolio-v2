import { cn } from "../../utils/cn";

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-slate-300 dark:bg-zinc-900 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-20">
        <div className="p-4  flex flex-col gap-4">{children}</div>
      </div>
    </div>
  );
};

export default Card;
