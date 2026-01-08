import { BookOpen } from "lucide-react";

function CaseStudyCard({ study }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark transition hover:shadow-md">
      {/* Image */}
      <div className="overflow-hidden rounded-t-xl">
        <img
          src={study.image}
          alt={study.title}
          className="h-60 w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold">
          {study.title}
        </h3>

        <div className="mt-3 space-y-2 text-sm text-muted-light dark:text-muted-dark">
          <p>
            <span className="font-medium text-foreground-light dark:text-foreground-dark">
              Problem:
            </span>{" "}
            {study.problem}
          </p>

          <p>
            <span className="font-medium text-foreground-light dark:text-foreground-dark">
              Architecture:
            </span>{" "}
            {study.architecture}
          </p>

          <p>
            <span className="font-medium text-foreground-light dark:text-foreground-dark">
              Impact:
            </span>{" "}
            {study.impact}
          </p>
        </div>

        <div className="mt-5">
          <a
            href={study.link}
            className="button-primary flex items-center gap-2 text-sm"
          >
            <BookOpen size={18} />
            View Case Study
          </a>
        </div>
      </div>
    </div>
  );
}

export default CaseStudyCard;
