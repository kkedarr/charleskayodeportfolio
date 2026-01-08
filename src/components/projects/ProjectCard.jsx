import { SquareArrowOutUpRight, BookOpen, Github } from "lucide-react";

const ProjectCard = ({ project }) => {
  const disabledClass =
    "opacity-50 cursor-not-allowed pointer-events-none";

  return (
    <div className="card flex flex-col justify-between">
      {/* Content */}
      <div>
        <span className="text-sm font-medium text-accent">
          {project.category}
        </span>

        <h3 className="mt-2 text-lg font-semibold">
          {project.title}
        </h3>

        <p className="mt-3 text-sm text-muted-light dark:text-muted-dark">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border-light dark:border-border-dark
                         px-3 py-1 text-xs font-medium
                         bg-surface-light dark:bg-surface-dark"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-col gap-3">
        <a
          href={project.demo || "#"}
          target="_blank"
          rel="noreferrer"
          className={`button-primary items-center flex gap-2 text-sm ${
            !project.demo ? disabledClass : ""
          }`}
        >
            <SquareArrowOutUpRight size={18}/>
          Live Demo
        </a>

        <a
          href={project.github || "#"}
          target="_blank"
          rel="noreferrer"
          className={`button-secondary items-center flex gap-2 text-sm ${
            !project.github ? disabledClass : ""
          }`}
        >
            <Github size={18}/>
          GitHub
        </a>

        <a
          href={project.caseStudy || "#"}
          className={`button-secondary items-center flex gap-2 text-sm ${
            !project.caseStudy ? disabledClass : ""
          }`}
        >
            <BookOpen size={18}/>
          Case Study
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;

