import { cn } from "../../utils/cn";

const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "dark:text-zinc-100 text-xl font-bold tracking-wide mt-2",
        className
      )}
    >
      {children}
    </h4>
  );
};

export default CardTitle;
