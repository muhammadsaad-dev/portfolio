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
        <div className="section-label">Honors &amp; Achievements</div>
        <h2 className="section-title">National ranking</h2>
      </div>
      <div className="about-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <h3 style={{ margin: 0 }}>National CS Test (NCST)</h3>
          <span style={{ color: 'var(--accent2)', fontWeight: 600, fontSize: '14px' }}>96th Percentile (Top 4% Nationwide)</span>
        </div>
        <p style={{ color: 'var(--text2)', fontSize: '14px', marginTop: '0.75rem', lineHeight: '1.75' }}>
          Ranked in the 96th percentile nationwide, placing in the top 4% for Problem Solving, Algorithms, and Computer Science Fundamentals.
        </p>
      </div>

      <div className="section-header" style={{ marginTop: '3.5rem', marginBottom: '1rem' }}>
        <div className="section-label">Research</div>
        <h2 className="section-title">Final year project</h2>
      </div>
      <div className="about-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
          <div>
            <h3 style={{ margin: 0 }}>Coreference Resolution in Software Requirements</h3>
            <p style={{ color: 'var(--text3)', fontSize: '13px', marginTop: '4px' }}>
              Deep Learning &amp; NLP for Requirement Engineering Ambiguity Resolution
            </p>
          </div>
          <span style={{ color: 'var(--accent2)', fontWeight: 600, fontSize: '13px', background: 'rgba(59, 130, 246, 0.1)', padding: '4px 10px', borderRadius: '4px' }}>
            96.80% Macro F1 · Completed 2026
          </span>
        </div>
        
        <p style={{ color: 'var(--text2)', fontSize: '14px', marginTop: '1rem', lineHeight: '1.75' }}>
          Software requirements are written in natural language, so the same concept often appears under different phrasing (e.g., <em>"Doctor's Profile"</em> vs. <em>"Profile of Doctor"</em>), resulting in redundant modules and requirement inconsistencies.
        </p>
        <p style={{ color: 'var(--text2)', fontSize: '14px', marginTop: '0.6rem', lineHeight: '1.75' }}>
          Engineered a hybrid deep learning model to automatically identify and resolve coreferent entities by fusing BERT for contextual sentence semantics with Word2Vec for entity representation. Trained on a curated, manually annotated dataset across 9 real-world healthcare projects and evaluated with 10-fold cross-validation, reaching a <strong>96.80% macro F1-score</strong>. Empirical findings established that negative sampling strategy was the primary performance driver over embedding variation.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '1.25rem' }}>
          {['Python', 'PyTorch', 'Hugging Face Transformers', 'BERT', 'Gensim', 'Word2Vec', 'spaCy', 'Google Colab'].map((tech, idx) => (
            <span key={idx} className="project-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}