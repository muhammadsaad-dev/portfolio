import experienceData from '../../data/experience.json';
import { Experience } from '../../types';

export default function ExperiencePage() {
  const experiences: Experience[] = experienceData as Experience[];

  return (
    <div className="container section">
      <div className="section-header">
        <div className="section-label">Experience</div>
        <h2 className="section-title">Where I've worked</h2>
      </div>
      
      <div className="exp-timeline">
        {experiences.map((exp, index) => (
          <div className="exp-item" key={index}>
            <div className="exp-date">{exp.period}</div>
            <div>
              <div className="exp-role">{exp.role}</div>
              <div className="exp-company">{exp.company}</div>
              <ul className="exp-bullets">
                {exp.responsibilities.map((task, taskIndex) => (
                  <li key={taskIndex}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Keeping Education and Research hardcoded here as they rarely change, 
          but you could easily extract these to JSON too using the exact same pattern! */}
      <div className="section-header" style={{ marginTop: '3.5rem', marginBottom: '1rem' }}>
        <div className="section-label">Education</div>
        <h2 className="section-title">Academic background</h2>
      </div>
      <div className="edu-card">
        <div>
          <div className="edu-degree">BSc Computer Science (BSCS)</div>
          <div className="edu-uni">Government College University, Lahore</div>
          <div style={{ fontSize: '13px', color: 'var(--text3)', marginTop: '6px' }}>
            Algorithms & DSA · OOP · Software Engineering · Web Engineering · Database Systems · AI · Machine Learning · NLP
          </div>
        </div>
        <div className="edu-year">2022 – 2026</div>
      </div>

      <div className="section-header" style={{ marginTop: '3.5rem', marginBottom: '1rem' }}>
        <div className="section-label">Research</div>
        <h2 className="section-title">Final year project</h2>
      </div>
      <div className="about-card">
        <h3>Coreference Resolution System</h3>
        <p style={{ color: 'var(--text2)', fontSize: '14px', marginTop: '0.75rem', lineHeight: '1.75' }}>
          Developing a research-grade NLP system using Transformer architectures (BERT) to resolve entity clusters and linguistic ambiguities in complex text. Rigorous benchmarking against standard NLP evaluation datasets with iterative model architecture improvements. <span style={{ color: 'var(--accent2)' }}>Ongoing — 2026.</span>
        </p>
      </div>
    </div>
  );
}