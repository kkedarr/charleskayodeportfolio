import Container from "./Container";
import useDarkMode from "../../hooks/useDarkMode";

import { Sun, Moon, ArrowUpRight } from "lucide-react";

function Navbar() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <header
      className="
        sticky top-0 z-50
        border-b border-border-light/60 dark:border-border-dark/60
        bg-background-light/75 dark:bg-background-dark/75
        backdrop-blur-lg
        supports-[backdrop-filter]:bg-background-light/60
        dark:supports-[backdrop-filter]:bg-background-dark/60
      "
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            {/* Logo */}
            {/*<div
              className="
                flex h-9 w-9 items-center justify-center
                rounded-xl
                bg-gradient-to-br from-primary to-accent
                text-sm font-semibold text-white
                shadow-sm
              "
            >
              OC
            </div>*/}

            {/* Name */}
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-tight">
                Omokayode Charles
              </p>
              <p className="text-[11px] text-muted-light dark:text-muted-dark">
                Frontend Engineer
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            {/*<button
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle theme"
              className="
                inline-flex h-9 w-9 items-center justify-center
                rounded-lg
                border border-border-light dark:border-border-dark
                bg-background-light dark:bg-background-dark
                transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-sm
                focus:outline-none focus:ring-2 focus:ring-primary/30
              "
            >
              {isDark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>*/}

            {/* Primary CTA */}
            <a
            href="#contact"
            className="
                inline-flex items-center gap-2
                rounded-lg px-4 py-2
                text-sm font-medium
                border border-border-light dark:border-border-dark

                bg-primary text-background-dark
                dark:bg-primary dark:text-white

                shadow-sm transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-md hover:opacity-95
                focus:outline-none focus:ring-2 focus:ring-primary/40
            "
            >
            Let’s Talk
            <ArrowUpRight className="h-4 w-4" />
            </a>

          </div>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;

