import Section from "../components/layout/Section";
import Container from "../components/layout/Container";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiGit,
  SiGithub,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiSupabase,
} from "react-icons/si";

import {
  Database,
  Globe,
  ShieldCheck,
  Cpu,
} from "lucide-react";

function Skills() {
  return (
    <Section>
      <Container>
        <h2 className="section-title text-center">
          Skills & Engineering Strengths
        </h2>

        <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 md:grid-cols-3 md:gap-8">

          {/* Frontend Engineering */}
          <SkillCard title="Frontend Engineering">
            <Skill icon={SiHtml5} label="HTML5" color="text-orange-500" />
            <Skill icon={SiJavascript} label="JavaScript" color="text-yellow-400" />
            <Skill icon={SiTypescript} label="TypeScript" color="text-blue-600" />
            <Skill icon={SiReact} label="React" color="text-sky-500" />
            <Skill icon={SiTailwindcss} label="Tailwind CSS" color="text-cyan-500" />
          </SkillCard>

          {/* Backend & Architecture */}
          <SkillCard title="Backend & Architecture">
            <Skill icon={SiSupabase} label="Supabase (Auth, DB, Storage)" color="text-emerald-600" />
            <Skill icon={Globe} label="REST APIs" color="text-emerald-500" />
            <Skill icon={Database} label="SQL Databases" color="text-indigo-500" />
            <Skill icon={Cpu} label="Performance Optimization" color="text-orange-500" />
            <Skill icon={ShieldCheck} label="Security & Access Control" color="text-rose-500" />
          </SkillCard>

          {/* Tools & Workflow */}
          <SkillCard title="Tools & Workflow">
            <Skill icon={SiGit} label="Git" color="text-orange-600" />
            <Skill icon={SiGithub} label="GitHub" color="text-neutral-900 dark:text-white" />
            <Skill icon={SiFigma} label="Figma" color="text-pink-500" />
            <Skill icon={SiPython} label="Python Automation" color="text-yellow-500" />
          </SkillCard>

        </div>
      </Container>
    </Section>
  );
}

/* ---------------------------------------------
   Card Wrapper
---------------------------------------------- */
function SkillCard({ title, children }) {
  return (
    <div
      className="
        rounded-xl border border-border-light bg-background-light
        p-4 sm:p-5 md:p-6 shadow-sm
        transition hover:-translate-y-1 hover:shadow-md
        dark:border-border-dark dark:bg-background-dark
      "
    >
      <h3 className="text-sm sm:text-base md:text-lg font-semibold">
        {title}
      </h3>

      <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-light dark:text-muted-dark">
        {children}
      </ul>
    </div>
  );
}

/* ---------------------------------------------
   Individual Skill Row
---------------------------------------------- */
function Skill({ icon: Icon, label, color }) {
  return (
    <li className="group flex items-center gap-3">
      {/* Icon Badge */}
      <span
        className="
          flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg
          bg-muted-light/40 dark:bg-muted-dark/30
          transition group-hover:scale-105
        "
      >
        <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${color}`} />
      </span>

      {/* Label */}
      <span className="text-xs sm:text-sm font-medium leading-tight">
        {label}
      </span>
    </li>
  );
}

export default Skills;
