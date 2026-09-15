import { ArrowDownRight, ArrowUpRight, Braces, Code2, Database, Server, Sparkles } from "lucide-react";

const projects = [
  { number: "01", title: "Java Practice API", description: "A production-deployed Spring Boot API with JWT authentication, PostgreSQL migrations, Docker, and automated delivery through GitHub Actions.", stack: ["Java", "Spring Boot", "PostgreSQL", "Docker", "AWS"], href: "https://api.lucaskoga.com", label: "Live API" },
  { number: "02", title: "Adaptive Language Learning", description: "A full-stack vocabulary trainer that learns from each answer, prioritizes difficult words, and turns review history into smarter quizzes.", stack: ["React", "Java", "Spring Boot", "PostgreSQL"], href: "#contact", label: "In development" },
  { number: "03", title: "RPG Battle System", description: "A browser RPG with character classes, turn-based combat, skills, leveling, persistent player data, and a reactive battle interface.", stack: ["React", "Laravel", "PHP", "SQLite"], href: "#contact", label: "Case study soon" },
];

const skills = [
  { icon: Code2, title: "Frontend", text: "React, JavaScript, responsive interfaces" },
  { icon: Server, title: "Backend", text: "Java, Spring Boot, Laravel, REST APIs" },
  { icon: Database, title: "Data", text: "PostgreSQL, SQLite, JPA, Flyway" },
  { icon: Braces, title: "Delivery", text: "Docker, AWS, GitHub Actions, Linux" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Lucas Koga home">LK<span>.</span></a>
        <div className="navLinks"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></div>
        <a className="navGithub" href="https://github.com/lucasyk" target="_blank" rel="noreferrer"><Code2 size={18} /><span>GitHub</span></a>
      </nav>
      <section className="hero shell" id="top">
        <div className="eyebrow"><span /> Full-stack developer based in Japan</div>
        <h1>I build software<em> for fun!!!</em></h1>
        <div className="heroFooter">
          <p>I&apos;m Lucas Koga—a programmer turning ambitious ideas into useful, dependable products with Java, React, and whatever I get interested hahah.</p>
          <a className="roundLink" href="#work" aria-label="View selected work"><ArrowDownRight size={30} /></a>
        </div>
        <div className="heroCode" aria-hidden="true"><span>while</span> (curious) &#123; <b>build</b>(); <i>learn</i>(); &#125;</div>
      </section>
      <section className="section shell" id="work">
        <div className="sectionHeading"><p>Selected work</p><span>Built from the database to the browser</span></div>
        <div className="projectList">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className="projectNumber">{project.number}</div>
              <div className="projectBody"><h2>{project.title}</h2><p>{project.description}</p><ul aria-label={`${project.title} technologies`}>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul></div>
              <a href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"><span>{project.label}</span><ArrowUpRight size={24} /></a>
            </article>
          ))}
        </div>
      </section>
      <section className="aboutSection" id="about">
        <div className="shell aboutGrid">
          <div><div className="eyebrow light"><Sparkles size={14} /> How I work</div><h2>Learning deeply.<br />Building honestly.</h2></div>
          <div className="aboutCopy"><p>I care about understanding the machinery beneath the abstraction—from recursive algorithms to authentication filters and production deployments.</p><p>Every project is a chance to make something real, then ask the next useful question: can it be clearer, safer, faster, or more delightful?</p></div>
          <div className="skillGrid">{skills.map(({ icon: Icon, title, text }) => <div className="skill" key={title}><Icon size={22} /><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
        </div>
      </section>
      <section className="contact shell" id="contact">
        <p className="eyebrow"><span /> Let&apos;s make something useful</p>
        <h2>Have a project, an opportunity,<br />or a particularly stubborn bug?</h2>
        <a className="contactLink" href="https://github.com/lucasyk" target="_blank" rel="noreferrer">Start a conversation on GitHub <ArrowUpRight size={28} /></a>
      </section>
      <footer className="footer shell"><p>© {new Date().getFullYear()} Lucas Koga</p><p>Designed and built with React</p><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
