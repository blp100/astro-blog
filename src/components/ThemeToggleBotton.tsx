import React, { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

const themes = ["light", "dark"];

const ThemeToggle = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) {
      console.log("SSR");
      return undefined;
    }
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      console.log("had localStorage");
      return localStorage.getItem("theme");
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      console.log("is dark");
      return "dark";
    }
    return "light";
  });

  const toggleTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", t);
    setTheme(() => t);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <div className="inline-flex p-1 items-center rounded-3xl bg-amber-300 dark:bg-zinc-600 hover:bg-amber-200 dark:hover:bg-slate-500">
      {themes.map((t) => {
        const checked = t === theme;
        return (
          <button
            key={t}
            className={`${
              checked ? "bg-white text-black" : ""
            } cursor-pointer rounded-3xl p-2`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {t === "light" ? <IoSunny /> : <IoMoon />}
          </button>
        );
      })}
    </div>
  ) : (
    <div />
  );
};

export default ThemeToggle;
