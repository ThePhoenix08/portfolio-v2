import React, { useState, useContext } from "react";
import { Typography, Button } from "@mui/joy";
import { Context } from "../context/Context.tsx";
import TechStack from "../components/TechStack.tsx";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import ShareIcon from "@mui/icons-material/Share";
import FileOpenIcon from "@mui/icons-material/FileOpen";

import { socialLinks } from "../data/data";

const Contact: React.FC = () => {
  const { isMobile } = useContext(Context);
  const size: "lg" | "md" = isMobile ? "md" : "lg";

  const [shareStateColor, setShare] = useState<
    "neutral" | "success" | "danger"
  >("neutral");

  const handleShare = (): void => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check out my Portfolio",
          text: "Explore my latest projects",
          url: socialLinks.portfolio,
        })
        .then(() => {
          setShare("success");
          setTimeout(() => {
            setShare("neutral");
          }, 5000);
        })
        .catch((error) => {
          setShare("danger");
          console.log(error.message);
          setTimeout(() => {
            setShare("neutral");
          }, 5000);
        });
    } else {
      // Fallback for devices or browsers that don't support navigator.share
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${socialLinks.portfolio}`,
        "_blank"
      );
    }
  };

  return (
    <section className="section flex-1 w-full grid place-items-center p-4 md:p-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col items-center justify-center gap-8 border-2 dark:border-zinc-700 rounded-xl p-8 shadow-lg dark:shadow-slate-800 h-full">
          <Typography level="h1" textColor="inherit">
            Contact Me
          </Typography>
          <div className="socials grid grid-cols-2 gap-4 md:gap-8 items-center">
            <ListItem
              buttonValue="Mail"
              line="Drop a Line at"
              size={size}
              endDecorator={<EmailIcon />}
              link={socialLinks.mailme}
            />
            <ListItem
              buttonValue="Github"
              line="See My Work at"
              size={size}
              endDecorator={<GitHubIcon />}
              link={socialLinks.github}
            />
            <ListItem
              buttonValue="LinkedIn"
              line="Let's Connect"
              size={size}
              endDecorator={<LinkedInIcon />}
              link={socialLinks.linkedin}
            />
            <ListItem
              buttonValue="Portfolio"
              line="Share My Work"
              size={size}
              endDecorator={<ShareIcon />}
              link={socialLinks.portfolio}
              onClick={handleShare}
              color={shareStateColor}
            />
            <ListItem
              buttonValue="Resume"
              line="View My Resume"
              size={size}
              endDecorator={<FileOpenIcon />}
              link={socialLinks.resume}
            />
          </div>
        </div>
        <TechStack />
      </div>
    </section>
  );
};

export const ListItem = ({
  line,
  size,
  endDecorator,
  link,
  buttonValue,
  onClick,
  color,
}: {
  line: string;
  size: "md" | "lg";
  endDecorator: JSX.Element;
  link: string;
  buttonValue: string;
  onClick?: () => void;
  color?: "neutral" | "success" | "danger";
}): JSX.Element => {
  return (
    <>
      <Typography fontSize={size} level="h3" textColor="inherit">
        {line + " "}
      </Typography>
      <Button
        component="a"
        href={link}
        endDecorator={endDecorator}
        size={size}
        variant="soft"
        onClick={onClick}
        color={color || "neutral"}
      >
        {buttonValue}
      </Button>
    </>
  );
};

export default Contact;
