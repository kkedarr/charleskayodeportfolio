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
} from "react-icons/si";

import {
  Database,
  Globe,
  ShieldCheck,
  Cpu,
} from "lucide-react";

const skills = [
  {
    title: "Frontend Engineering",
    items: [
      { label: "React", icon: SiReact },
      { label: "Next.js", icon: SiNextdotjs },
      { label: "Tailwind CSS", icon: SiTailwindcss },
      { label: "JavaScript", icon: SiJavascript },
      { label: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    title: "Backend & Architecture",
    items: [
      { label: "REST APIs", icon: Globe },
      { label: "SQL Databases", icon: Database },
      { label: "Performance Optimization", icon: Cpu },
      { label: "Security & Access Control", icon: ShieldCheck },
    ],
  },
  {
    title: "Tools & Workflow",
    items: [
      { label: "Git", icon: SiGit },
      { label: "GitHub", icon: SiGithub },
      { label: "Figma", icon: SiFigma },
      { label: "Python Automation", icon: SiPython },
    ],
  },
];

export default skills;
