import './App.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Import images from src folder
// Place your images in src/assets/ folder and import them like:
// import worksImage from './assets/works.jpg';
// import labImage from './assets/lab.jpg';
// import inventionsImage from './assets/inventions.jpg';
// import caseImage from './assets/case.jpg';
// import communitiesImage from './assets/communities.jpg';

function App() {
  const [currentText, setCurrentText] = useState('experimenting');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(prev => prev === 'experimenting' ? 'problem solving' : 'experimenting');
    }, 6000); // Changes every 6 seconds to match animation

    return () => clearInterval(interval);
  }, []);

  // Scroll animation for mobile
  useEffect(() => {
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

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
          <Link to="/our-works" className="nav-link" onClick={closeMobileMenu}>Our works</Link>
          <Link to="/the-lab" className="nav-link" onClick={closeMobileMenu}>The Lab</Link>
          <a href="#inventions" className="nav-link" onClick={closeMobileMenu}>Inventions</a>
          <a href="#case" className="nav-link" onClick={closeMobileMenu}>Give us a case</a>
        </nav>

        <div className="light-bulb-glow"></div>
        <div className="light-bulb"></div>
        <div className="light-bulb-rod"></div>
      </header>

      {/* Hero Text Section */}
      <section className="hero-text-section">
        <h1 className="hero-title">
          Creativity is <span className="animated-text">{currentText}</span>.
        </h1>
       
      </section>

      {/* Main Detective Board */}
      <main className="detective-board">
        <div className="polaroid-container">
          {/* Our Works Polaroid */}
          <Link to="/our-works" className="polaroid-link">
            <div className="polaroid polaroid-works">
              <div className="pushpins">
                <img src={process.env.PUBLIC_URL + '/pin.svg'} alt="pin" className="pushpin" />
              </div>
              <div className="polaroid-content">
                <div className="polaroid-image works-image" style={{backgroundImage: 'url(/ourworks.png)'}}></div>
              </div>
              <div className="polaroid-label">OUR WORKS(case files)</div>
            </div>
          </Link>

          {/* The Lab Polaroid */}
          <Link to="/the-lab" className="polaroid-link">
            <div className="polaroid polaroid-lab">
              <div className="pushpins">
                <img src={process.env.PUBLIC_URL + '/pin.svg'} alt="pin" className="pushpin" />
              </div>
              <div className="polaroid-content">
                <div className="polaroid-image lab-image" style={{backgroundImage: 'url(/lab.png)'}}></div>
              </div>
              <div className="polaroid-label">THE LAB</div>
            </div>
          </Link>

          {/* Inventions Polaroid */}
          <div className="polaroid polaroid-inventions">
            <div className="pushpins">
              <img src={process.env.PUBLIC_URL + '/pin.svg'} alt="pin" className="pushpin" />
            </div>
            <div className="polaroid-content">
              <div className="polaroid-image inventions-image" style={{backgroundImage: 'url(/inventions.png)'}}>
                <div className="empty-frame"></div>
              </div>
            </div>
            <div className="polaroid-label">INVENTIONS</div>
          </div>

          {/* Give Us A Case Polaroid */}
          <div className="polaroid polaroid-case">
            <div className="pushpins">
              <img src={process.env.PUBLIC_URL + '/pin.svg'} alt="pin" className="pushpin" />
            </div>
            <div className="polaroid-content">
              <div className="polaroid-image case-image" style={{backgroundImage: 'url(/case.png)'}}>

                <div className="confidential">CONFIDENTIAL</div>
              
              </div>
            </div>
            <div className="polaroid-label">GIVE US A CASE</div>
          </div>

          {/* Communities Polaroid */}
          <div className="polaroid polaroid-communities">
            <div className="pushpins">
              <img src={process.env.PUBLIC_URL + '/pin.svg'} alt="pin" className="pushpin" />
            </div>
            <div className="polaroid-content">
              <div className="polaroid-image communities-image" style={{backgroundImage: 'url(/communities.jpg)'}}>
                <div className="empty-frame"></div>
              </div>
            </div>
            <div className="polaroid-label">COMMUNITIES</div>
          </div>

         

          {/* Red Strings - connecting pin to pin (passing underneath each pin from center) */}
          <svg className="strings" viewBox="0 0 1200 1300" preserveAspectRatio="none">
            {/* Pin positions with increased vertical spacing:
                - Works: left 10% (~120px) + half width (140px) = ~260px, top: 80px + offset 60px = 140px
                - Lab: right 15% (~85% of 1200 = 1020px) + half width = ~1020px, top: 30px + 10px = 40px  
                - Inventions: left 20% (~240px) + 140px = ~380px, top: 520px + 30px = 550px
                - Case: right 12% (~88% = 1056px) + 140px = ~1056px, top: 490px = 490px
                - Communities: center (600px), top: 950px - 10px = 940px
            */}
            
            {/* Connect Works pin to Lab pin (top horizontal/diagonal) */}
            <line x1="250" y1="60" x2="870" y2="30" stroke="#950A0A" strokeWidth="2.5" />
            
            {/* Connect Works pin to Inventions pin (left to middle-left diagonal) */}
            <line x1="850" y1="40" x2="380" y2="450" stroke="#950A0A" strokeWidth="2.5" />
            
            {/* Connect Lab pin to Case pin (right vertical/diagonal) */}
            <line x1="370" y1="440" x2="930" y2="430" stroke="#950A0A" strokeWidth="2.5" />
            
           
            
            {/* Connect Case pin to Communities pin (diagonal right to center) */}
            <line x1="920" y1="430" x2="560" y2="850" stroke="#950A0A" strokeWidth="2.5" />
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

export default App;
