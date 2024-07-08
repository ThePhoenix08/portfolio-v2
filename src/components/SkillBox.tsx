import React from "react";

type Props = {
  icon_slug: string;
  name: string;
  level: "Basic" | "Intermediate" | "Experienced";
};

const SkillBox: React.FC<Props> = ({ icon_slug, name, level }) => {
  const SimpleIconsEndpoint: string = "https://cdn.simpleicons.org/";
  const icon_url: string = SimpleIconsEndpoint + icon_slug;

  return (
    <div className="flex gap-4 items-center border-2 rounded-lg p-2 dark:border-zinc-700">
      <div className={`w-8`}>
        <img height="32" width="32" src={icon_url} />
      </div>
      <div className="flex flex-col">
        <div>{name}</div>
        <div className="text-slate-600 dark:text-zinc-400">{level}</div>
      </div>
    </div>
  );
};

export default SkillBox;
