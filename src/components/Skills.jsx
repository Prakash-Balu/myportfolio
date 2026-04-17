import { skills } from '../data/portfolioData';
import './Skills.css';

const skillCategories = [
  {
    label: 'Primary Skills',
    icon: '⚛️',
    items: skills.primary,
    color: '#6366f1',
  },
  {
    label: 'Secondary Skills',
    icon: '🔧',
    items: skills.secondary,
    color: '#8b5cf6',
  },
  {
    label: 'Database',
    icon: '🗄️',
    items: skills.database,
    color: '#06b6d4',
  },
  {
    label: 'Dev Tools',
    icon: '🛠️',
    items: skills.tools,
    color: '#f59e0b',
  },
  {
    label: 'Operating Systems',
    icon: '💻',
    items: skills.os,
    color: '#10b981',
  },
  {
    label: 'AI Tools',
    icon: '🤖',
    items: skills.aiTools,
    color: '#ec4899',
  },
];

const proficiencyMap = {
  'Angular 19': 88, 'Angular 14': 95, 'Angular 11': 92, 'Angular 8': 90, 'AngularJS': 92,
  'HTML5': 98, 'CSS3': 95, 'JavaScript': 94, 'Bootstrap': 90,
  'TypeScript': 80, 'React': 72, 'Node.js': 70, 'jQuery': 85, 'AJAX': 82,
  'MySQL': 75, 'Git': 90, 'JIRA': 88,
  'GitHub Copilot': 85, 'Microsoft Copilot': 82, 'ChatGPT': 88, 'Claude AI': 86,
};

export default function Skills() {
  const coreSkills = ['HTML5', 'CSS3', 'JavaScript', 'Angular 19', 'Angular 14', 'Bootstrap', 'GitHub Copilot', 'Claude AI'];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Technical Skills</span>
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-subtitle">Technologies and tools I work with to build great products</p>
        </div>

        <div className="skills__proficiency">
          <h3 className="skills__sub-title">Core Proficiencies</h3>
          <div className="skills__bars">
            {coreSkills.map((skill) => (
              <div key={skill} className="skills__bar-item">
                <div className="skills__bar-label">
                  <span>{skill}</span>
                  <span className="skills__bar-pct">{proficiencyMap[skill] ?? 80}%</span>
                </div>
                <div className="skills__bar-track">
                  <div
                    className="skills__bar-fill"
                    style={{ '--w': `${proficiencyMap[skill] ?? 80}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills__categories">
          {skillCategories.map((cat) => (
            <div key={cat.label} className="skills__cat card">
              <div className="skills__cat-header">
                <span className="skills__cat-icon">{cat.icon}</span>
                <h4 className="skills__cat-label">{cat.label}</h4>
              </div>
              <div className="skills__cat-items">
                {cat.items.map((item) => (
                  <span key={item} className="skills__tag" style={{ '--color': cat.color }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
