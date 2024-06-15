import React from 'react';
import './_Contact.scss'; // Import your CSS file

const ContactSection = () => {
  return (
    <div>
      {/* Section A: Contact Form */}
      <section id="contact-a" className="text-center py-3">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <p className=" black-color-fallback mb-2"  lang="fr">Voici comment vous pouvez me contacter</p>
          <form
            action="https://formspree.io/f/xrgwvyqd"
            method="POST"
            data-netlify="true"
            data-netlify-recaptcha="true"
          >
            <ul>
              <li>
                <label htmlFor="name">Name:</label> 
                <input
                  type="text"
                  id="name"
                  className="name-input"
                  placeholder="Your Name"
                  name="name"
                  required
                />
              </li>
              <li>
                <label htmlFor="email">Email:</label> 
                <input
                  type="email"
                  id="email"
                  className="input-email"
                  placeholder="Email"
                  name="email"
                  required
                />
              </li>
              <li>
                <label htmlFor="phone">Phone:</label> 
                <input
                  type="tel"
                  id="phone"
                  className="input-phone"
                  placeholder="Phone Number"
                  name="phone"
                  required
                />
              </li>
              <li>
                <label htmlFor="message">Message:</label> 
                <textarea
                  id="message"
                  className="text-input message-input"
                  placeholder="Enter Message"
                  name="message"
                  required
                  rows="5" 
                ></textarea>
              </li>
              <li>
                <button type="submit" className="btn-dark">Submit</button>
              </li>
            </ul>
          </form>
        </div>
      </section>

      {/* Section B: Contact Info */}
      <section id="contact-b" className="py-3 bg-dark">
        <div className="container">
          <div className="contact-info">
            <div>
              <i className="fas fa-envelope fa-5x text-white" aria-hidden="true"></i> 
              <h3 className="text-white">Email</h3>
              <p className="text-white">anitafrancisco00@gmail.com</p>
            </div>
            <div>
              <i className="fas fa-phone fa-5x text-white" aria-hidden="true"></i> 
              <h3 className="text-white">Phone</h3>
              <p className="text-white">(033) 06-11-87-81-44</p>
            </div>
            <div>
              <i className="fas fa-address-card fa-5x text-white" aria-hidden="true"></i> 
              <h3 className="text-white">Address</h3>
              <p className="text-white">Ville, Saint-Etienne</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section C: Tagline */}
      <section id="contact-c" className="bg-main py-4">
        <div className="container">
          <h1  lang="fr">Commençons votre prochain projet</h1>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
