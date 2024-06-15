import React from "react";
import writingDownImage from "../../assets/images/thumbnail/web-development-thumbnail-4.jpg";
import pointdrawingsImage from "../../assets/images/thumbnail/web-development-thumbnail-2.jpg";
import PhoneontableImage from "../../assets/images/thumbnail/web-development-thumbnail-3.jpg";
import htmlLogo from "../../assets/images/icon-skills/html5.svg";
import cssLogo from "../../assets/images/icon-skills/css3.svg";
import javascriptLogo from "../../assets/images/icon-skills/javascript.svg";
import gulpLogo from "../../assets/images/icon-framework/gulp.svg";
import sassLogo from "../../assets/images/icon-framework/sass.svg";
import bootstrapLogo from "../../assets/images/icon-framework/bootstrap.svg";
import githubLogo from "../../assets/images/icon-framework/github.svg";
import mongodbLogo from "../../assets/images/icon-framework/mongodb.svg";
import reactLogo from "../../assets/images/icon-framework/react.svg";
import webpackLogo from "../../assets/images/icon-framework/webpack.svg";
import "./_About.scss";

const AboutSection = () => {
  return (
    <div>
      {/* Section A: Info */}
      <section id="about-a" className="text-center py-3 my-4">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p className="lead" lang="fr">
            VOTRE VISION, MON ENGAGEMENT...
          </p>
          <div className="about-info">
            <div className="bio bg-light">
              <h4 lang="fr">Votre projet est entre de bonnes mains</h4>
              <p lang="fr">
                Bienvenue dans l&apos;univers où la créativité rencontre la
                fonctionnalité, où vos idées prennent vie sur le web. En tant
                qu&apos;intégrateur web passionné, je m&apos;engage à donner vie
                à votre projet avec une expertise méticuleuse et une passion
                inébranlable.
              </p>
            </div>
            <div className="bio-2 bg-light">
              <h4 lang="fr">TRANSFORMEZ VOS IDÉES EN RÉALITÉ</h4>
              <p lang="fr">
                Laissez-moi transformer vos concepts en une présence web
                percutante. Chaque détail compte, et je m&apos;assure que votre
                site internet non seulement répond à vos attentes, mais les
                dépasse.
              </p>
            </div>
            <div className="award-1">
              <img
                src={writingDownImage}
                alt="Person writing a brainstorm"
                className="bio-image"
                title="Maquettes détaillées"
              />
              <h3 lang="fr">Maquettes détaillées</h3>
              <p lang="fr">
                Le plan de conception d'applications innovantes et conviviales
              </p>
            </div>
            <div className="award-2">
              <img
                src={pointdrawingsImage}
                alt="Person drawing mobile sketches"
                className="bio-image"
                title="Vous pouvez suivre tout le processus"
              />
              <h3 lang="fr">Vous pouvez suivre tout le processus</h3>
              <p lang="fr">
                Exploration des esquisses UI/UX – la base d'interfaces
                utilisateur intuitives et engageantes
              </p>
            </div>
            <div className="award-3">
              <img
                src={PhoneontableImage}
                alt="Phone on a table"
                className="bio-image"
                title="Utilisation des outils"
              />
              <h3 lang="fr">Utilisation des outils</h3>
              <p lang="fr">
                Utilisation d'outils comme Photoshop, Figma ou Marvel pour
                atteindre vos objectifs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section B: Progress Bars */}
      <section id="about-b" className="py-3 my-4">
        <div className="container">
          <h2 className="section-title text-white" lang="fr">
            Compétences techniques
          </h2>
          <div className="box-skills my-4">
            <div className="skill">
              <div className="skill-image">
                <img className="image" src={htmlLogo} alt="HTML Logo" />
                <div className="text-white">
                  <h3>HTML</h3>
                  <h4 lang="fr">
                    En tant que développeur web utilisant HTML, je peux :
                  </h4>
                  <ul lang="fr">
                    <li lang="fr">Balisage sémantique</li>
                    <li lang="fr">Intégration de multimédia</li>
                    <li lang="fr">Graphiques Canvas et SVG</li>
                    <li lang="fr">Améliorations de formulaire</li>
                    <li lang="fr">Applications web hors ligne</li>
                    <li lang="fr">Géolocalisation</li>
                    <li lang="fr">Travailleurs web et Websockets</li>
                    <li lang="fr">Design réactif</li>
                    <li lang="fr">Accessibilité</li>
                    <li lang="fr">SEO amélioré</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-image">
                <img className="image" src={cssLogo} alt="CSS Logo" />
                <div className="text-white">
                  <h3>CSS</h3>
                  <h4 lang="fr">
                    En tant que développeur web utilisant CSS, je peux :
                  </h4>
                  <ul lang="fr">
                    <li lang="fr">Créer des designs visuels éblouissants</li>
                    <li lang="fr">
                      Mettre en place des mises en page réactives
                    </li>
                    <li lang="fr">Utiliser une typographie personnalisée</li>
                    <li lang="fr">Réaliser des animations et transitions</li>
                    <li lang="fr">Utiliser des requêtes multimédias</li>
                    <li lang="fr">Utiliser des sélecteurs avancés</li>
                    <li lang="fr">
                      Utiliser la mise en page en boîte flexible (Flexbox)
                    </li>
                    <li lang="fr">
                      Utiliser la mise en page en grille (Grid Layout)
                    </li>
                    <li lang="fr">Créer des formes et effets personnalisés</li>
                    <li className="mt-2 mb-4 flex-center">
                      Frameworks et Bibliothèques or Outils:
                    </li>
                    <li>
                      <ul className="flex-center my-0 mb-4 icon-skills-css-1">
                        <li className="icon-skills-css">
                          <img src={gulpLogo} alt="Gulp icon" />
                        </li>
                        <li className="icon-skills-css">
                          <img src={sassLogo} alt="Sass icon" />
                        </li>
                        <li className="icon-skills-css">
                          <img
                            src={bootstrapLogo}
                            className="bootstrap-icon"
                            alt="Bootstrap icon"
                          />
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-image">
                <img
                  className="image"
                  src={javascriptLogo}
                  alt="JavaScript Logo"
                />
                <div className="text-white">
                  <h3>JavaScript</h3>
                  <h4 lang="fr">
                    En tant que développeur web utilisant JavaScript, je peux :
                  </h4>
                  <ul lang="fr">
                    <li lang="fr">
                      Créer une interface utilisateur interactive
                    </li>
                    <li lang="fr">Mettre en œuvre la validation côté client</li>
                    <li lang="fr">Gérer les événements utilisateur</li>
                    <li lang="fr">Utiliser les API des navigateurs</li>
                    <li lang="fr">
                      Développer des applications monopage (SPA)
                    </li>
                    <li lang="fr">Optimiser les performances</li>
                    <li lang="fr">Gérer les opérations asynchrones</li>
                    <li lang="fr">
                      Rester à jour avec les nouvelles fonctionnalités
                    </li>
                    <li className="mt-3 mb-4 flex-center">
                      Frameworks et Bibliothèques or Outils:
                    </li>
                    <li>
                      <ul className="flex-center my-0 icon-skills-js">
                        <li className="icon-skills-js">
                          <img src={githubLogo} alt="GitHub icon" />
                        </li>
                        <li className="icon-skills-js">
                          <img src={mongodbLogo} alt="MongoDB icon" />
                        </li>
                        <li className="icon-skills-js">
                          <img src={reactLogo} alt="React icon" />
                        </li>
                        <li className="icon-skills-js">
                          <img src={webpackLogo} alt="Webpack icon" />
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section D: Engagements */}
      <section id="about-d" className="py-4 my-4 bg-dark">
        <div className="container">
          <h2 className="section-title" lang="fr">
            Mon Engagement
          </h2>
          <p className="lead text-center" lang="fr">
            Pendant que je construis mon portfolio, voici ce que vous pouvez
            attendre en travaillant avec moi :
          </p>
          <div className="engagements mx-3">
            <div className="engagement-item">
              <h4 lang="fr">Qualité avant tout</h4>
              <p lang="fr">
                Je suis dédié à fournir des designs de haute qualité,
                conviviaux, qui répondent à vos besoins et dépassent vos
                attentes.
              </p>
            </div>
            <div className="engagement-item">
              <h4 lang="fr">Approche centrée sur le client</h4>
              <p lang="fr">
                Votre vision est ma priorité. Je travaille en étroite
                collaboration avec les clients pour m'assurer que le produit
                final s'aligne parfaitement avec leurs objectifs.
              </p>
            </div>
            <div className="engagement-item">
              <h4 lang="fr">Apprentissage continu</h4>
              <p lang="fr">
                En tant que débutant passionné, j'apprends toujours et applique
                les dernières tendances et technologies à mon travail.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
