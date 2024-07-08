import React from "react";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import TerminalIcon from "@mui/icons-material/Terminal";
import AnalyticsIcon from "@mui/icons-material/Analytics";

import type { Tab } from "./ui/Tabs";
import { Tabs } from "./ui/Tabs";

const Sections: Tab[] = [
  { section: "Home", icon: <HomeIcon />, route: "/" },
  { section: "About", icon: <InfoIcon />, route: "/about" },
  { section: "Skills", icon: <AnalyticsIcon />, route: "/skills" },
  { section: "Projects", icon: <TerminalIcon />, route: "/projects" },
  { section: "Contact", icon: <ContactMailIcon />, route: "/contact" },
];

const Navbar: React.FC = () => {
  return (
    <div className="Navbar w-screen h-fit grid place-items-center sticky bottom-0 md:bottom-12 left-0 right-0 z-50">
      <Tabs propTabs={Sections} />
    </div>
  );
};

export default Navbar;
