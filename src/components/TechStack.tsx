import React, { useContext } from "react";
import { Typography } from "@mui/joy";
import { Context } from "../context/Context.tsx";
import { ListItem } from "../pages/Contact";
import SkillIcons from "../data/icons.ts";

const TechStack: React.FC = () => {
  const { isMobile } = useContext(Context);
  const size: "lg" | "md" = isMobile ? "md" : "lg";

  return (
    <div className="flex flex-col items-center justify-center gap-8 border-2 dark:border-zinc-700 rounded-xl p-8 shadow-lg dark:shadow-slate-800 h-full">
      <Typography level="h1" textColor="inherit">
        Tech Stack
      </Typography>
      <div className="socials grid grid-cols-2 gap-4 md:gap-8 items-center">
        <ListItem
          buttonValue="ReactJS"
          line="Framework used"
          size={size}
          endDecorator={<Icon slug={SkillIcons.ReactJS} />}
          link="https://react.dev/"
        />
        <ListItem
          buttonValue="MUI's Joy UI"
          line="For general parts"
          size={size}
          endDecorator={<Icon slug={SkillIcons.MaterialUI} />}
          link="https://mui.com/joy-ui/getting-started/"
        />
        <ListItem
          buttonValue="Acternity UI"
          line="For cool parts"
          size={size}
          endDecorator={<Icon slug="aerospike" />}
          link="https://ui.aceternity.com/"
        />
        <ListItem
          buttonValue="Tailwind CSS"
          line="Styled using"
          size={size}
          endDecorator={<Icon slug={SkillIcons.TailwindCSS} />}
          link="https://tailwindcss.com/"
        />
        <ListItem
          buttonValue="Flaticon"
          line="Favicon from Freepik"
          size={size}
          endDecorator={<Icon slug="freepik" />}
          link="https://www.flaticon.com/free-icons/developer"
        />
        <ListItem
          buttonValue="Simple Icons"
          line="Icons from"
          size={size}
          endDecorator={<Icon slug="simpleIcons" />}
          link="https://simpleicons.org/"
        />
      </div>
    </div>
  );
};

const Icon = ({ slug }: { slug: string }): JSX.Element => {
  return (
    <div className={`w-6`}>
      <img height="32" width="32" src={"https://cdn.simpleicons.org/" + slug} />
    </div>
  );
};

export default TechStack;
