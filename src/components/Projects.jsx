import { useState } from 'react';
import { projects } from '../data/portfolioData';
import './Projects.css';

export default function Projects() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = projects[activeIdx];
  const total = projects.length;

  const prev = () => setActiveIdx(i => (i - 1 + total) % total);
  const next = () => setActiveIdx(i => (i + 1) % total);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A selection of enterprise and client projects I've worked on</p>
        </div>

        <div className="proj__layout">
          {/* Desktop: tab list */}
          <div className="proj__tabs">
            {projects.map((project, i) => (
              <button
                key={i}
                className={`proj__tab ${activeIdx === i ? 'proj__tab--active' : ''}`}
                onClick={() => setActiveIdx(i)}
              >
                <span className="proj__tab-name">{project.name}</span>
                <span className="proj__tab-type">{project.type}</span>
              </button>
            ))}
          </div>

          {/* Mobile: carousel navigation */}
          <div className="proj__carousel-nav">
            <button className="proj__carousel-btn" onClick={prev} aria-label="Previous">
              &#8249;
            </button>
            <div className="proj__carousel-info">
              <span className="proj__carousel-name">{active.name}</span>
              <span className="proj__carousel-count">{activeIdx + 1} of {total}</span>
            </div>
            <button className="proj__carousel-btn" onClick={next} aria-label="Next">
              &#8250;
            </button>
          </div>

          {/* Detail panel */}
          <div className="proj__detail card" key={activeIdx}>
            <div className="proj__detail-header">
              <div className="proj__title-row">
                <h3 className="proj__name">{active.name}</h3>
                {active.highlight && (
                  <span className="proj__featured-badge">Featured</span>
                )}
              </div>
              <span className="proj__type-badge">{active.type}</span>
            </div>

            <p className="proj__description">{active.description}</p>

            <div>
              <h4 className="proj__tech-title">Tech Stack</h4>
              <div className="proj__tech">
                {active.tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
