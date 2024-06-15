import React from 'react';
import './_Home.scss'; 
import Hero from '../../components/Hero/Hero';
import logo from '../../assets/images/showcase/web-development-showcase-2.jpg';
import img1 from '../../assets/images/showcase/web-development-showcase-3.jpg';
import img2 from '../../assets/images/showcase/web-development-showcase-5.jpg';
import img3 from '../../assets/images/showcase/web-development-showcase-1.jpg';
import certificate from '../../assets/images/stats/certificate.svg';
import validator from '../../assets/images/stats/access_time.svg';
import timelapse from '../../assets/images/stats/check_circle_outline.svg';


const HomeSection = () => {
  return (
    <div>
      {/* Header Section */}
      <Hero/>
      
      {/* First Section */}
      <section id="home-a" className="text-center py-3">
        <div className="container">
          <h1 className="section-title mt-4" lang="fr">Services professionnels de développeur web et d&apos;intégrateur web</h1>
          <p className="section-title" lang="fr">Je me consacre à la</p>
          <p className="lead text-black" lang="fr">
            Création d&apos;expériences numériques uniques pour sites web et applications.
          </p>
          <div className="specials">
            <Card
              imgSrc={logo}
              alt="Web integration services"
              title="Discutions Votre Website"
              description="Donnons vie à votre projet avec dévouement et professionnalisme."
            />
            <Card
              imgSrc={img1}
              alt="Web developer working on code"
              title="Brainstorming Site internet"
              description="Définissons ensemble le concept unique de votre projet lors d&apos;une session où chaque idée prend vie."
            />
            <Card
              imgSrc={img2}
              alt="Web integration services"
              title="Planification et Discussion"
              description="Discutons des détails et établissons des plans solides pour assurer le succès de votre website."
            />
            <Card
              imgSrc={img3}
              alt="Web integration services"
              title="Interaction au CŒUR"
              description="Collaborons étroitement à chaque étape pour un processus transparent et des résultats qui dépassent vos attentes."
            />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section id="home-b" className="text-center py-2">
        <div className="container">
          <h2>Custom Web Development Solutions</h2>
          <div className="stats">
            <Stats
             
              imgSrc={certificate}
              title="Certificat"
              number="20"
            />
            <Stats
            imgSrc={validator}
              title="Heures de Formation"
              number="+ 1125"
            />
            <Stats
            imgSrc={timelapse}
              title="Projets Terminés"
              number="+ 35"
            />
          </div>
        </div> 
      </section>

      {/* Third Section */}
      <section id="home-c" className="text-center py-2 my-4 bg-dark">
        <div className="container">
          <h2 className="section-title" lang="fr">Mon Processus Créatif</h2>
          <p className="lead" lang="fr">
            Chaque projet et design dans mon univers créatif suit une
            formule éprouvée pour atteindre les résultats recherchés.
          </p>
          <div className="process">
            <Process
              iconClass="fas fa-book"
              title="Discussion du Projet"
              description="Nous entamons chaque projet par une discussion approfondie, explorant ensemble les détails cruciaux pour une mise en œuvre réussie."
            />
            <Process
              iconClass="fas fa-desktop"
              title="Brainstorming du Concept"
              description="Le processus créatif prend vie lors d&apos;une session de brainstorming dynamique, où chaque idée trouve sa place pour définir le concept unique de votre projet."
            />
            <Process
              iconClass="fas fa-calendar-alt"
              title="Planning"
              description="La planification méticuleuse assure une expérience utilisateur fluide sur votre site ou application."
            />
            <Process
              iconClass="fas fa-exchange-alt"
              title="Interaction au CŒUR"
              description="Chaque étape respire l&apos;interaction. Des icônes de qualité transforment vos idées en une interface interactive, ajustée en collaboration étroite avec votre approbation."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const Card = ({ imgSrc, title, description }) => (
  <div className="card">
    <div className="card-side card-front">
      <img src={imgSrc} alt={title} /> 
      <div className="card-info">
        <h2>{title}</h2>
        <p className='appearance-text-adjust text-black'>{description}</p>
      </div>
    </div>
    <div className="card-side card-back"></div>
  </div>
);

const Stats = ({ imgSrc, iconClass, title, number }) => (
  <div className="formation-objective" role="region" aria-labelledby={`${title}-stat`}> 
    <ul>
      {imgSrc && (
        <li>
          <img className="certificate_2" src={imgSrc} alt={title} />
        </li>
      )}
      {iconClass && (
        <li>
          <i className={`${iconClass} fa-5x`} aria-hidden="true"></i>
        </li>
      )}
      <li id={`${title}-stat`} className="stats-title">{title}</li> 
      <li className="stats-number text-white">{number}</li>
    </ul>
  </div>
);

const Process = ({ iconClass, title, description }) => (
  <div>
    <i className={`${iconClass} fa-5x process-icon my-2`} aria-hidden="true"></i> 
    <h3>{title}</h3>
    <p className='appearance-text-adjust text-white'>{description}</p>
  </div>
);

export default HomeSection;
