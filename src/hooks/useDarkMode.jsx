import { useEffect, useState } from "react";

function useDarkMode() {
  const [isDark, setIsDark] = useState(
    localStorage.theme === "dark"
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDark]);

  return [isDark, setIsDark];
}

export default useDarkMode;
