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
    slug: "place-your-order",
    title: "Place Your Order",
    summary: "A restaurant ordering and operations platform spanning self-service kiosks, counter POS, kitchen displays, device pairing, and merchant administration.",
    technologies: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Playwright"],
    caseStudy: {
      overview: "Place Your Order brings customer ordering and restaurant operations into one application: kiosk flows, counter sales, kitchen queues, device pairing, and merchant tools.",
      problem: "Restaurants need checkout, menu availability, staff handoff, and order status to stay aligned across different screens and roles.",
      solution: "A Next.js application works with FastAPI services and PostgreSQL data to support ordering, payment integrations, kitchen workflows, and merchant configuration.",
      architecture: ["Next.js kiosk, POS, kitchen, and merchant interfaces", "FastAPI services, schemas, and role checks", "PostgreSQL persistence and migrations", "Payment, email, storage, and media integrations"],
      execution: ["Choose a store and order mode", "Build an order from configured menu options", "Route the order to counter or kitchen workflows", "Track fulfillment and payment status"],
      decisions: ["Keep role-specific screens while sharing core order services.", "Keep payment-provider secrets on the backend and verify signed callbacks.", "Validate uploaded image content and dimensions before storage."],
      challenges: ["Coordinate order status and availability across kiosk, POS, and kitchen views.", "Support multiple payment providers without exposing provider credentials."],
      evaluation: "The repository includes backend pytest coverage, Playwright end-to-end tests, and frontend type-check and lint workflows.",
      results: "",
      learnings: "The implementation connects customer ordering to the staff workflows that complete each order.",
    },
    links: { github: "https://github.com/Jithendra-coder/PlaceURorder" },
  },
  {
    slug: "opentrace",
    title: "OpenTrace",
    summary: "Finds code affected by supported OpenAPI changes, then drafts bounded migration patches for validation and human review.",
    technologies: ["Python", "FastAPI", "OpenAPI", "Docker", "GitHub Actions"],
    caseStudy: {
      overview: "OpenTrace compares API contracts and analyzes downstream Python, TypeScript, and JavaScript code to surface likely breakage and migration paths.",
      problem: "API contract changes can break client code in ways that are difficult to trace across a repository before release.",
      solution: "The tool compares supported OpenAPI changes, maps affected code, proposes focused edits, and prepares validation evidence for human review.",
      architecture: ["Compare baseline and candidate OpenAPI contracts", "Scan source code and build impact evidence", "Generate a bounded migration patch", "Validate the patch and prepare a draft pull request"],
      execution: ["Compare the baseline and candidate API contracts", "Review affected files and call paths", "Generate a focused migration patch", "Inspect validation evidence and the draft change"],
      decisions: ["Limit automated analysis to documented contract patterns.", "Keep generated changes reviewable and never auto-merge a pull request.", "Preserve validation results with the proposed patch."],
      challenges: ["Distinguish real downstream impacts from coincidental source matches.", "Make generated edits small enough to validate and review."],
      evaluation: "The repository includes Python unit and integration tests and a GitHub Actions workflow for its CI checks.",
      results: "",
      learnings: "API migration automation needs traceable impact evidence, explicit support boundaries, and a human approval step.",
    },
    links: { github: "https://github.com/Jithendra-coder/OpenTrace" },
  },
  {
    slug: "opspilot",
    title: "OpsPilot",
    summary: "Evidence-first incident investigation for SRE teams, with deterministic cause checks and approval-gated actions verified against a simulator.",
    technologies: ["Python", "FastAPI", "LangGraph", "SQLite", "Prometheus", "Docker"],
    caseStudy: {
      overview: "OpsPilot brings incident evidence into a checkpointed investigation that can be used through a browser console, CLI, or versioned API.",
      problem: "Incident response needs a clear evidence trail, careful handling of uncertainty, and safeguards around remediation proposals.",
      solution: "The system gathers bounded observations, checks deterministic cause signatures, records findings, and routes eligible simulator actions through separate operator and approver roles.",
      architecture: ["Alert, evidence, and Prometheus inputs", "FastAPI investigation service and LangGraph checkpoints", "SQLite incident records and audit trail", "Role-gated action proposal and simulator verification"],
      execution: ["Create or receive an incident", "Review scoped evidence and unavailable sources", "Run an investigation and inspect its report", "Approve and verify an eligible simulated action"],
      decisions: ["Keep diagnosis evidence-linked and abstain when evidence is insufficient or conflicting.", "Separate the operator who proposes an action from the approver who reviews it.", "Run remediation only against the isolated simulator."],
      challenges: ["Keep findings useful while making uncertainty visible.", "Make approval, execution, and verification distinct auditable steps."],
      evaluation: "The repository includes tests for evidence scope, authorization, approval, verification, checkpoint recovery, and backup/restore.",
      results: "",
      learnings: "Incident tools need an explicit safe-abstain path and clear boundaries between advice and action.",
    },
    links: { github: "https://github.com/Jithendra-coder/OpsPilot" },
  },
  {
    slug: "hate-speech-detector",
    title: "Hate Speech Detector",
    summary: "A Chrome extension and local Flask API use an LSTM classifier to screen page text on request; results are advisory, not moderation decisions.",
    technologies: ["Python", "Flask", "TensorFlow", "Keras", "JavaScript", "Chrome Extensions"],
    caseStudy: {
      overview: "The project pairs a Chrome extension with a local Flask API and an LSTM text classifier for user-triggered screening of page text.",
      problem: "People may want a quick signal when reading harmful language, while automated classifiers can miss context and produce false positives.",
      solution: "The extension sends text for local inference and presents the model output as an advisory signal. Scanning is manual by default, with automatic scanning available as an explicit setting.",
      architecture: ["Chrome extension reads page text on request", "Local Flask API validates and preprocesses input", "TensorFlow/Keras LSTM model returns a score", "Extension displays the advisory result and accepts feedback"],
      execution: ["Choose when to scan page content", "Send bounded text to the local API", "Review the classifier output", "Report a false positive when needed"],
      decisions: ["Keep automatic scanning off by default.", "Present predictions as a screening aid rather than a moderation decision.", "Limit text size and show an explicit model-unavailable state."],
      challenges: ["Separate offensive language from context-dependent hate speech.", "Avoid treating a single model score as reliable across languages or communities."],
      evaluation: "The repository includes backend API/configuration tests and extension settings tests; it does not report multilingual or subgroup fairness evaluation.",
      results: "",
      learnings: "Responsible text screening needs context-aware evaluation, language coverage, and human review before consequential use.",
    },
    links: { github: "https://github.com/Jithendra-coder/Hate-Detection-System" },
  },
];

export const skillGroups: SkillGroup[] = [
  { name: "Programming", items: ["Python", "SQL", "OOP", "Data Structures & Algorithms"] },
  { name: "AI & Generative AI", items: ["LLMs", "RAG", "Prompt Engineering", "Embeddings", "Vector Search", "Tool Calling", "AI Agents", "LangChain", "LangGraph"] },
  { name: "Machine Learning & Data Science", items: ["Pandas", "NumPy", "Scikit-learn", "PyTorch", "TensorFlow", "Keras", "Regression", "Classification", "Clustering", "Feature Engineering", "Model Evaluation", "Statistical Analysis"] },
  { name: "Backend Development", items: ["FastAPI", "REST APIs", "Pydantic", "Authentication", "Authorization", "Async Python", "API Integration", "Flask"] },
  { name: "Databases & Caching", items: ["PostgreSQL", "SQLite", "Redis", "pgvector", "Database Indexing & Search"] },
  { name: "Cloud & DevOps", items: ["Docker", "Git", "GitHub", "GitHub Actions", "CI/CD", "Linux"] },
  { name: "Testing & Engineering", items: ["Pytest", "Playwright", "Unit Testing", "API Testing", "Debugging", "Logging", "Performance Measurement"] },
  { name: "AI Engineering", items: ["RAG Evaluation", "LLM Evaluation", "Structured Outputs", "Prompt-Injection Testing", "LLM Observability", "Token, Latency & Cost Tracking"] },
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
