import { projects } from '../data/portfolioData';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A selection of enterprise and client projects I've worked on</p>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <div key={project.name} className={`projects__card card ${project.highlight ? 'projects__card--highlight' : ''}`}>
              {project.highlight && (
                <div className="projects__featured-badge">Featured</div>
              )}
              <div className="projects__card-top">
                <div className="projects__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="3" width="20" height="14" rx="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <span className="projects__type">{project.type}</span>
              </div>

              <h3 className="projects__name">{project.name}</h3>
              <p className="projects__desc">{project.description}</p>

              <div className="projects__tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
