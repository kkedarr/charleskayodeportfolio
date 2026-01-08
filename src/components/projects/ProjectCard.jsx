import { SquareArrowOutUpRight, BookOpen, Github } from "lucide-react";

const ProjectCard = ({ project }) => {
  const disabledClass =
    "opacity-40 cursor-not-allowed pointer-events-none";

  return (
    <article
      className="
        group flex h-full flex-col justify-between
        rounded-2xl border border-border-light dark:border-border-dark
        bg-background-light dark:bg-background-dark
        p-5 sm:p-6
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-md
      "
    >
      {/* ======================
          Content
      ======================= */}
      <div>
        {/* Category */}
        <span className="text-xs font-semibold uppercase tracking-wide text-accent">
          {project.category}
        </span>

        {/* Title */}
        <h3 className="mt-2 text-base sm:text-lg font-semibold leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-muted-light dark:text-muted-dark">
          {project.description}
        </p>

        {/* Stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full border border-border-light dark:border-border-dark
                bg-surface-light dark:bg-surface-dark
                px-3 py-1 text-[11px] sm:text-xs font-medium
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* ======================
          Actions
      ======================= */}
      <div className="mt-6 space-y-3">

        {/* Top row — Demo + Code */}
        <div className="grid grid-cols-2 gap-3">

          {/* Demo */}
          <a
            href={project.demo || "#"}
            target="_blank"
            rel="noreferrer"
            className={`
              inline-flex items-center justify-center gap-2
              rounded-md px-3 py-2.5
              text-xs sm:text-sm font-medium
              transition-all duration-200
              hover:scale-[1.02] active:scale-[0.97]
              ${
                project.demo
                  ? "button-primary"
                  : disabledClass
              }
            `}
          >
            <SquareArrowOutUpRight size={16} />
            Demo
          </a>

          {/* GitHub */}
          <a
            href={project.github || "#"}
            target="_blank"
            rel="noreferrer"
            className={`
              inline-flex items-center justify-center gap-2
              rounded-md px-3 py-2.5
              text-xs sm:text-sm font-medium
              transition-all duration-200
              hover:scale-[1.02] active:scale-[0.97]
              ${
                project.github
                  ? "button-secondary"
                  : disabledClass
              }
            `}
          >
            <Github size={16} />
            Code
          </a>

        </div>

        {/* Bottom row — Case Study */}
        <a
          href={project.caseStudy || "#"}
          className={`
            inline-flex w-full items-center justify-center gap-2
            rounded-md px-3 py-2.5
            text-xs sm:text-sm font-medium
            transition-all duration-200
            hover:scale-[1.02] active:scale-[0.97]
            ${
              project.caseStudy
                ? "button-secondary"
                : disabledClass
            }
          `}
        >
          <BookOpen size={16} />
          Case Study
        </a>

      </div>

    </article>
  );
};

export default ProjectCard;