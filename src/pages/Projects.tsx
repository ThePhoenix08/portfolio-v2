import React from "react";
import { Typography } from "@mui/joy";

import { HoverEffect } from "../components/ui/card-hover-effect.tsx";
import { projects } from "../data/data";

const Projects: React.FC = () => {
  return (
    <section className="section flex-1 w-full grid place-items-center">
      <div className="flex flex-col items-center justify-center">
        <Typography level="h1" textColor="inherit">
          Projects
        </Typography>
        <div className="max-w-6xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
