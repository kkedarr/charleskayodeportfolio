import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import certifications from "../data/certifications";
import tools from "../data/tools";
import { useState } from "react";
import AnimatedDivider from "../components/ui/AnimatedDivider";

const Certifications = () => {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <Section>
      <Container>
        <h2 className="section-title text-center">
          Certifications & Tools
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-center text-sm sm:text-base text-muted-light dark:text-muted-dark">
          Industry-recognized certifications and professional tools used to design,
          build, test, and ship high-quality production software.
        </p>

        {/* =======================
            Certifications
        ======================== */}
        <h3 className="mt-10 sm:mt-14 mb-4 sm:mb-6 text-center text-base sm:text-lg font-semibold">
          Professional Certifications
        </h3>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="
                group relative flex h-full flex-col
                overflow-hidden rounded-xl sm:rounded-2xl
                border border-border-light dark:border-border-dark
                bg-background-light dark:bg-background-dark
                p-3 sm:p-4 md:p-6 shadow-sm
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-md
              "
            >
              {/* Certificate Image */}
              <div className="flex h-24 sm:h-28 md:h-32 items-center justify-center">
                <img
                  src={cert.images?.[0] || cert.image}
                  alt={cert.name}
                  loading="lazy"
                  className="h-24 sm:h-28 md:h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <p className="mt-3 text-xs sm:text-sm font-semibold leading-snug text-center">
                {cert.name}
              </p>

              {/* Meta */}
              <p className="mt-1 text-[11px] sm:text-xs text-center text-muted-light dark:text-muted-dark">
                {cert.issuer} • {cert.year}
              </p>

              {/* Score Badge */}
              {cert.score && (
                <div className="mt-2 self-center inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] sm:text-xs font-medium text-primary">
                  {cert.score}
                </div>
              )}

              {/* CTA */}
              <div className="mt-auto pt-3">
                {cert.images?.length ? (
                  <button
                    onClick={() => setActiveCert(cert)}
                    className="
                      inline-flex w-full items-center justify-center
                      rounded-md border border-border-light dark:border-border-dark
                      px-2.5 py-2 text-[11px] sm:text-xs font-medium
                      transition-colors
                      hover:bg-background-dark/5 dark:hover:bg-background-light/5
                    "
                  >
                    View Certificates →
                  </button>
                ) : (
                  <a
                    href={cert.link || cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex w-full items-center justify-center
                      rounded-md border border-border-light dark:border-border-dark
                      px-2.5 py-2 text-[11px] sm:text-xs font-medium
                      transition-colors
                      hover:bg-background-dark/5 dark:hover:bg-background-light/5
                    "
                  >
                    {cert.link ? "Verify Certificate →" : "View Certificate →"}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* =======================
            Certificate Modal
        ======================== */}
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
            <div className="relative w-full max-w-5xl rounded-xl bg-background-light dark:bg-background-dark p-4 sm:p-6 shadow-lg">
              {/* Close Button */}
              <button
                onClick={() => setActiveCert(null)}
                className="absolute right-4 top-4 text-xs sm:text-sm font-medium text-muted-light hover:text-primary"
              >
                ✕ Close
              </button>

              <h4 className="mb-4 sm:mb-6 text-center text-base sm:text-lg font-semibold">
                {activeCert.name} — Certificates
              </h4>

              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {activeCert.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Certificate ${index + 1}`}
                    className="rounded-lg object-contain shadow-sm"
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =======================
            Tools & Platforms
        ======================== */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <h3 className="mb-4 sm:mb-6 text-center text-base sm:text-lg font-semibold">
            Tools & Platforms
          </h3>

          <div className="grid grid-cols-3 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-6 md:gap-5">
            {tools.map((tool) => {
              const Icon = tool.icon;

              return (
                <div
                  key={tool.name}
                  className="
                    group flex flex-col items-center justify-center
                    rounded-xl border border-border-light dark:border-border-dark
                    bg-background-light dark:bg-background-dark
                    p-3 sm:p-4 md:p-5 text-center shadow-sm
                    transition-all duration-200
                    hover:-translate-y-0.5 hover:shadow-md
                  "
                >
                  <Icon
                    className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 transition-all duration-300 group-hover:-translate-y-1"
                    style={{ color: tool.color }}
                  />

                  <p className="mt-2 sm:mt-3 text-[11px] sm:text-xs md:text-sm font-semibold">
                    {tool.name}
                  </p>

                  <p className="hidden sm:block mt-1 text-[10px] sm:text-xs text-muted-light dark:text-muted-dark text-center">
                    {tool.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};



export default Certifications;
