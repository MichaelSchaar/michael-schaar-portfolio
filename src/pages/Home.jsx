import { Link } from "react-router-dom";
import profilePic from "../assets/MichaelGradPhotos-21.jpg";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
            <div className="hero-image">
                <img src={profilePic} alt="Michael Schaar" />
            </div>

            <div className="hero-text">
                <p className="eyebrow">
                    Machine Learning • Data Science • UX/UI Design • Product Design
                </p>

                <h1>Hi, I'm Michael Schaar 👋</h1>

                <p className="intro">
                    I build human-centered technical projects that combine machine learning,
                    data science, UX research, and frontend development.
                </p>

                <p className="location">
                    📍 Based in San Diego, California
                </p>
            </div>

            <div className="buttons">
                <Link to="/projects">View Projects</Link>
                <Link to="/contact" className="secondary">Contact Me</Link>
            </div>

        </div>
    </section>

      <section id="projects" className="projects">
        <h2>Featured Projects</h2>

        <div className="project-grid">
          <Link to="/projects#ocr" className="card-link">
            <article className="card">
                <h3>Optical Character Recognition Using CRF and Auto-Context CRF Models</h3>
                <p>
                    Compared CRF and Auto-Context CRF models to evaluate how contextual information influences optical character recognition performance.
                </p>
                <span>Machine Learning • Structured Prediction • CRF • OCR</span>
            </article>
          </Link>

          <Link to="/projects#reworded" className="card-link">
            <article className="card">
                <h3>ReWorded: A BCI Project</h3>
                <p>
                    Evaluated whether EEG signals associated with the N400 response could support real-time word recognition and classification of real words versus non-words.
                </p>
                <span>Brain-Computer Interfaces • Machine Learning • EEG • ERPs (N400)</span>
            </article>
          </Link>

          <Link to="/projects#pivotour" className="card-link">
            <article className="card">
                <h3>Pivotour Startup Project</h3>
                <p>
                    A travel startup concept that helps travelers transform long airport layovers into personalized local experiences through curated tours and itinerary planning.
                </p>
                <span>Startup Design • Entrepreneurship • Figma • Prototyping</span>
            </article>
          </Link>

          <Link to="/projects#portfolio-ai" className="card-link">
            <article className="card">
                <h3>Portfolio.AI an AI-Powered Portfolio Builder</h3>
                <p>
                    An AI-powered platform that helps designers create personalized portfolios through automated design inspiration, content organization, and layout recommendations.
                </p>
                <span>UX/UI Design • AI-Assisted Design • Prototyping • Figma</span>
            </article>
          </Link>

         </div>
        </section>

        <section id="contact" className="contact">
            <h2>Let’s Connect</h2>

                <p>
                    LinkedIn:{" "}
                    <a
                        href="https://linkedin.com/in/michael-schaar"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        linkedin.com/in/michael-schaar
                    </a>
                </p>

                <p>
                    GitHub:{" "}
                    <a
                        href="https://github.com/MichaelSchaar"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        github.com/MichaelSchaar
                    </a>
                </p>
                
      </section>
    </>
  );
}

export default Home;