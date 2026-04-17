import { education } from '../data/portfolioData';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Education</span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">Educational qualifications that built the foundation of my career</p>
        </div>

        <div className="edu__timeline">
          {education.map((item, i) => (
            <div key={i} className="edu__item">
              <div className="edu__timeline-line">
                <div className="edu__timeline-dot"></div>
                {i < education.length - 1 && <div className="edu__timeline-connector"></div>}
              </div>
              <div className="edu__card card">
                <div className="edu__card-header">
                  <div className="edu__degree-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                  </div>
                  <span className="edu__period">{item.period}</span>
                </div>
                <h3 className="edu__degree">{item.degree}</h3>
                <p className="edu__institution">{item.institution}</p>
                {item.grade && <p className="edu__grade">{item.grade}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
