export interface Experience {
  company: string;
  role: string;
  type: "Full-time" | "Part-time" | "Founder";
  period: string;
  location: string;
  description: string[];
  isCurrent: boolean;
}

export interface Project {
  title: string;
  tagline: string;
  description: string;
  type: "Private" | "Public";
  category: "SaaS" | "Enterprise" | "Web" | "Open Source";
  stack: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Skills {
  backend: string[];
  frontend: string[];
  mobile: string[];
  tools: string[];
}
