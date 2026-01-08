import { useEffect, useState } from "react";

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function getInitialTheme() {
  // If user already chose manually → respect it
  if (localStorage.theme === "dark") return true;
  if (localStorage.theme === "light") return false;

  // Otherwise follow system
  return getSystemTheme();
}

function useDarkMode() {
  const [isDark, setIsDark] = useState(getInitialTheme);
  const [hasUserPreference, setHasUserPreference] = useState(
    "theme" in localStorage
  );

  // Apply theme to DOM
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // Listen for OS theme changes ONLY if user hasn't chosen manually
  useEffect(() => {
    if (hasUserPreference) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = (e) => {
      setIsDark(e.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [hasUserPreference]);

  // Wrapped setter to track manual override
  const setTheme = (value) => {
    setHasUserPreference(true);
    localStorage.theme = value ? "dark" : "light";
    setIsDark(value);
  };

  return [isDark, setTheme];
}

export default useDarkMode;
