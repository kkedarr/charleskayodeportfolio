import { X } from "lucide-react";

function CaseStudyModal({ study, onClose }) {
  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-end sm:items-center justify-center
        bg-black/70 backdrop-blur-sm
        px-3 sm:px-4
      "
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          w-full max-w-4xl
          max-h-[92vh]
          overflow-hidden
          rounded-t-2xl sm:rounded-2xl
          bg-background-light dark:bg-background-dark
          shadow-xl
          animate-in fade-in zoom-in-95 duration-200
        "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="
            absolute right-3 top-3 z-20
            flex h-9 w-9 items-center justify-center
            rounded-full border
            border-border-light dark:border-border-dark
            bg-background-light dark:bg-background-dark
            text-muted-light dark:text-muted-dark
            transition
            hover:text-primary hover:scale-105
            focus:outline-none focus:ring-2 focus:ring-primary/40
          "
        >
          <X className="h-4 w-4" />
        </button>

        {/* Scrollable Content */}
        <div className="max-h-[92vh] overflow-y-auto">
          {/* Hero Image */}
          <div className="relative">
            <img
              src={study.image}
              alt={study.title}
              loading="lazy"
              className="
                h-56 sm:h-72 md:h-80
                w-full object-cover
              "
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 md:p-8 space-y-6">
            {/* Title */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug">
              {study.title}
            </h3>

            <SectionBlock title="Problem">
              {study.problem}
            </SectionBlock>

            <SectionBlock title="Architecture & Approach">
              {study.architecture}
            </SectionBlock>

            <SectionBlock title="Impact">
              {study.impact}
            </SectionBlock>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------
   Reusable block
------------------------------- */
function SectionBlock({ title, children }) {
  return (
    <div className="space-y-1.5">
      <h4 className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wide">
        {title}
      </h4>
      <p className="text-sm leading-relaxed text-muted-light dark:text-muted-dark">
        {children}
      </p>
    </div>
  );
}

export default CaseStudyModal;

