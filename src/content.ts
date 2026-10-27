export type JourneyItem = {
  title: string;
  text: string;
  date?: string;
};

export type SkillGroup = {
  name: string;
  items: string[];
};

export type Experience = {
  role: string;
  organization: string;
  dates?: string;
  location?: string;
  workArrangement?: string;
  status?: string;
  logo?: { src: string; alt: string };
  productUrl?: string;
  summary: string;
  responsibilities: { icon: "code" | "ai" | "reliability"; title: string; description: string }[];
  technologies: string[];
  contributions: string[];
  achievements?: string[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  technologies: string[];
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    architecture: string[];
    execution: string[];
    decisions: string[];
    challenges: string[];
    evaluation: string;
    results: string;
    learnings: string;
  };
  links?: {
    github?: string;
    demo?: string;
  };
};

export type SocialLink = {
  label: "GitHub" | "LinkedIn";
  href: string;
};

export const profile = {
  name: "Jithendra",
  role: "Software Engineer · AI Engineering",
  portrait: "assets/images/jithendra-portrait.webp",
  portraitAlt: "Jithendra wearing a dark suit and white shirt",
  introduction: [
    "I'm a software engineer specializing in AI, with a background in data science and a strong interest in building intelligent applications, reliable backend systems, and practical solutions to complex problems.",
    "Currently working on AI-powered applications at CoderView Technologies, I'm exploring how intelligent systems can become more reliable, efficient, and useful in the real world. This is my corner of the internet, where I share the projects I build, the problems I solve, and what I learn along the way.",
  ],
  about: "My path runs from studying computer science and data science to building software projects and contributing to AI-powered applications. I'm interested in systems that work reliably and solve useful, real-world problems.",
  rotatingWords: ["matter.", "learn.", "adapt.", "last."],
  email: "muttumjithendra@gmail.com",
  phone: { label: "+91 7013826088", href: "tel:+917013826088" },
  resumeUrl: "",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/Jithendra-coder" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jithendra-coder" },
  ] as SocialLink[],
};

export const journey: JourneyItem[] = [
  {
    title: "Curiosity About Building Things",
    text: "My interest in technology began with a simple goal: to create useful applications and build a career around solving real problems through software.",
  },
  {
    title: "Computer Science Meets Data Science",
    text: "I completed a B.Tech in Computer Science and Engineering (Data Science) at Anurag University, graduating in April 2026 with an 8.39 CGPA. My studies grew my interest in machine learning, deep learning, and intelligent systems.",
    date: "April 2026",
  },
  {
    title: "From Concepts to Applications",
    text: "During my final year, I began developing a multi-tenant ordering platform for local businesses. The in-development concept includes digital storefronts and ordering through kiosks, QR codes, and shareable links.",
  },
  {
    title: "My First Industry Experience",
    text: "I joined CoderView Technologies as an AI Intern, contributing to backend development, APIs, and the AI layer of an existing business application.",
    date: "January 2026 – Present",
  },
  {
    title: "Building More Reliable AI Systems",
    text: "I'm developing my understanding of AI agents, intelligent workflows, deployment, monitoring, evaluation, and the engineering practices behind dependable AI applications.",
  },
];

export const projects: Project[] = [
  {
    slug: "multi-tenant-ordering-platform",
    title: "Multi-Tenant Kiosk & Online Ordering Platform",
    summary: "In development — a shared platform concept for local businesses to create digital storefronts and receive orders through kiosks, QR codes, and shareable links.",
    technologies: [],
    caseStudy: {
      overview: "This in-development concept is a shared ordering platform for local businesses. Each business would have its own digital storefront and accept customer orders through kiosks, QR codes, or shareable links. Technical implementation details are still being documented.",
      problem: "Small businesses may need an accessible way to manage online ordering without building and maintaining a separate website or ordering application.",
      solution: "The proposed platform would let businesses create and manage their own storefronts while customers access ordering through multiple channels.",
      architecture: [],
      execution: [],
      decisions: [],
      challenges: [],
      evaluation: "",
      results: "",
      learnings: "",
    },
  },
];

export const skillGroups: SkillGroup[] = [
  { name: "Programming", items: ["Python", "SQL", "OOP", "Data Structures & Algorithms"] },
  { name: "AI & Generative AI", items: ["LLMs", "RAG", "LangChain", "LangGraph", "AI Agents", "Tool Calling", "Embeddings", "Vector Search", "Hugging Face Transformers"] },
  { name: "Machine Learning", items: ["PyTorch", "Scikit-learn", "Pandas", "NumPy", "Model Evaluation", "Feature Engineering"] },
  { name: "Backend Engineering", items: ["FastAPI", "REST APIs", "Pydantic", "Async Python", "Authentication", "Authorization", "API Integration"] },
  { name: "Databases", items: ["PostgreSQL", "Redis", "Vector Databases", "SQL Optimization"] },
  { name: "Cloud & Development", items: ["AWS", "Docker", "Git", "GitHub", "GitHub Actions", "Linux"] },
  { name: "AI Engineering & Quality", items: ["Pytest", "API Testing", "RAG Evaluation", "LLM Evaluation", "Structured Outputs", "Observability", "Performance and Cost Optimization"] },
];

export const experience: Experience[] = [
  {
    role: "AI Intern",
    organization: "CoderView Technologies",
    dates: "January 2026 – Present",
    location: "Hyderabad, India",
    workArrangement: "Remote",
    status: "Ongoing",
    logo: { src: "assets/images/coderview-technologies.jpeg", alt: "CoderView Technologies logo" },
    productUrl: "https://crewzy.io/",
    summary: "Contributing to backend development and AI capabilities for Crewzy, a live business application, with a focus on reliable APIs and practical AI integration.",
    responsibilities: [
      { icon: "code", title: "Backend Development", description: "Contributing to backend APIs and application functionality, with an emphasis on reliability and maintainability." },
      { icon: "ai", title: "AI Integration", description: "Working on an AI layer for Crewzy within an existing business application ecosystem." },
      { icon: "reliability", title: "Engineering & Reliability", description: "Exploring approaches to improve AI system reliability, efficiency, deployment, and monitoring." },
    ],
    technologies: [],
    contributions: [],
  },
];
