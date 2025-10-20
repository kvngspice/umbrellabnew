import './App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';

function OurWorks() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Scroll animation for mobile
  React.useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('polaroid-visible');
        }
      });
    }, observerOptions);

    // Observe all polaroids
    const polaroids = document.querySelectorAll('.polaroid');
    polaroids.forEach(polaroid => {
      observer.observe(polaroid);
    });

    return () => {
      polaroids.forEach(polaroid => {
        observer.unobserve(polaroid);
      });
    };
  }, []);

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="logo-section">
          <Link to="/" onClick={closeMobileMenu}>
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Umbrellab Logo" />
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button 
          className="hamburger-menu" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <div className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></div>
        </button>

        {/* Menu Overlay */}
        <div 
          className={`menu-overlay ${mobileMenuOpen ? 'active' : ''}`}
          onClick={closeMobileMenu}
        ></div>

        {/* Navigation */}
        <nav className={`navigation ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/our-works" className="nav-link active" onClick={closeMobileMenu}>Our works</Link>
          <Link to="/the-lab" className="nav-link" onClick={closeMobileMenu}>The Lab</Link>
          <a href="#inventions" className="nav-link" onClick={closeMobileMenu}>Inventions</a>
          <a href="#case" className="nav-link" onClick={closeMobileMenu}>Give us a case</a>
        </nav>

        <div className="light-bulb-glow"></div>
        <div className="light-bulb"></div>
        <div className="light-bulb-rod"></div>
      </header>

      {/* Main Detective Board */}
      <main className="detective-board">
        <div className="polaroid-container our-works-container">
          {/* Project 1 - Salamanca Tequila */}
          <Link to="/project/salamanca-tequila" className="polaroid-link">
            <div className="polaroid polaroid-project1">
              <div className="pushpins">
                <img src={process.env.PUBLIC_URL + '/pin.svg'} alt="pin" className="pushpin" />
              </div>
              <div className="polaroid-content">
                <div className="polaroid-image project-image" style={{backgroundImage: 'url(/salamanca.png)'}}></div>
              </div>
              <div className="polaroid-label">SALAMANCA TEQUILA</div>
            </div>
          </Link>

          {/* Project 2 - Quidax */}
          <Link to="/project/quidax" className="polaroid-link">
            <div className="polaroid polaroid-project2">
              <div className="pushpins">
                <img src={process.env.PUBLIC_URL + '/pin.svg'} alt="pin" className="pushpin" />
              </div>
              <div className="polaroid-content">
                <div className="polaroid-image project-image" style={{backgroundImage: 'url(/quidax.png)'}}></div>
              </div>
              <div className="polaroid-label">QUIDAX</div>
            </div>
          </Link>

          {/* Project 3 - Oraimo */}
          <Link to="/project/oraimo" className="polaroid-link">
            <div className="polaroid polaroid-project3">
              <div className="pushpins">
                <img src={process.env.PUBLIC_URL + '/pin.svg'} alt="pin" className="pushpin" />
              </div>
              <div className="polaroid-content">
                <div className="polaroid-image project-image" style={{backgroundImage: 'url(/oraimo.png)'}}></div>
              </div>
              <div className="polaroid-label">ORAIMO</div>
            </div>
          </Link>

          {/* Project 4 - Renmoney */}
          <Link to="/project/renmoney" className="polaroid-link">
            <div className="polaroid polaroid-project4">
              <div className="pushpins">
                <img src={process.env.PUBLIC_URL + '/pin.svg'} alt="pin" className="pushpin" />
              </div>
              <div className="polaroid-content">
                <div className="polaroid-image project-image" style={{backgroundImage: 'url(/renmoney.png)'}}></div>
              </div>
              <div className="polaroid-label">RENMONEY</div>
            </div>
          </Link>

          {/* Project 5 - Startimes */}
          <Link to="/project/startimes" className="polaroid-link">
            <div className="polaroid polaroid-project5">
              <div className="pushpins">
                <img src={process.env.PUBLIC_URL + '/pin.svg'} alt="pin" className="pushpin" />
              </div>
              <div className="polaroid-content">
                <div className="polaroid-image project-image" style={{backgroundImage: 'url(/NESCAFE.jpg)'}}></div>
              </div>
              <div className="polaroid-label">NESCAFE</div>
            </div>
          </Link>

          {/* Project 6 - Firstbank */}
          <Link to="/project/firstbank" className="polaroid-link">
            <div className="polaroid polaroid-project6">
              <div className="pushpins">
                <img src={process.env.PUBLIC_URL + '/pin.svg'} alt="pin" className="pushpin" />
              </div>
              <div className="polaroid-content">
                <div className="polaroid-image project-image" style={{backgroundImage: 'url(/firstbank.png)'}}></div>
              </div>
              <div className="polaroid-label">FIRSTBANK</div>
            </div>
          </Link>

          {/* Project 7 - Betoja */}
          <Link to="/project/betoja" className="polaroid-link">
            <div className="polaroid polaroid-project7">
              <div className="pushpins">
                <img src={process.env.PUBLIC_URL + '/pin.svg'} alt="pin" className="pushpin" />
              </div>
              <div className="polaroid-content">
                <div className="polaroid-image project-image" style={{backgroundImage: 'url(/betoja.png)'}}></div>
              </div>
              <div className="polaroid-label">BET9JA</div>
            </div>
          </Link>

          {/* Red Strings - connecting the projects */}
          <svg className="strings" viewBox="0 0 1200 1400" preserveAspectRatio="none">
            {/* Connect Project 1 to Project 2 */}
            <line x1="250" y1="100" x2="950" y2="80" stroke="#950A0A" strokeWidth="2.5" />
            
            {/* Connect Project 1 to Project 3 */}
            <line x1="250" y1="100" x2="250" y2="400" stroke="#950A0A" strokeWidth="2.5" />
            
            {/* Connect Project 2 to Project 4 */}
            <line x1="950" y1="80" x2="950" y2="400" stroke="#950A0A" strokeWidth="2.5" />
            
            {/* Connect Project 3 to Project 5 */}
            <line x1="250" y1="400" x2="380" y2="750" stroke="#950A0A" strokeWidth="2.5" />
            
            {/* Connect Project 4 to Project 6 */}
            <line x1="950" y1="400" x2="820" y2="750" stroke="#950A0A" strokeWidth="2.5" />
            
            {/* Connect Project 5 to Project 7 */}
            <line x1="380" y1="750" x2="600" y2="1100" stroke="#950A0A" strokeWidth="2.5" />
            
            {/* Connect Project 6 to Project 7 */}
            <line x1="820" y1="750" x2="600" y2="1100" stroke="#950A0A" strokeWidth="2.5" />
          </svg>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="contact-info">
          Work with us: <a href="tel:+2348138718022" className="contact-phone">+234 813 871 8022</a>
        </div>
        <div className="footer-divider"></div>
        <div className="social-links">
          <a href="https://x.com/theumbrellab" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="X (Twitter)">
            <img src={process.env.PUBLIC_URL + '/x.png'} alt="X (Twitter)" />
          </a>
          <a href="https://instagram.com/theumbrellab" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
            <img src={process.env.PUBLIC_URL + '/instagram.png'} alt="Instagram" />
          </a>
          <a href="https://tiktok.com/@theumbrellab" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TikTok">
            <img src={process.env.PUBLIC_URL + '/tiktok.png'} alt="TikTok" />
          </a>
        </div>
        <div className="copyright">2024. THE UMBRELLAB</div>
      </footer>
    </div>
  );
}

export default OurWorks;

