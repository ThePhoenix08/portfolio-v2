import { cn } from "../../utils/cn";

const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "dark:text-zinc-400 tracking-wide leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
};

export default CardDescription;
