import { SquareArrowOutUpRight, FileText, Github } from "lucide-react";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import HeroImage from "../assets/portfolio-hero.jpg";
import ResumeFile from "../assets/omokayoderesume.pdf";

function Hero() {
  return (
    <Section id="hero">
      <Container>
        <div
          className="
            grid grid-cols-1 items-center
            gap-10 sm:gap-12
            lg:grid-cols-2 lg:gap-16
          "
        >
          {/* ================= LEFT CONTENT ================= */}
          <div className="text-center lg:text-left">
            {/* Headline */}
            <h1
              className="
                text-3xl sm:text-4xl md:text-5xl
                font-semibold leading-tight
                text-foreground-light dark:text-foreground-dark
              "
            >
              Frontend Engineer building{" "}
              <span className="text-accent">
                scalable, high-performance
              </span>{" "}
              React applications
            </h1>

            {/* Subtitle */}
            <p
              className="
                mx-auto mt-5 max-w-xl
                text-base sm:text-lg
                text-muted-light dark:text-muted-dark
                lg:mx-0
              "
            >
              I design and develop production-ready web applications with clean
              architecture, strong performance, accessibility, and
              business-driven UX.
            </p>

            {/* Tech stack pills */}
            <div
              className="
                mt-6 flex flex-wrap justify-center gap-2
                lg:justify-start
              "
            >
              {[
                "React",
                "JavaScript",
                "TypeScript",
                "TailwindCSS",
                "REST APIs",
                "Performance",
                "Accessibility",
              ].map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border border-border-light dark:border-border-dark
                    bg-surface-light dark:bg-surface-dark
                    px-3 py-1.5 text-xs sm:text-sm font-medium
                    text-foreground-light dark:text-foreground-dark
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="
                mt-8 flex flex-col gap-3
                sm:flex-row sm:justify-center sm:gap-4
                lg:justify-start
              "
            >
              <a
                href="#projects"
                className="button-primary inline-flex items-center justify-center gap-2 hover:scale-[1.03] active:scale-[0.98] transition-transform duration-200"
              >
                <SquareArrowOutUpRight size={18} />
                View Projects
              </a>

              <a
                href={ResumeFile}
                className="button-secondary inline-flex items-center justify-center gap-2 hover:scale-[1.03] active:scale-[0.98] transition-transform duration-200"
              >
                <FileText size={18} />
                Download CV
              </a>

              <a
                href="https://github.com/kkedarr"
                target="_blank"
                rel="noreferrer"
                className="button-secondary inline-flex items-center justify-center gap-2 hover:scale-[1.03] active:scale-[0.98] transition-transform duration-200"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>
          </div>

          {/* ================= RIGHT VISUAL ================= */}
          <div className="relative">
            <div
              className="
                overflow-hidden rounded-2xl
                border border-border-light dark:border-border-dark
                shadow-sm
              "
            >
              <img
                src={HeroImage}
                alt="Code preview"
                loading="lazy"
                className="
                  w-full
                  h-[260px] sm:h-[320px] md:h-[380px] lg:h-[460px]
                  object-cover
                "
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Hero;
