import React from "react";
import { Link } from "react-router-dom";

import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { socialLinks } from "../data/data.ts";
import developer_vector from "../assets/developer_vector.svg";

type linksObject = {
  linkedin: string;
  github: string;
  mailme: string;
  portfolio: string;
  resume: string;
};

const Hero: React.FC = () => {
  const socials: linksObject = socialLinks;

  return (
    <section className="section flex-1 w-full grid place-items-center overflow-hidden">
      <div className="container flex flex-col-reverse justify-center items-center md:flex-row z-20 pointer-events-none">
        <div className="content flex flex-col gap-4 pointer-events-auto">
          <p className="text-2xl">Hello, I am</p>
          <p className="text-4xl">Vighnesh Brahme</p>
          <p className="text-2xl">Junior Full Stack Developer</p>
          <div className="btn-box flex gap-4 justify-center items-center">
            <Button
              size="md"
              variant="solid"
              color="primary"
              component="a"
              href={socials.resume}
            >
              Download Resume
            </Button>
            <Link to="/contact">
              <Button size="md" variant="soft" color="neutral">
                Contact Info
              </Button>
            </Link>
          </div>
          <div className="socials flex justify-center gap-2">
            <IconButton
              aria-label="Icon Link to Linkedin Profile"
              component="a"
              href={socials.linkedin}
              sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }}
              color="secondary"
              // i know this option is not valid color, but its fallback works as intended
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              aria-label="Open in new tab"
              component="a"
              href={socials.github}
              sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }}
              color="secondary"
              // i know this option is not valid color, but its fallback works as intended
            >
              <GitHubIcon />
            </IconButton>
          </div>
        </div>
        <div className="pic w-[80vw] md:w-[40vw] pointer-events-auto">
          <img
            src={developer_vector}
            alt="developer vector image"
            width="100%"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
