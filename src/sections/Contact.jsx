import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import ResumeFile from "../assets/omokayoderesume.pdf";

import { Mail, FileText, SquareArrowOutUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";

function ContactCTA() {
  return (
    <Section id="contact" className="border-t border-border-light dark:border-border-dark">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">
            Ready to Build Something Great?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-light dark:text-muted-dark">
            Whether you're looking to hire a frontend engineer, collaborate on a
            product, or discuss an idea, I'm always open to meaningful
            conversations and new opportunities.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {/* Email */}
            <a
              href="mailto:omodaraomokayode@gmail.com"
              className="
                inline-flex items-center gap-2 rounded-lg
                border border-border-light dark:border-border-dark
                bg-background-light dark:bg-background-dark
                px-6 py-3 text-sm font-medium
                transition-all
                hover:-translate-y-0.5 hover:bg-muted-light/40 dark:hover:bg-muted-dark/20
                hover:shadow-sm
                focus:outline-none focus:ring-2 focus:ring-primary/30
              "
            >
              <Mail className="h-4 w-4" />
              <span>Email Me</span>
            </a>

            {/* CV */}
            <a
              href={ResumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2 rounded-lg
                border border-border-light dark:border-border-dark
                bg-background-light dark:bg-background-dark
                px-6 py-3 text-sm font-medium
                transition-all
                hover:-translate-y-0.5 hover:bg-muted-light/40 dark:hover:bg-muted-dark/20
                hover:shadow-sm
                focus:outline-none focus:ring-2 focus:ring-primary/30
              "
            >
              <FileText className="h-5 w-5" />
              <span>Download CV</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/kkedarr"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2 rounded-lg
                border border-border-light dark:border-border-dark
                bg-background-light dark:bg-background-dark
                px-6 py-3 text-sm font-medium
                transition-all
                hover:-translate-y-0.5 hover:bg-muted-light/40 dark:hover:bg-muted-dark/20
                hover:shadow-sm
                focus:outline-none focus:ring-2 focus:ring-primary/30
              "
            >
              <SquareArrowOutUpRight className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ContactCTA;
