import Link from 'next/link';

export default function Home() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <div className="hero-badge-dot"></div>
          Open to opportunities
        </div>
        <h1>
          Muhammad Saad<br />
          <span>Software Engineer</span>
        </h1>
        <p className="hero-desc">
          Final-year CS student at GCU Lahore. I build full-stack web apps, backend APIs, and AI-powered systems — from MERN stack applications to deployed deep learning pipelines and autonomous LLM agents.
        </p>
        <div className="hero-actions">
          <Link href="/projects" className="btn-primary">
            View Projects
          </Link>
          <Link href="/contact" className="btn-secondary">
            Get in Touch
          </Link>
        </div>
        <div className="hero-stats">
          <div>
            <div className="stat-num">6+</div>
            <div className="stat-label">Live Projects</div>
          </div>
          <div>
            <div className="stat-num">1</div>
            <div className="stat-label">Year Experience</div>
          </div>
          <div>
            <div className="stat-num">5+</div>
            <div className="stat-label">Tech Stacks</div>
          </div>
          <div>
            <div className="stat-num">2026</div>
            <div className="stat-label">Graduating</div>
          </div>
        </div>
      </div>
    </div>
  );
}