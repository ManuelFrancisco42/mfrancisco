import React from 'react';
import './_Footer.scss'; 
const FooterComponent = () => {
  return (
    <footer id="main-footer">
    <div class="footer-content container">
      <p>Copyright &copy; 2024 Développeur. All Rights Reserved</p>
      <div class="social">
        <a href="https://x.com/mfranciscodev" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <i class="fab fa-twitter"></i>
          <span class="sr-only">Twitter</span>
        </a>
        <a href="https://www.facebook.com/Mfrancisco" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i class="fab fa-facebook"></i>
          <span class="sr-only">Facebook</span>
        </a>
        <a href="https://www.linkedin.com/in/mfranciscodev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i class="fab fa-linkedin"></i>
          <span class="sr-only">LinkedIn</span>
        </a>
        <a href="https://www.youtube.com/channel/UCU4_7sT8UiQKdIyZFfah0lA" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <i class="fab fa-youtube"></i>
          <span class="sr-only">YouTube</span>
        </a>
      </div>
    </div>
  </footer>
  
  );
};

export default FooterComponent;
