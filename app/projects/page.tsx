import projectsData from '../../data/projects.json';
import { Project } from '../../types';

export default function Projects() {
  const projects: Project[] = projectsData as Project[];

  return (
    <div className="container section">
      <div className="section-header">
        <div className="section-label">Work</div>
        <h2 className="section-title">Projects</h2>
        <p className="section-desc">End-to-end projects built, deployed, and live.</p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-header">
              <div className="project-icon">💻</div>
              <div className="project-links">
                {project.live && (
                  <a className="project-link" href={project.live} target="_blank" rel="noreferrer">
                    Live
                  </a>
                )}
                {project.github && (
                  <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
              </div>
            </div>
            
            <div className="project-name">{project.name}</div>
            <div className="project-desc">{project.desc}</div>
            
            <div className="project-stack">
              {project.tech.map((techItem, techIndex) => (
                <span className="project-tag" key={techIndex}>
                  {techItem}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}