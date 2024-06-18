import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './_Header.scss'; // Ensure you import your styles

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const navElement = document.querySelector('.nav');
      if (window.scrollY > navElement.offsetHeight + 150) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getLinkClass = (path) => {
    return location.pathname === path ? 'active-link' : '';
  };

  return (
    <header id="header-inner">
      <nav className={`nav ${isActive ? 'active' : ''}`}>
        <div className="container">
          <div id="logo" className="brand">
            <h1 className="logo font-handwriten"><Link to="/">Portfolio</Link></h1>
            <p className="mr-2 font-handwriten">Manuel Francisco</p>
          </div>
          <ul>
            <li>
              <Link to="/" className={getLinkClass('/')}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={getLinkClass('/about')}>About</Link>
            </li>
            <li>
              <Link to="/projects" className={getLinkClass('/projects')}>Projects</Link>
            </li>
            <li>
              <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
            </li>
            <li>
              <a href="https://cvdesignr.com/p/6565b586a9221?hl=fr_FR" target="_blank" rel="noopener noreferrer" className={getLinkClass('/cv')}>Cv</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
