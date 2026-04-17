import { personalInfo } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="divider"></div>
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">PB</span>
          <span className="footer__name">{personalInfo.name}</span>
        </div>
        <p className="footer__copy">
          © {new Date().getFullYear()} {personalInfo.name}. Senior Software Engineer & Technology Lead.
        </p>
        <div className="footer__links">
          {['#about', '#skills', '#experience', '#projects', '#contact'].map((href) => (
            <a key={href} href={href} className="footer__link">
              {href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
