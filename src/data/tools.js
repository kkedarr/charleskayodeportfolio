import {
  SiFigma,
  SiGithub,
  SiGit,
  SiVercel,
  SiNpm,
  SiSupabase
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

const tools = [
  {
    name: "Figma",
    icon: SiFigma,
    color: "#A259FF",
    description: "UI design, prototyping, design systems, and developer handoff",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
    description: "Version control, branching strategies, and collaboration workflows",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#181717",
    description: "Code hosting, pull requests, CI pipelines, and team collaboration",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "#000000",
    description: "Production deployments, preview environments, and monitoring",
  },
  {
    name: "npm",
    icon: SiNpm,
    color: "#CB3837",
    description: "Dependency management, scripts, and project automation",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    color: "#3ECF8E",
    description: "Authentication, databases, storage, and real-time APIs",
  },
  {
    name: "VS Code",
    icon: VscCode,
    color: "#007ACC",
    description: "Primary IDE with extensions for debugging and productivity",
  },
];

export default tools;
