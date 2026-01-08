import { BookOpen } from "lucide-react";

function CaseStudyCard({ study, onOpen }) {
  return (
    <div
      className="
        group
        overflow-hidden rounded-2xl
        border border-border-light dark:border-border-dark
        bg-background-light dark:bg-background-dark
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-md
      "
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={study.image}
          alt={study.title}
          loading="lazy"
          className="
            aspect-[16/10] w-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />

        {/* Subtle overlay on hover */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-gradient-to-t from-black/20 via-transparent to-transparent
            opacity-0 transition-opacity duration-300
            group-hover:opacity-100
          "
        />
      </div>

      {/* Content */}
      <div
        className="
          flex flex-col gap-3
          p-4 sm:p-5
        "
      >
        {/* Title */}
        <h3
          className="
            text-sm sm:text-base
            font-semibold leading-snug
            line-clamp-2
          "
        >
          {study.title}
        </h3>

        {/* CTA */}
        <button
          onClick={onOpen}
          className="
            inline-flex items-center justify-center gap-2
            rounded-md border
            border-border-light dark:border-border-dark
            px-3 py-2 sm:px-4
            text-xs sm:text-sm font-medium
            transition-all duration-200
            hover:bg-muted-light/40 dark:hover:bg-muted-dark/40
            hover:scale-[1.02]
            active:scale-[0.98]
          "
        >
          <BookOpen className="h-4 w-4" />
          View Case Study
        </button>
      </div>
    </div>
  );
}

export default CaseStudyCard;

