import { Github, Mail, MapPin } from "lucide-react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="border-t border-border-light dark:border-border-dark">
      <Container>
        <div
          className="
            flex flex-col items-center justify-between
            gap-6 py-8 text-sm
            md:flex-row
          "
        >
          {/* Left */}
          <div className="text-center md:text-left">
            <p className="font-medium text-foreground-light dark:text-foreground-dark">
              © {new Date().getFullYear()} Omokayode Charles Omodara
            </p>

            <div className="mt-1 flex items-center justify-center gap-2 text-muted-light dark:text-muted-dark md:justify-start">
              <MapPin size={14} />
              <span>Lagos, Nigeria</span>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/kkedarr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                flex h-9 w-9 items-center justify-center rounded-lg
                border border-border-light dark:border-border-dark
                transition
                hover:bg-surface-light dark:hover:bg-surface-dark
              "
            >
              <Github size={18} />
            </a>

            <a
              href="mailto:omodaraomokayode@gmail.com"
              aria-label="Email"
              className="
                flex h-9 w-9 items-center justify-center rounded-lg
                border border-border-light dark:border-border-dark
                transition
                hover:bg-surface-light dark:hover:bg-surface-dark
              "
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
