export default function About() {
  return (
    <div className="container section">
      <div className="section-header">
        <div className="section-label">About me</div>
        <h2 className="section-title">Who I am</h2>
      </div>
      <div className="about-grid">
        <div className="about-text">
          <p>I'm a final-year Computer Science student at Government College University, Lahore, with a genuine passion for building things that work — not just in theory, but in production.</p>
          <p>My background spans full-stack web development, Python backend engineering, and AI/ML systems. I've independently shipped multiple end-to-end projects: from MERN stack web apps to deep learning models deployed as live APIs, to autonomous LLM agents built with LangChain and LangGraph.</p>
          <p>I've also gained professional experience as a Backend Developer Intern at Dr. Coders, where I worked on production REST APIs, SQL databases, and collaborative Agile workflows.</p>
          <p>I pick up new technologies quickly, write clean and maintainable code, and care about the quality of what I ship. Currently seeking full-time or internship opportunities in software engineering, AI/ML, or full-stack development.</p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <a className="btn-primary" href="https://github.com/muhammadsaad-dev" target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn-secondary" href="https://linkedin.com/in/muhammad-saad-78a308267" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
        <div>
          <div className="about-card">
            <h3>Quick Info</h3>
            <div className="info-row"><span>Location</span><span>Lahore, Pakistan</span></div>
            <div className="info-row"><span>Degree</span><span>BSCS — GCU Lahore</span></div>
            <div className="info-row"><span>Graduating</span><span>June 2026</span></div>
            <div className="info-row"><span>Email</span><span>saadcs.dev@gmail.com</span></div>
            <div className="info-row"><span>Phone</span><span>+92-321-1673839</span></div>
            <div className="info-row"><span>Status</span><span style={{ color: 'var(--green)' }}>Open to work</span></div>
          </div>
          <div className="about-card" style={{ marginTop: '1rem' }}>
            <h3>Interests</h3>
            <div className="info-row"><span>Primary</span><span>Full-Stack Dev</span></div>
            <div className="info-row"><span>Secondary</span><span>AI / LLM Engineering</span></div>
            <div className="info-row"><span>Also into</span><span>NLP Research</span></div>
            <div className="info-row"><span>FYP</span><span>Coreference Resolution</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}