import './App.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function TheLab() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Brand logos array
  const brands = [
    { name: 'Oraimo', logo: '/oraimologo.png' },
    { name: 'Salamanca', logo: '/salamancalogo.png' },
    { name: 'Quidax', logo: '/quidax.png' },
    { name: 'Renmoney', logo: '/renmoney.png' },
    { name: 'FirstBank', logo: '/firstbanklogo.png' },
    { name: 'Bet9ja', logo: '/Bet9jalogo.png' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % brands.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + brands.length) % brands.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Auto-play slider
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % brands.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [brands.length]);

  return (
    <div className="App the-lab-page">
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
          <Link to="/the-lab" className="nav-link active" onClick={closeMobileMenu}>The Lab</Link>
          <a href="#inventions" className="nav-link" onClick={closeMobileMenu}>Inventions</a>
          <a href="#case" className="nav-link" onClick={closeMobileMenu}>Give us a case</a>
        </nav>

        <div className="light-bulb-glow"></div>
        <div className="light-bulb"></div>
        <div className="light-bulb-rod"></div>
      </header>

      {/* Hero Section */}
      <section className="lab-hero-section">
        <h1 className="lab-hero-title">
          We enjoy the chaos that comes with creating...
        </h1>
        <p className="lab-hero-subtitle">
          we are a creative lab obsessed with creating tailored formulas/solutions for brand looking to scale and make impacts.
        </p>
      </section>

      {/* Brands Section */}
      <section id="brands-section" className="lab-brands-section">
        <h2 className="brands-title">BRANDS WE HAVE IMPACTED</h2>
        
        <div className="brands-slider-container">
          {/* Previous Button */}
          <button className="slider-arrow slider-arrow-left" onClick={prevSlide} aria-label="Previous brand">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>

          {/* Slider */}
          <div className="brands-slider">
            <div 
              className="brands-slider-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {brands.map((brand, index) => (
                <div key={index} className="brand-slide">
                  <div className="brand-logo-item">
                    <img 
                      src={process.env.PUBLIC_URL + brand.logo} 
                      alt={brand.name}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button className="slider-arrow slider-arrow-right" onClick={nextSlide} aria-label="Next brand">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>
        </div>

        {/* Slider Dots */}
        <div className="slider-dots">
          {brands.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer lab-footer">
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

export default TheLab;

