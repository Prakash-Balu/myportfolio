import { personalInfo, competencies } from '../data/portfolioData';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-subtitle">A passionate frontend engineer with 11+ years of enterprise experience</p>
        </div>

        <div className="about__grid">
          <div className="about__text">
            <p className="about__intro">
              I'm <strong>Prakash Balasubramanian</strong>, a Senior Software Engineer and Technology Lead based in{' '}
              <strong>Chennai, India</strong>. With over 11 years of experience in enterprise web development, I
              specialise in Angular-based frontend architecture and scalable web applications.
            </p>
            <p className="about__body">
              Currently at <strong>Cognizant Technology Solutions</strong>, I've led frontend delivery for
              Telstra Health — a critical healthcare platform serving Australia's healthcare system using the global
              FHIR standard. I bring deep expertise in Angular across versions 8 through 14, combined with a strong
              understanding of Agile methodologies and SDLC best practices.
            </p>
            <p className="about__body">
              I thrive in collaborative environments, working closely with Product Owners, QA teams, Solution
              Architects, and DevOps to deliver high-quality, compliant, and performant user interfaces. I'm seeking
              a <strong>Technology Lead</strong> position where I can drive engineering excellence and mentor the
              next generation of frontend developers.
            </p>

            <div className="about__info">
              <div className="about__info-item">
                <span className="about__info-label">Location</span>
                <span className="about__info-value">Chennai, India</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Email</span>
                <a href={`mailto:${personalInfo.email}`} className="about__info-value about__info-link">
                  {personalInfo.email}
                </a>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Phone</span>
                <span className="about__info-value">{personalInfo.phone}</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Availability</span>
                <span className="about__info-value about__info-available">Open to opportunities</span>
              </div>
            </div>
          </div>

          <div className="about__competencies">
            <h3 className="about__comp-title">Core Competencies</h3>
            <div className="about__comp-grid">
              {competencies.map((item) => (
                <div key={item.title} className="about__comp-card card">
                  <span className="about__comp-icon">{item.icon}</span>
                  <h4 className="about__comp-name">{item.title}</h4>
                  <p className="about__comp-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
