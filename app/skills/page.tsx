import skillsData from '../../data/skills.json';
import { SkillCategory } from '../../types';

export default function Skills() {
  const categories: SkillCategory[] = skillsData as SkillCategory[];

  return (
    <div className="container section">
      <div className="section-header">
        <div className="section-label">Technical skills</div>
        <h2 className="section-title">What I work with</h2>
        <p className="section-desc">Technologies and tools I've used across real projects and professional work.</p>
      </div>
      <div className="skills-grid">
        {categories.map((category, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-card-title">{category.title}</div>
            <div className="skill-tags">
              {category.items.map((skill, skillIndex) => (
                <span 
                  key={skillIndex} 
                  className={`tag ${skill.hot ? 'hot' : ''}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}