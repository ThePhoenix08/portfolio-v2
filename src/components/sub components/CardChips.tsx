import { cn } from "../../utils/cn";
import SkillIcons from "../../data/icons";

const CardChips = ({
  className,
  chips,
}: {
  className?: string;
  chips: string[];
}) => {
  const SimpleIconsEndpoint: string = "https://cdn.simpleicons.org/";

  return (
    <div
      className={cn(
        "p-2 flex flex-wrap gap-2 rounded-3xl border-2 border-slate-300 w-fit bg-white dark:bg-opacity-10",
        className
      )}
    >
      {chips.map((chip, index) => (
        <div key={index} className="w-4 md:w-6">
          <img
            src={SimpleIconsEndpoint + SkillIcons[chip]}
            alt={chip + " icon"}
          />
        </div>
      ))}
    </div>
  );
};

export default CardChips;
