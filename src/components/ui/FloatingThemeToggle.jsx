import { Sun, Moon } from "lucide-react";
import useDarkMode from "../../hooks/useDarkMode";

function FloatingThemeToggle() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setIsDark(!isDark)}
      className="
        fixed right-1 top-1/2 z-50 -translate-y-1/2
        flex h-11 w-11 items-center justify-center
        rounded-sm border
        border-border-light dark:border-border-dark
        bg-background-light dark:bg-background-dark
        text-foreground-light dark:text-foreground-dark
        shadow-lg backdrop-blur
        transition-all duration-200
        hover:-translate-y-[52%] hover:shadow-xl
        focus:outline-none focus:ring-2 focus:ring-primary/40
      "
    >
      {isDark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}

export default FloatingThemeToggle;
