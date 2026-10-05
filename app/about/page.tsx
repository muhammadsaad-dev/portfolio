export default function About() {
  return (
    <div className="container section">
      <div className="section-header">
        <div className="section-label">About me</div>
        <h2 className="section-title">Who I am</h2>
      </div>
      <div className="about-grid">
        <div className="about-text">
          <p>I'm a Computer Science graduate from Government College University, Lahore, currently working as an Associate Software Engineer at Axiom World.</p>
          <p>With 6 months of professional engineering experience, I specialize in backend engineering and database systems. I work daily with Python, designing and consuming RESTful APIs, managing and optimizing PostgreSQL & SQL databases, and leveraging Git and GitHub for collaborative version control and deployment.</p>
          <p>My background also spans full-stack web development and AI/ML systems — from MERN stack web applications to deep learning models deployed as live APIs and autonomous LLM agents built with LangChain and LangGraph.</p>
          <p>I pick up new technologies quickly, write clean and maintainable code, and care deeply about the performance and quality of software in production.</p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <a className="btn-primary" href="https://github.com/muhammadsaad-dev" target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn-secondary" href="https://linkedin.com/in/muhammad-saad-78a308267" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
        <div>
          <div className="about-card">
            <h3>Quick Info</h3>
            <div className="info-row"><span>Role</span><span>Assoc. Software Engineer</span></div>
            <div className="info-row"><span>Company</span><span>Axiom World</span></div>
            <div className="info-row"><span>Location</span><span>Lahore, Pakistan</span></div>
            <div className="info-row"><span>Degree</span><span>BSCS — GCU Lahore</span></div>
            <div className="info-row"><span>Status</span><span style={{ color: 'var(--green)' }}>Graduated</span></div>
            <div className="info-row"><span>Email</span><span>saadcs.dev@gmail.com</span></div>
            <div className="info-row"><span>Phone</span><span>+92-321-1673839</span></div>
          </div>
          <div className="about-card" style={{ marginTop: '1rem' }}>
            <h3>Highlights &amp; Interests</h3>
            <div className="info-row"><span>NCST Rank</span><span style={{ color: 'var(--accent2)' }}>Top 4% (96th %ile)</span></div>
            <div className="info-row"><span>Primary</span><span>Backend &amp; Full-Stack</span></div>
            <div className="info-row"><span>Secondary</span><span>AI / LLM Engineering</span></div>
            <div className="info-row"><span>FYP</span><span>Coreference Resolution</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}