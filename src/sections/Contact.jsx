import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import ResumeFile from "../assets/omokayoderesume.pdf";

import { Mail, FileText, SquareArrowOutUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";

function ContactCTA() {
  return (
    <Section
      id="contact"
      className="border-t border-border-light dark:border-border-dark"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">

          {/* Heading */}
          <h2 className="section-title">
            Let’s Build Something Impactful
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto mt-4 max-w-2xl
              text-sm sm:text-base
              leading-relaxed
              text-muted-light dark:text-muted-dark
            "
          >
            I’m open to full-time roles, contract opportunities, and meaningful
            collaborations. If you’re building a product that values performance,
            quality engineering, and great user experience, I’d love to connect
            and explore how I can contribute.
          </p>

          {/* CTA Buttons */}
          <div
            className="
              mt-8 sm:mt-10
              grid grid-cols-1 gap-3
              sm:grid-cols-3 sm:gap-4
            "
          >
            {/* Email */}
            {/* Email */}
            <a
            href="mailto:omodaraomokayode@gmail.com"
            className="
                group inline-flex items-center justify-center gap-2
                rounded-lg
                border border-border-light dark:border-border-dark
                bg-background-light dark:bg-background-dark
                px-5 py-3 text-sm font-medium
                transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-sm
                hover:bg-muted-light/40 dark:hover:bg-muted-dark/20
                focus:outline-none focus:ring-2 focus:ring-primary/30
            "
            >
            <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
            <span>Contact Me</span>
            </a>



            {/* CV */}
            <a
              href={ResumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group inline-flex items-center justify-center gap-2
                rounded-lg
                border border-border-light dark:border-border-dark
                bg-background-light dark:bg-background-dark
                px-5 py-3 text-sm font-medium
                transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-sm
                hover:bg-muted-light/40 dark:hover:bg-muted-dark/20
                focus:outline-none focus:ring-2 focus:ring-primary/30
              "
            >
              <FileText className="h-4 w-4 transition-transform group-hover:scale-110" />
              <span>Download CV</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/kkedarr"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group inline-flex items-center justify-center gap-2
                rounded-lg
                border border-border-light dark:border-border-dark
                bg-background-light dark:bg-background-dark
                px-5 py-3 text-sm font-medium
                transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-sm
                hover:bg-muted-light/40 dark:hover:bg-muted-dark/20
                focus:outline-none focus:ring-2 focus:ring-primary/30
              "
            >
              <SquareArrowOutUpRight className="h-4 w-4 transition-transform group-hover:scale-110" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Subtle trust note */}
          <p className="mt-6 text-xs text-muted-light dark:text-muted-dark">
            Typically responds within 24 hours • Open to remote and onsite opportunities
          </p>

        </div>
      </Container>
    </Section>
  );
}

export default ContactCTA;
