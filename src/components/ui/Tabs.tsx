("use client");

import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import { cn } from "../../utils/cn.ts";
import { Context } from "../../context/Context.tsx";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export type Tab = {
  section: string;
  route: string;
  icon: JSX.Element;
};

const getActiveTab = (propTabs: Tab[]): Tab => {
  let { pathname } = useLocation();
  let activeTab;
  const trimmedPath: string = pathname.substring(1);
  const foundTab = propTabs.find((tab) => tab.route === trimmedPath);
  if (foundTab) {
    activeTab = foundTab;
  } else {
    activeTab = propTabs[0];
  }
  return activeTab;
};

export const Tabs = ({
  propTabs,
  className,
}: {
  propTabs: Tab[];
  className?: string;
}) => {
  const { isDark, setDark, isMobile } = useContext(Context);
  const navigate: NavigateFunction = useNavigate();
  const [active, setActive] = useState<Tab>(getActiveTab(propTabs));

  const handleClick = (tab: Tab) => {
    setActive(tab);
    navigate(tab.route);
  };

  const handleThemeToggle = () => {
    setDark((prev: boolean) => !prev);
    localStorage.theme = isDark ? "dark" : "light";
  };

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-center gap-2 overflow-auto w-full md:w-auto sm:overflow-visible no-visible-scrollbar border-2 md:rounded-3xl bg-slate-100 dark:border-0",
          className,
          isMobile ? "dark:bg-neutral-800" : "dark:bg-opacity-10"
        )}
      >
        {propTabs.map((tab) => (
          <button
            key={tab.section}
            onClick={() => handleClick(tab)}
            className="relative px-4 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-opacity-5"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active?.section === tab.section && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className="absolute inset-0 bg-gray-300 dark:bg-opacity-20 rounded-full"
              />
            )}

            <span className="relative flex items-center md:gap-2 text-black dark:text-white">
              <span>{!isMobile && tab.section}</span>
              <span>{tab.icon}</span>
            </span>
          </button>
        ))}
        <button
          onClick={handleThemeToggle}
          className="relative px-4 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-opacity-5"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <span className="relative block text-black dark:text-white">
            {isDark ? <LightModeIcon /> : <DarkModeIcon />}
          </span>
        </button>
      </div>
    </>
  );
};
