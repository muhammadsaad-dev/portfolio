import Link from "next/link";

export default function Home() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <div className="hero-badge-dot"></div>
          Open to opportunities
        </div>
        <h1>
          Muhammad Saad
          <br />
          <span>Software Engineer</span>
        </h1>
        <p className="hero-desc">
          Associate Software Engineer at Axiom World &amp; CS Graduate. I build
          backend APIs, scalable databases, and full-stack systems — working with
          Python, PostgreSQL, SQL, and modern AI/web technologies.
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
            <div className="stat-num">Axiom</div>
            <div className="stat-label">Software Engineer</div>
          </div>
          <div>
            <div className="stat-num">5+</div>
            <div className="stat-label">Tech Stacks</div>
          </div>
          <div>
            <div className="stat-num">BS CS</div>
            <div className="stat-label">Graduated</div>
          </div>
        </div>
      </div>
    </div>
  );
}
