import { useState } from 'react';
import { experience, statsInfo } from '../data/portfolioData';
import './Experience.css';

export default function Experience() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = experience[activeIdx];
  const total = experience.length;

  const prev = () => setActiveIdx(i => (i - 1 + total) % total);
  const next = () => setActiveIdx(i => (i + 1) % total);

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Work History</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">{statsInfo.yearsofExp} years of enterprise web development across leading technology firms</p>
        </div>

        <div className="exp__layout">
          {/* Desktop: tab list */}
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

          {/* Mobile: carousel navigation */}
          <div className="exp__carousel-nav">
            <button className="exp__carousel-btn" onClick={prev} aria-label="Previous">
              &#8249;
            </button>
            <div className="exp__carousel-info">
              <span className="exp__carousel-name">{active.company}</span>
              <span className="exp__carousel-count">{activeIdx + 1} of {total}</span>
            </div>
            <button className="exp__carousel-btn" onClick={next} aria-label="Next">
              &#8250;
            </button>
          </div>

          {/* Detail panel */}
          <div className="exp__detail card" key={activeIdx}>
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
