import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Activity,
  Bot,
  Boxes,
  BrainCircuit,
  Braces,
  BriefcaseBusiness,
  CalendarDays,
  ChartNoAxesCombined,
  Cloud,
  Code2,
  Database,
  DatabaseSearch,
  DatabaseZap,
  Download,
  FolderKanban,
  Gauge,
  GitBranch,
  House,
  LockKeyhole,
  Mail,
  MapPin,
  Network,
  Phone,
  ScanSearch,
  ShieldCheck,
  SlidersHorizontal,
  TestTubeDiagonal,
  UserRound,
  Webhook,
  Workflow,
  Wrench,
} from "lucide-react";
import {
  SiDocker,
  SiFastapi,
  SiFlask,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGooglechrome,
  SiHuggingface,
  SiJavascript,
  SiKeras,
  SiLangchain,
  SiLanggraph,
  SiLinux,
  SiNextdotjs,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPrometheus,
  SiPydantic,
  SiPytest,
  SiPython,
  SiPytorch,
  SiReact,
  SiRedis,
  SiScikitlearn,
  SiSqlite,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import { experience, journey, profile, projects, skillGroups, type Project } from "./content";

const sections = [
  { id: "home", label: "Home", icon: House },
  { id: "about", label: "About & Journey", icon: UserRound },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "skills", label: "Technical Skills", icon: Code2 },
  { id: "experience", label: "Experience", icon: BriefcaseBusiness },
  { id: "contact", label: "Contact", icon: Mail },
];

function currentProjectSlug(hash: string) {
  const prefix = "#/projects/";
  if (!hash.startsWith(prefix)) return "";
  try {
    return decodeURIComponent(hash.slice(prefix.length));
  } catch {
    return "";
  }
}

function SocialMark({ label, size = 19 }: { label: "GitHub" | "LinkedIn"; size?: number }) {
  return label === "GitHub" ? (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.41-4.04-1.41-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.48 11.48 0 0 1 6.01 0c2.29-.91 3.29-1.23 3.29-1.23.66 1.64.25 2.86.12 3.16.77.84 1.23 1.91 1.23 3.23 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.13 1.44-2.13 2.94v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.23 0Z" />
    </svg>
  );
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reduced;
}

function useRotatingWord(words: string[], reducedMotion: boolean) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState(words[0] || "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      setWordIndex(0);
      setDeleting(false);
      setDisplayed(words[0] || "");
      return;
    }

    const word = words[wordIndex] || "";
    let delay = deleting ? 55 : 90;

    if (!deleting && displayed === word) {
      delay = 2000;
    } else if (deleting && displayed === "") {
      delay = 250;
    }

    const timer = window.setTimeout(() => {
      if (!deleting && displayed === word) {
        setDeleting(true);
      } else if (deleting && displayed === "") {
        setWordIndex((index) => (index + 1) % Math.max(words.length, 1));
        setDeleting(false);
      } else {
        setDisplayed(word.slice(0, displayed.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, displayed, reducedMotion, wordIndex, words]);

  return reducedMotion ? words[0] || "" : displayed;
}

function SectionNavigation({ active }: { active: string }) {
  const links = sections.map(({ id, label, icon: Icon }) => (
    <a
      className={"nav-link" + (active === id ? " is-active" : "")}
      href={"#" + id}
      aria-label={label}
      aria-current={active === id ? "page" : undefined}
      title={label}
      data-label={label}
      key={id}
    >
      <Icon size={21} strokeWidth={1.75} aria-hidden="true" />
    </a>
  ));

  return (
    <>
      <nav className="desktop-rail" aria-label="Section navigation">{links}</nav>
      <nav className="mobile-nav" aria-label="Section navigation">{links}</nav>
    </>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="section-heading">
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </header>
  );
}

function EmptyState({ children }: { children: ReactNode }) {
  return <div className="empty-state">{children}</div>;
}

const skillIcons: Record<string, ReactNode> = {
  "Next.js": <SiNextdotjs color="default" />,
  React: <SiReact color="default" />,
  TypeScript: <SiTypescript color="default" />,
  "Tailwind CSS": <SiTailwindcss color="default" />,
  Playwright: <TestTubeDiagonal />,
  OpenAPI: <Webhook />,
  "Chrome Extensions": <SiGooglechrome color="default" />,
  JavaScript: <SiJavascript color="default" />,
  Flask: <SiFlask color="default" />,
  TensorFlow: <SiTensorflow color="default" />,
  Keras: <SiKeras color="default" />,
  SQLite: <SiSqlite color="default" />,
  Prometheus: <SiPrometheus color="default" />,
  MCP: <Workflow />,
  NetworkX: <Network />,
  Python: <SiPython color="default" />,
  SQL: <Database />,
  OOP: <Boxes />,
  "Data Structures & Algorithms": <GitBranch />,
  LLMs: <BrainCircuit />,
  RAG: <DatabaseSearch />,
  LangChain: <SiLangchain color="default" />,
  LangGraph: <SiLanggraph color="default" />,
  "AI Agents": <Bot />,
  "Tool Calling": <Wrench />,
  Embeddings: <Network />,
  "Vector Search": <ScanSearch />,
  "Hugging Face Transformers": <SiHuggingface color="default" />,
  PyTorch: <SiPytorch color="default" />,
  "Scikit-learn": <SiScikitlearn color="default" />,
  Pandas: <SiPandas color="default" />,
  NumPy: <SiNumpy color="default" />,
  "Model Evaluation": <ChartNoAxesCombined />,
  "Feature Engineering": <SlidersHorizontal />,
  FastAPI: <SiFastapi color="default" />,
  "REST APIs": <Webhook />,
  Pydantic: <SiPydantic color="default" />,
  "Async Python": <SiPython color="default" />,
  Authentication: <LockKeyhole />,
  Authorization: <ShieldCheck />,
  "API Integration": <Workflow />,
  PostgreSQL: <SiPostgresql color="default" />,
  Redis: <SiRedis color="default" />,
  "Vector Databases": <DatabaseZap />,
  "SQL Optimization": <Gauge />,
  AWS: <Cloud />,
  Docker: <SiDocker color="default" />,
  Git: <SiGit color="default" />,
  GitHub: <SiGithub color="default" />,
  "GitHub Actions": <SiGithubactions color="default" />,
  Linux: <SiLinux color="default" />,
  Pytest: <SiPytest color="default" />,
  "API Testing": <TestTubeDiagonal />,
  "RAG Evaluation": <DatabaseSearch />,
  "LLM Evaluation": <ChartNoAxesCombined />,
  "Structured Outputs": <Braces />,
  Observability: <Activity />,
  "Performance and Cost Optimization": <Gauge />,
};

function TechnologyMark({ name }: { name: string }) {
  return <span className="technology-mark" aria-hidden="true">{skillIcons[name] ?? <Code2 />}</span>;
}

function HomeSection({ reducedMotion }: { reducedMotion: boolean }) {
  const word = useRotatingWord(profile.rotatingWords, reducedMotion);
  const resumeUrl = profile.resumeUrl.trim();

  return (
    <section id="home" className="home-section page-section" data-nav-section>
      <div className="hero-layout">
        <img
          className="portrait"
          src={import.meta.env.BASE_URL + profile.portrait}
          alt={profile.portraitAlt}
          width="588"
          height="735"
          fetchPriority="high"
        />
        <div className="hero-copy">
          <p className="eyebrow">{profile.role}</p>
          <h1>
            <span className="sr-only">Hi, I&apos;m {profile.name}. I build things that matter.</span>
            <span aria-hidden="true">
              Hi, I&apos;m {profile.name}.<br />
              I build things that <span className="typing-word">{word}</span>
            </span>
          </h1>
          <div className="intro-copy">
            {profile.introduction.map((paragraph, index) => (
              <p key={paragraph}>
                {paragraph}
                {index === profile.introduction.length - 1 ? (
                  <> <a className="text-link home-about-link" href="#about"><span>Learn more about me</span></a></>
                ) : null}
              </p>
            ))}
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore My Work <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#contact">
              Let&apos;s Talk <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            {profile.socialLinks.map(({ label, href }) => (
              <a className="button button-secondary social-icon-button" href={href} key={label} target="_blank" rel="noreferrer" aria-label={label} title={label}>
                <SocialMark label={label} size={19} />
              </a>
            ))}
            {resumeUrl ? (
              <a className="button button-secondary" href={import.meta.env.BASE_URL + resumeUrl} download>
                <Download size={16} aria-hidden="true" /> Resume
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="page-section content-section" data-nav-section>
      <SectionHeading title="A Little About Me." />
      {profile.about ? <div className="story-intro"><p>{profile.about}</p></div> : null}
      <div className="timeline">
        <h3>The Journey So Far.</h3>
        {journey.length ? (
          journey.map((item) => (
            <article className="timeline-item" key={item.title}>
              <div className="timeline-marker" aria-hidden="true" />
              <div>
                <div className="timeline-title">
                  <h4>{item.title}</h4>
                  {item.date ? <span>{item.date}</span> : null}
                </div>
                <p>{item.text}</p>
              </div>
            </article>
          ))
        ) : (
          <p className="empty-inline">Your introduction and timeline milestones will be added from the details you share.</p>
        )}
      </div>
    </section>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className="project-preview" aria-label={"Abstract project preview for " + project.title}>
      <span className="preview-caption">PROJECT OVERVIEW</span>
      <div className="preview-frame">
        <span className="preview-mark" aria-hidden="true">J.</span>
        <div>
          <p className="preview-kicker">Selected work</p>
          <p className="preview-title">{project.title}</p>
        </div>
        <div className="preview-lines" aria-hidden="true"><i /><i /><i /></div>
        <span className="preview-note">Abstract preview · not a product screenshot</span>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <ProjectPreview project={project} />
      <div className="project-card-body">
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        {project.technologies.length ? (
          <div className="tag-list" aria-label="Technologies">
            {project.technologies.map((technology) => <span className="tag" key={technology}><TechnologyMark name={technology} />{technology}</span>)}
          </div>
        ) : null}
        <div className="project-links">
          <a className="text-link" href={"#/projects/" + encodeURIComponent(project.slug)}>
            View Case Study <ArrowRight size={15} aria-hidden="true" />
          </a>
          {project.links?.github ? (
            <a className="text-link" href={project.links.github} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          ) : null}
          {project.links?.demo ? (
            <a className="text-link" href={project.links.demo} target="_blank" rel="noreferrer">
              Live Demo <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="page-section content-section" data-nav-section>
      <SectionHeading title="Selected Work." subtitle="A collection of projects where ideas become working systems." />
      {projects.length ? (
        <div className="project-grid">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      ) : (
        <EmptyState>
          <p>Project cards and detailed case studies are ready for the work you want to feature.</p>
        </EmptyState>
      )}
    </section>
  );
}

function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState("");
  const selectedProjects = projects.filter((project) =>
    project.technologies.some((technology) => technology.toLowerCase() === selectedSkill.toLowerCase()),
  );

  return (
    <section id="skills" className="page-section content-section" data-nav-section>
      <SectionHeading title="My Toolkit." />
      {skillGroups.length ? (
        <>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.name}>
                <h3>{group.name}</h3>
                <div className="tag-list">
                  {group.items.map((skill) => (
                    <button
                      className={"tag skill-tag" + (selectedSkill === skill ? " is-selected" : "")}
                      type="button"
                      aria-pressed={selectedSkill === skill}
                      onClick={() => setSelectedSkill((current) => current === skill ? "" : skill)}
                      key={skill}
                    >
                      <TechnologyMark name={skill} />{skill}
                    </button>
                  ))}
                </div>
              </article>
            ))}
          </div>
          {selectedSkill ? (
            <p className="related-projects" role="status">
              {selectedProjects.length
                ? selectedSkill + " appears in: " + selectedProjects.map((project) => project.title).join(", ")
                : "No related project has been added for " + selectedSkill + " yet."}
            </p>
          ) : null}
        </>
      ) : (
        <EmptyState>
          <p>Skills will be grouped by area and connected to the projects that demonstrate them.</p>
        </EmptyState>
      )}
    </section>
  );
}

function ExperienceSection() {
  const responsibilityIcons = { code: Code2, ai: BrainCircuit, reliability: Activity };

  return (
    <section id="experience" className="page-section content-section" data-nav-section>
      <SectionHeading title="Where I&apos;ve Worked." />
      {experience.length ? (
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item" key={item.organization + item.role}>
              <div className="experience-header">
                <div className="experience-title">
                  <h3>{item.role}</h3>
                  <p>{item.organization}</p>
                </div>
                {item.logo ? (
                  <img
                    className="experience-logo"
                    src={`${import.meta.env.BASE_URL}${item.logo.src}`}
                    alt={item.logo.alt}
                    loading="lazy"
                    decoding="async"
                  />
                ) : null}
                <div className="experience-meta">
                  {item.dates ? <span><CalendarDays size={16} aria-hidden="true" />{item.dates}</span> : null}
                  {item.location ? <span><MapPin size={16} aria-hidden="true" />{item.location}</span> : null}
                  {item.workArrangement ? <span>{item.workArrangement}</span> : null}
                  {item.status ? <span className="experience-status">{item.status}</span> : null}
                </div>
              </div>
              <p className="experience-summary">
                {item.summary}{" "}
                {item.productUrl ? <a className="experience-product-link" href={item.productUrl} target="_blank" rel="noreferrer">Crewzy.io <ArrowUpRight size={14} aria-hidden="true" /></a> : null}
              </p>
              <div className="experience-contributions">
                {item.responsibilities.map(({ icon, title, description }) => {
                  const Icon = responsibilityIcons[icon];
                  return (
                    <div className="experience-contribution" key={title}>
                      <span className="experience-contribution-icon"><Icon size={18} aria-hidden="true" /></span>
                      <h4>{title}</h4>
                      <p>{description}</p>
                    </div>
                  );
                })}
              </div>
              {item.contributions.length ? <p>{item.contributions.join(" ")}</p> : null}
              {item.achievements?.length ? <ul>{item.achievements.map((line) => <li key={line}>{line}</li>)}</ul> : null}
              {item.technologies.length ? <div className="tag-list">{item.technologies.map((technology) => <span className="tag" key={technology}><TechnologyMark name={technology} />{technology}</span>)}</div> : null}
              <aside className="experience-appreciation">
                <h4>A Note of Gratitude</h4>
                <p>I&apos;m grateful to CoderView Technologies for believing in my potential and giving me the opportunity to contribute to meaningful work.</p>
                <p>The experience has helped me grow as an engineer, apply what I&apos;ve learned, and better understand how real-world software and AI systems are built.</p>
                <p className="experience-signoff">— Jithendra</p>
              </aside>
            </article>
          ))}
        </div>
      ) : (
        <EmptyState>
          <p>Your role, organization, dates, and contributions will be added from the information you provide.</p>
        </EmptyState>
      )}
    </section>
  );
}

function ContactSection() {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim() || "";
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const inFlight = useRef(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!accessKey || inFlight.current) return;

    inFlight.current = true;
    setBusy(true);
    setResult(null);
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const payload = await response.json() as { success?: boolean };
      if (!response.ok || !payload.success) throw new Error("Submission failed");
      form.reset();
      setResult({ type: "success", message: "Thanks for reaching out. Your message has been sent." });
    } catch {
      setResult({ type: "error", message: "Your message could not be sent. Please try again in a moment." });
    } finally {
      inFlight.current = false;
      setBusy(false);
    }
  }

  return (
    <section id="contact" className="page-section content-section contact-section" data-nav-section>
      <SectionHeading
        title="Have something in mind? Let&apos;s talk."
        subtitle="Whether it&apos;s an opportunity, an interesting project, or a collaboration, I&apos;d be happy to hear from you."
      />
      <form className="contact-form" onSubmit={submit} aria-label="Contact form">
        <div className="form-row">
          <label>
            <span>Name <span className="required-mark" aria-hidden="true">*</span></span>
            <input name="name" autoComplete="name" required maxLength={120} />
          </label>
          <label>
            <span>Email <span className="required-mark" aria-hidden="true">*</span></span>
            <input name="email" type="email" autoComplete="email" required maxLength={254} />
          </label>
        </div>
        <label>
          <span>I&apos;m reaching out about <span className="required-mark" aria-hidden="true">*</span></span>
          <select name="subject" required defaultValue="">
            <option value="" disabled>Select a subject</option>
            <option>Job Opportunity</option>
            <option>Collaboration</option>
            <option>Project Discussion</option>
            <option>Freelance</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          <span>Message <span className="required-mark" aria-hidden="true">*</span></span>
          <textarea name="message" rows={6} required minLength={10} maxLength={5000} />
        </label>
        <div className="honeypot" aria-hidden="true">
          <input type="checkbox" name="botcheck" tabIndex={-1} />
        </div>
        <div className="form-footer">
          {profile.socialLinks.length || profile.email || profile.phone ? (
            <div className="contact-socials">
              {profile.socialLinks.map(({ label, href }) => (
                <a className="button button-secondary social-icon-button" href={href} key={label} target="_blank" rel="noreferrer" aria-label={label}>
                  <SocialMark label={label} size={18} />
                </a>
              ))}
              {profile.email ? (
                <a className="contact-method" href={"mailto:" + profile.email} aria-label={"Email " + profile.email}>
                  <Mail size={18} aria-hidden="true" /><span className="contact-method-tooltip" aria-hidden="true">{profile.email}</span>
                </a>
              ) : null}
              {profile.phone ? (
                <a className="contact-method" href={profile.phone.href} aria-label={"Call " + profile.phone.label}>
                  <Phone size={18} aria-hidden="true" /><span className="contact-method-tooltip" aria-hidden="true">{profile.phone.label}</span>
                </a>
              ) : null}
            </div>
          ) : null}
          <button className="button button-primary" type="submit" disabled={busy || !accessKey}>
            {busy ? "Sending…" : <>Send Message <ArrowRight size={16} aria-hidden="true" /></>}
          </button>
        </div>
        {result ? <p className={"form-result " + result.type} role={result.type === "error" ? "alert" : "status"}>{result.message}</p> : null}
      </form>
    </section>
  );
}

function CaseStudySection({ project }: { project: Project }) {
  const study = project.caseStudy;

  useEffect(() => {
    const description = document.querySelector('meta[name="description"]');
    const defaultDescription = description?.getAttribute("content") || "";
    document.title = project.title + " | " + profile.name;
    description?.setAttribute("content", project.summary);
    return () => {
      document.title = profile.name + " | " + profile.role;
      description?.setAttribute("content", defaultDescription);
    };
  }, [project.title, project.summary]);

  return (
    <section className="page-section case-study-section">
      <a className="back-link" href="#projects"><ArrowLeft size={16} aria-hidden="true" /> All projects</a>
      <p className="eyebrow">Project case study</p>
      <h1 className="case-study-title">{project.title}</h1>
      <p className="case-study-summary">{project.summary}</p>
      {project.technologies.length ? (
        <div className="tag-list case-study-tags">{project.technologies.map((technology) => <span className="tag" key={technology}><TechnologyMark name={technology} />{technology}</span>)}</div>
      ) : null}
      <div className="case-study-grid">
        <article><h2>Overview</h2><p>{study.overview}</p></article>
        <article><h2>Problem</h2><p>{study.problem}</p></article>
        <article><h2>Solution</h2><p>{study.solution}</p></article>
        {study.architecture.length ? (
          <article className="diagram-article">
            <h2>System Architecture</h2>
            <ol className="diagram-flow">{study.architecture.map((step, index) => <li key={step}><span>{step}</span>{index < study.architecture.length - 1 ? <ArrowRight size={16} aria-hidden="true" /> : null}</li>)}</ol>
          </article>
        ) : null}
        {study.execution.length ? (
          <article className="diagram-article">
            <h2>Execution Flow</h2>
            <ol className="diagram-flow">{study.execution.map((step, index) => <li key={step}><span>{step}</span>{index < study.execution.length - 1 ? <ArrowRight size={16} aria-hidden="true" /> : null}</li>)}</ol>
          </article>
        ) : null}
        {project.technologies.length ? (
          <article>
            <h2>Technology Stack</h2>
            <div className="tag-list">{project.technologies.map((technology) => <span className="tag" key={technology}><TechnologyMark name={technology} />{technology}</span>)}</div>
          </article>
        ) : null}
        {study.decisions.length ? <article><h2>Engineering Decisions</h2><ul>{study.decisions.map((line) => <li key={line}>{line}</li>)}</ul></article> : null}
        {study.challenges.length ? <article><h2>Challenges</h2><ul>{study.challenges.map((line) => <li key={line}>{line}</li>)}</ul></article> : null}
        {study.evaluation ? <article><h2>Testing &amp; Evaluation</h2><p>{study.evaluation}</p></article> : null}
        {study.results ? <article><h2>Results</h2><p>{study.results}</p></article> : null}
        {study.learnings ? <article><h2>What I Learned</h2><p>{study.learnings}</p></article> : null}
        {project.links?.github || project.links?.demo ? (
          <article className="case-study-links">
            <h2>Code &amp; Demonstration</h2>
            {project.links.github ? <a className="text-link" href={project.links.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} aria-hidden="true" /></a> : null}
            {project.links.demo ? <a className="text-link" href={project.links.demo} target="_blank" rel="noreferrer">Live Demo <ArrowUpRight size={15} aria-hidden="true" /></a> : null}
          </article>
        ) : null}
      </div>
    </section>
  );
}

function MissingProject() {
  useEffect(() => {
    document.title = "Project details | " + profile.name;
    return () => { document.title = profile.name + " | " + profile.role; };
  }, []);
  return (
    <section className="page-section missing-project">
      <p className="eyebrow">Project case study</p>
      <h1>This project isn&apos;t available yet.</h1>
      <p>Project pages will appear here after their verified details are added.</p>
      <a className="button button-secondary" href="#projects"><ArrowLeft size={16} aria-hidden="true" /> Back to projects</a>
    </section>
  );
}

export default function App() {
  const reducedMotion = useReducedMotion();
  const [hash, setHash] = useState(window.location.hash);
  const slug = currentProjectSlug(hash);
  const requestedSection = hash.slice(1);
  const activeSection = slug ? "projects" : sections.some(({ id }) => id === requestedSection) ? requestedSection : "home";
  const selectedProject = projects.find((project) => project.slug === slug);

  useEffect(() => {
    const update = () => setHash(window.location.hash);
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [activeSection, slug]);

  return (
    <>
      <SectionNavigation active={slug ? "projects" : activeSection} />
      <main className="site-main">
        <div className="page-content">
          {slug ? (
            selectedProject ? <CaseStudySection project={selectedProject} /> : <MissingProject />
          ) : (
            activeSection === "home" ? <HomeSection reducedMotion={reducedMotion} /> :
            activeSection === "about" ? <AboutSection /> :
            activeSection === "projects" ? <ProjectsSection /> :
            activeSection === "skills" ? <SkillsSection /> :
            activeSection === "experience" ? <ExperienceSection /> :
            <ContactSection />
          )}
          <footer className="site-footer">
            <span>© {new Date().getFullYear()} {profile.name}</span>
            <a href="#home">Back to top <ArrowUpRight size={14} aria-hidden="true" /></a>
          </footer>
        </div>
      </main>
    </>
  );
}
