import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed right-1 bottom-4 sm:bottom-6 md:bottom-20 z-50
        flex h-11 w-11 items-center justify-center rounded-full
        border border-border-light dark:border-border-dark
        bg-background-light dark:bg-background-dark
        text-foreground-light dark:text-foreground-dark
        shadow-lg backdrop-blur
        transition-all duration-300 ease-out
        hover:scale-105 hover:shadow-xl
        hover:text-primary
        focus:outline-none focus:ring-2 focus:ring-primary/40

        ${
          visible
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-6 opacity-0 pointer-events-none"
        }
      `}
    >
      <ArrowUp size={18} />
    </button>
  );
};

export default BackToTop;
