import React from 'react';
import image_1 from '../../assets/images/items/web-development-image-1.jpg';
import image_2 from '../../assets/images/items/web-development-image-2.jpg';
import image_3 from '../../assets/images/items/web-development-image-3.jpg';
import image_4 from '../../assets/images/items/web-development-image-4.jpg';
import image_5 from '../../assets/images/items/web-development-image-5.jpg';
import image_6 from '../../assets/images/items/web-development-image-6.jpg';
import image_7 from '../../assets/images/items/web-development-image-7.jpg';
import image_8 from '../../assets/images/items/web-development-image-8.jpg';
import image_14 from '../../assets/images/items/web-development-image-14.jpg';
import image_10 from '../../assets/images/items/web-development-image-10.jpg';
import image_11 from '../../assets/images/items/web-development-image-11.jpg';
import image_12 from '../../assets/images/items/web-development-image-12.jpg';
import './_Projects.scss';

const Gallery = () => {
  const projects = [
    {
      link: 'https://manuelfrancisco42.github.io/interactive-rating-component/',
      image: image_1,
      alt: 'Interactive Rating Component website',
      category: 'Interactive Rating',
      title: 'Frontend Mentor',
    },
    {
      link: 'https://manuelfrancisco42.github.io/frontend-four-card-feature-section/',
      image: image_2,
      alt: 'Four card feature website',
      category: 'Four Card Feature',
      title: 'Frontend Mentor',
    },
    {
      link: 'https://manuelfrancisco42.github.io/newsletter-sign-up-with-success/',
      image: image_3,
      alt: 'Newsletter sign up website',
      category: 'Newsletter Sign-up',
      title: 'Frontend Mentor',
    },
    {
      link: 'https://manuelfrancisco42.github.io/fem-recipe-page-/',
      image: image_4,
      alt: 'Recipe page website',
      category: 'Recipe Page',
      title: 'Frontend Mentor',
    },
    {
      link: 'https://manuelfrancisco42.github.io/frontend-product-preview-card/',
      image: image_5,
      alt: 'Product Preview card website',
      category: 'Product Preview',
      title: 'Frontend Mentor',
    },
    {
      link: 'https://manuelfrancisco42.github.io/ohmyfood_final/',
      image: image_6,
      alt: 'Ohmyfood website',
      category: 'Ohmyfood',
      title: 'OpenClassRoom',
    },
    {
      link: 'https://manuelfrancisco42.github.io/Booki/',
      image: image_7,
      alt: 'iBook website',
      category: 'iBook',
      title: 'OpenClassRoom',
    },
    {
      link: 'https://manuelfrancisco42.github.io/single-price-grid-component/',
      image: image_8,
      alt: 'Single price component website',
      category: 'Single Price',
      title: 'Frontend Mentor',
    },
    {
      link: 'https://manuelfrancisco42.github.io/Stats-Preview-Component/',
      image: image_14,
      alt: 'Stats Preview website',
      category: 'Stats Preview',
      title: 'Frontend Mentor',
    },
    {
      link: 'https://manuelfrancisco42.github.io/frontendMentorTipCalculatorApp/',
      image: image_10,
      alt: 'Tip Calculator website',
      category: 'Tip Calculator',
      title: 'Frontend Mentor',
    },
    {
      link: 'https://manuelfrancisco42.github.io/Print-it-JS-main/',
      image: image_11,
      alt: 'Print-i-Js website',
      category: 'Print-i-Js',
      title: 'OpenClassRoom',
    },
    {
      link: 'https://manuelfrancisco42.github.io/news-homepage/',
      image: image_12,
      alt: 'News Homepage website',
      category: 'News Homepage',
      title: 'Frontend Mentor',
    },
  ];

  return (
    <section id="work-a" className="text-center py-3">
      <div className="container">
        <h2 className="section-title">My Work</h2>
        <p className="lead text-black" lang="fr">Découvrez quelques-uns de mes projets: <small className='my-3'>click to See</small></p>
        
        <div className="items">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link to ${project.category || 'project'}: ${project.title}`}
            >
              <div className="item">
                <div className="item-image">
                  <img
                    src={project.image}
                    alt={project.alt}
                    title={project.title}
                  />
                </div>
                <div className="item-text">
                  <div className="item-text-wrap">
                    <p className="item-text-category">{project.category}</p>
                    <h2 className="item-text-title">{project.title}</h2>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
