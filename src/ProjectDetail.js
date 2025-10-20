import './App.css';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

// Project data - Customize each project individually
const projectData = {
  'salamanca-tequila': {
    name: 'SALAMANCA TEQUILA',
    image: '/salamanca.png',
    bullets: [
      'Salamanca tequila is a Nigerian owned tequila brand trying to break into the Nigerian and make a mark for itself amongst the already established competitions.',
      'The budget constraint created a cap in comparison to other tequila brands',
      'Tequila culture is growing but it isn\'t mainstream.',
      'How do we stand out.'
    ],
    sections: [
      {
        title: 'A JOURNEY TO HAPPINESS',
        type: 'images',
        images: ['/salamanca1.png', '/salamanca2.png', '/salamanca3.png']
      },
      {
        title: 'WITH LOVE SALAMANCA',
        type: 'youtube',
        youtubeId: 'm8gc_8TVAIo'
      },
      {
        title: 'SALAMANCA EXPERIENCE',
        type: 'youtube',
        youtubeId: 'AmPOVccfZlY'
      },
      {
        title: 'NO STANK FACE',
        type: 'youtube',
        youtubeId: 'NuhroH0WYSE'
      }
    ]
  },
  'quidax': {
    name: 'QUIDAX',
    image: '/quidax.png',
    bullets: [
      'Quidax is a cryptocurrency exchange platform.',
      'Challenge: We were tasked to come up with a visual creative direction for Quidax X Don-Jazzy partnership. '
    ],
    sections: [
      {
        title: 'THE SOLUTION',
        type: 'images',
        images: ['/quidax1.png', '/quidax2.png', '/quidax3.png']
      },
      {
        title: 'THE RESULT',
        type: 'youtube',
        youtubeId: 'xJoEb60BGBU'  // Replace with your YouTube video ID
      }
    ]
  },
  'oraimo': {
    name: 'ORAIMO',
    image: '/oraimo.png',
    bullets: [
      'Oraimo is a leading tech accessories brand.',
      'Focus on affordable quality products.',
      'Expanding market presence in Nigeria.',
      'Building brand loyalty through innovation.'
    ],
    sections: [
      {
        title: 'BRAND EVOLUTION',
        type: 'images',
        images: ['/oraimo1.jpg', '/oraimo2.jpg', '/oraimo3.jpg']
      },
      {
        title: 'BURNA BOY',
        type: 'images',
        images: ['/oraimo4.jpg', '/oraimo5.jpg', '/oraimo6.jpg']
      },
      {
        title: 'CAMPAIGN HIGHLIGHTS',
        type: 'youtube',
        youtubeId: 'xJoEb60BGBU'
      }
    ]
  },
  'renmoney': {
    name: 'RENMONEY',
    image: '/renmoney.png',
    bullets: [
      'Renmoney provides instant loans and financial services.',
      'Simplifying access to credit for Nigerians.',
      'Focus on speed and convenience.',
      'Building financial inclusion.'
    ],
    sections: [
      {
        title: 'THE APPROACH',
        type: 'images',
        images: ['/renmoney1.jpg', '/renmoney2.jpg', '/renmoney3.jpg']
      },
      {
        title: 'CUSTOMER STORIES',
        type: 'images',
        images: ['/renmoney1.jpg', '/renmoney2.jpg', '/renmoney3.jpg']
      }
    ]
  },
  'startimes': {
    name: 'NESCAFE',
    image: '/Nescafe1.jpg',
    bullets: [
      'Nescafe is one of the leading coffee brands in the world and we were please to work a few print campaigns for Nescafe Africa'
    ],
    sections: [
      {
        title: 'THE RESULT',
        type: 'images',
        images: ['/Nescafe1.jpg', '/Nescafe2.jpg', ]
      }
    ]
  },
  'firstbank': {
    name: 'FIRSTBANK',
    image: '/firstbank.png',
    bullets: [
      'FirstBank is Nigeria\'s premier financial institution.',
      'Over 100 years of banking excellence.',
      'Digital transformation journey.',
      'Building trust through innovation.'
    ],
    sections: [
      {
        title: 'DIGITAL BANKING',
        type: 'images',
        images: ['/firstbank-1.png', '/firstbank-2.png', '/firstbank-3.png']
      },
      {
        title: 'BRAND HERITAGE',
        type: 'youtube',
        youtubeId: 'YOUR_YOUTUBE_ID'
      }
    ]
  },
  'betoja': {
    name: 'BETOJA',
    image: '/betoja.png',
    bullets: [
      'Bet9ja is Nigeria\'s leading sports betting platform.',
      'Engaging sports enthusiasts nationwide.',
      'Focus on responsible gaming.',
      'Creating memorable experiences.'
    ],
    sections: [
      {
        title: 'THE CAMPAIGN',
        type: 'images',
        images: ['/betoja-1.png', '/betoja-2.png', '/betoja-3.png']
      },
      {
        title: 'IMPACT',
        type: 'youtube',
        youtubeId: 'YOUR_YOUTUBE_ID'
      }
    ]
  }
};

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectData[projectId] || projectData['salamanca-tequila'];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <Link to="/our-works" className="nav-link active" onClick={closeMobileMenu}>Our works</Link>
          <Link to="/the-lab" className="nav-link" onClick={closeMobileMenu}>The Lab</Link>
          <a href="#inventions" className="nav-link" onClick={closeMobileMenu}>Inventions</a>
          <a href="#case" className="nav-link" onClick={closeMobileMenu}>Give us a case</a>
        </nav>

        <div className="light-bulb-glow"></div>
        <div className="light-bulb"></div>
        <div className="light-bulb-rod"></div>
      </header>

      {/* Main Content - Project Detail */}
      <main className="project-detail-page">
        <div className="project-hero-section">
          {/* Main Project Polaroid - Left */}
          <div className="polaroid polaroid-detail-single">
            <div className="pushpins">
              <img src={process.env.PUBLIC_URL + '/pin.svg'} alt="pin" className="pushpin" />
            </div>
            <div className="polaroid-content">
              <div className="polaroid-image project-image" style={{backgroundImage: `url(${project.image})`}}></div>
            </div>
            <div className="polaroid-label">{project.name}</div>
          </div>

          {/* Project Description - Right */}
          <div className="project-description">
            <ul className="project-bullets">
              {project.bullets && project.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content Sections - Dynamic */}
        {project.sections && project.sections.map((section, index) => (
          <section key={index} className="project-section">
            <h2 className="section-title">{section.title}</h2>
            
            {section.type === 'images' && (
              <div className="project-images-row">
                {section.images.map((image, imgIndex) => (
                  <div 
                    key={imgIndex} 
                    className="project-image-box"
                    style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                  ></div>
                ))}
              </div>
            )}

            {section.type === 'youtube' && section.youtubeId && (
              <div className="project-video-container">
                <div className="youtube-embed">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${section.youtubeId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

            {section.type === 'video' && (
              <div className="project-video-container">
                <div 
                  className="project-video-box"
                  style={{backgroundImage: `url(${section.media})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                >
                  {/* You can replace this with actual video player if needed */}
                </div>
              </div>
            )}
          </section>
        ))}

        {/* Back Button */}
        <Link to="/our-works" className="back-button">
          ← Back to Our Works
        </Link>
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

export default ProjectDetail;

