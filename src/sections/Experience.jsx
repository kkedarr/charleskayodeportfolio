import Section from "../components/layout/Section";
import Container from "../components/layout/Container";

function Experience() {
  return (
    <Section>
      <Container>
        <h2 className="section-title text-center">
          Professional Experience
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-center text-sm sm:text-base text-muted-light dark:text-muted-dark">
          Hands-on experience delivering production-ready frontend applications
          across startups, freelance projects, and distributed engineering teams,
          with strong focus on performance, scalability, and user experience.
        </p>

        <div className="relative mt-10 sm:mt-14 space-y-10 sm:space-y-12">

          {/* Vertical Line */}
          <div
            className="
              absolute left-3 top-0 bottom-0 w-px
              bg-border-light dark:bg-border-dark
              md:left-1/2 md:-translate-x-1/2
            "
          />

          <TimelineItem
            align="left"
            role="Frontend Developer — Freelance"
            period="2025 — Present"
            company="GFI Website & Private Clients"
            stack="React, TailwindCSS, SEO, Performance Optimization"
            description="
              Designed and shipped high-performance landing pages and business websites
              with clean component architecture, mobile-first responsiveness, and
              optimized asset delivery. Collaborated directly with stakeholders to
              translate business requirements into polished user interfaces.
            "
            impact="
              Improved load times, SEO visibility, and conversion flow while maintaining
              scalable and maintainable frontend codebases.
            "
          />

          <TimelineItem
            align="right"
            role="Frontend Developer — E-Commerce Platform"
            period="2025"
            company="Kedar Watches"
            stack="React, REST APIs, Payment Integration, Admin Dashboards"
            description="
              Built a production-ready e-commerce application featuring product catalog,
              cart logic, secure checkout, authentication flows, and admin management
              interfaces. Implemented reusable UI components and optimized rendering
              performance using lazy loading and code splitting.
            "
            impact="
              Delivered a scalable storefront with smooth UX flows, improved runtime
              performance, and operational tooling for inventory and order management.
            "
          />

          <TimelineItem
            align="left"
            role="Frontend Developer — Remote"
            period="Apr 2025 — Aug 2025"
            company="JK Giants Innovations"
            stack="React, TypeScript, Paystack, REST APIs, Agile"
            description="
              Worked within an Agile remote team building responsive web applications
              and integrating authentication, wallet funding, and payment workflows.
              Refactored legacy components, improved state management, and enhanced
              UI feedback states across multiple modules.
            "
            impact="
              Increased application reliability, reduced UI bugs, and improved perceived
              performance through code optimization and better loading strategies.
            "
          />

          <TimelineItem
            align="right"
            role="Frontend Developer Intern"
            period="May 2024 — Aug 2024"
            company="FlexiSAF Edusoft Limited"
            stack="React, Accessibility (WCAG), Performance Optimization"
            description="
              Contributed to enterprise-grade applications focusing on accessibility,
              component optimization, and collaborative code reviews. Built reusable UI
              components and partnered with backend engineers on API integrations.
            "
            impact="
              Improved accessibility compliance, reduced bundle size, and strengthened
              overall code quality across shared repositories.
            "
          />
        </div>
      </Container>
    </Section>
  );
}

/* ---------------------------------------------
   Timeline Item Component
---------------------------------------------- */
function TimelineItem({
  align,
  role,
  period,
  company,
  stack,
  description,
  impact,
}) {
  const isLeft = align === "left";

  return (
    <div className="relative grid gap-4 md:gap-6 md:grid-cols-2 pl-8 md:pl-0">

      {/* Dot */}
      <div
        className="
          absolute left-2 top-6 h-3 w-3 rounded-full bg-primary
          md:left-1/2 md:-translate-x-1/2
        "
      />

      {/* Connector (mobile only) */}
      <div className="absolute left-[11px] top-9 h-full w-px bg-border-light dark:bg-border-dark md:hidden" />

      {/* Content */}
      <div
        className={`
          text-left
          rounded-xl border border-border-light bg-background-light
          p-4 sm:p-5 md:p-6 shadow-sm
          transition hover:-translate-y-1 hover:shadow-md
          dark:border-border-dark dark:bg-background-dark
          ${isLeft ? "md:col-start-1" : "md:col-start-2"}
        `}
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-sm sm:text-base font-semibold leading-snug">
            {role}
          </h3>

          <span className="text-[11px] sm:text-xs text-muted-light dark:text-muted-dark">
            {period}
          </span>
        </div>

        <p className="mt-1 text-xs sm:text-sm font-medium text-primary">
          {company}
        </p>

        <p className="mt-1.5 text-[11px] sm:text-xs text-muted-light dark:text-muted-dark">
          Stack: {stack}
        </p>

        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-light dark:text-muted-dark">
          {description}
        </p>

        <p className="mt-3 text-xs sm:text-sm font-medium">
          Impact:{" "}
          <span className="font-normal text-muted-light dark:text-muted-dark">
            {impact}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Experience;