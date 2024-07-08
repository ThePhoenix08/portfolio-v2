import React, { createContext, useState, ReactNode, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

interface ContextProps {
  isMobile: boolean;
  isDark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const Context = createContext<ContextProps>({
  isMobile: false,
  isDark: false,
  setDark: () => {},
});

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const viewportWidth = useMediaQuery("(max-width:1024px)");

  const preferredTheme: boolean =
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  const htmlObjClassList: DOMTokenList = document.documentElement.classList;
  const [isDark, setDark] = useState<boolean>(preferredTheme);

  useEffect(() => {
    setIsMobile(viewportWidth);
  }, [viewportWidth]);

  useEffect(() => {
    if (isDark) {
      htmlObjClassList.add("dark");
    } else {
      htmlObjClassList.remove("dark");
    }
  }, [isDark]);

  return (
    <Context.Provider value={{ isMobile, isDark, setDark }}>
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
