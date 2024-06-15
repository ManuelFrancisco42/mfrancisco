import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './_Hero.scss'; 


const useTypewriter = (words, wait = 3000) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const currentWord = words[wordIndex];
      setText(
        isDeleting
          ? currentWord.substring(0, text.length - 1)
          : currentWord.substring(0, text.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), wait);
        setTypingSpeed(150);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        setTypingSpeed(500);
      } else {
        setTypingSpeed(isDeleting ? 30 : 150);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, words, wordIndex, wait]);

  return text;
};

const HeroComponent = () => {
  const words = [" Développeur Web", " Intégrateur Web"];
  const typedText = useTypewriter(words);

  return (
    <section className="hero">
      
      <div className="container">
        <div className="hero-content">
          <h1>
            Je Suis 
            <span className="txt-type" data-wait="3000" data-words='[" Développeur Web", " " "Intégrateur Web"]'>{typedText}</span>
          </h1>
          <p className="lead" lang='fr'>FORMÉ EN INTÉGRATION & DEVELOPMENT WEB</p>
          <Link to="/projects" className="btn-light" role='button' rel="noopener noreferrer">View My Work</Link>
        </div>
       
      </div>
    </section>
  );
};

export default HeroComponent;

