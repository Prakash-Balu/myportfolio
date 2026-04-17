import { useState } from 'react';
import { experience } from '../data/portfolioData';
import './Experience.css';

export default function Experience() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = experience[activeIdx];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Work History</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">11+ years of enterprise web development across leading technology firms</p>
        </div>

        <div className="exp__layout">
          <div className="exp__tabs">
            {experience.map((exp, i) => (
              <button
                key={i}
                className={`exp__tab ${activeIdx === i ? 'exp__tab--active' : ''}`}
                onClick={() => setActiveIdx(i)}
              >
                <span className="exp__tab-company">{exp.company}</span>
                <span className="exp__tab-period">{exp.period}</span>
              </button>
            ))}
          </div>

          <div className="exp__detail card">
            <div className="exp__detail-header">
              <div>
                <h3 className="exp__role">{active.role}</h3>
                <div className="exp__meta">
                  <span className="exp__company">{active.company}</span>
                  <span className="exp__dot">·</span>
                  <span className="exp__location">{active.location}</span>
                </div>
                <span className="exp__period-badge">{active.period}</span>
              </div>
              {active.project && (
                <div className="exp__project-badge">
                  <span className="exp__project-label">Project</span>
                  <span className="exp__project-name">{active.project}</span>
                </div>
              )}
            </div>

            <p className="exp__description">{active.description}</p>

            <div className="exp__responsibilities">
              <h4 className="exp__resp-title">Key Responsibilities</h4>
              <ul className="exp__resp-list">
                {active.responsibilities.map((r, i) => (
                  <li key={i} className="exp__resp-item">
                    <span className="exp__resp-bullet"></span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div className="exp__tech">
              {active.tech.map((t) => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
