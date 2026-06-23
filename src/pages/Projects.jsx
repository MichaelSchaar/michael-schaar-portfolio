import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import advanced_ml_researchPaper from "../assets/COGS185_Final_Research_Project.pdf";
import bci_presentation from "../assets/COGS 189 - Powerpoint_Presentation.pdf";
import supervised_ml_researchPaper from "../assets/FINAL PROJECT ML.pdf";
import data_science_final from "../assets/FinalProject_group010-Fa22.pdf";
import hci_project from "../assets/P5-project-team-44-2.pdf";
import cyborgs_project from "../assets/cyborgs_project.pdf";
import pivotour_final from "../assets/A5 Presentation.pdf";
import portfolio_final from "../assets/Final Stage.pdf";

import ocrCharacter from "../assets/OCRCharacterExample.png";
import crfResults from "../assets/CRFResultsGraph.png";
import bciselfie from "../assets/bciselfie.jpg";
import bcidiagram from "../assets/bcidiagram.png";
import extractingresults from "../assets/extractingresults.png";
import extractingcentroids from "../assets/extractingcentroids.png";
import modelcomparison from "../assets/modelcomparison.png";
import winequality from "../assets/winequality.png";
import newyorkplot from "../assets/newyorkplot.png";
import texasplot from "../assets/texasplot.png";
import implant_design from "../assets/implant_design.png";
import implant_function from "../assets/implant_function.png";
import Discovering_need from "../assets/Discovering_need.png";
import current_value_flow from "../assets/current_value_flow.png";
import figma_prototype from "../assets/figma_prototype.png";
import Landing_page from "../assets/Landing_page.png";
import Portfolio_hero from "../assets/Portfolio_hero.png";
import Moodboard from "../assets/Moodboard.png";
import Content_page from "../assets/Content_page.png";
import Originality from "../assets/Originality.png";
import Mid_fidelity from "../assets/Mid_fidelity.png";
import Styleguide from "../assets/Styleguide.png";
import kiosk from "../assets/kiosk.jpg";
import User_testing from "../assets/User_testing.png";


function Projects() {
  const [openSection, setOpenSection] = useState(null);
  const location = useLocation();

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  useEffect(() => {
    const hash = location.hash;

    if (hash === "#ocr" || hash === "#reworded") {
      setOpenSection("ml");
    }

    if (hash === "#pivotour" || hash === "#portfolio-ai") {
      setOpenSection("ux");
    }

    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  }, [location]);

  
  return (
    <section className="projects-page">
      <h1>Projects✏️</h1>

      <div className="project-accordion">
        <div className="project-section">
          <button onClick={() => toggleSection("ml")} className="project-toggle">
            Machine Learning & Data Science
            <span>{openSection === "ml" ? "−" : "+"}</span>
          </button>

          {openSection === "ml" && (
            <div className="project-list">
              <div id="ocr" className="project-item">
                <h3>From Pixels to Predictions: A Comparative Study of CRF and Auto-context CRF Models Under Varying Sliding Window Contexts</h3>
                <p>
                  This project investigates how contextual information impacts the accuracy of Optical Character Recognition (OCR) using structured prediction models. 
                  Specifically, it compares a baseline Conditional Random Field (CRF) model with an Auto-context CRF model across varying context window sizes and dataset splits.
                </p>
                <p className="project-tools">Machine Learning • Structured Prediction • CRF • OCR</p>

                <div className="project-buttons">
                  <a
                    href={advanced_ml_researchPaper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                  </a>

                  <a
                    href="https://github.com/MichaelSchaar/From-Pixels-to-Predictions-Advanced-ML-Methods-Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link secondary"
                  >
                    GitHub
                  </a>
                </div>

                <div className="project-images">
                  <div className="project-figure">
                    <img
                      src={ocrCharacter}
                      alt="OCR Character Example"
                      className="project-image"
                    />
                    <p className="figure-caption">
                      Figure 1: An example OCR character used for structured character recognition.
                    </p>
                  </div>

                  <div className="project-figure">
                    <img
                      src={crfResults}
                      alt="CRF vs Auto-Context CRF Results"
                      className="project-image"
                    />
                    <p className="figure-caption">
                      Figure 2: Character level accuracy comparison between CRF and Auto-Context CRF models across varying sliding-window context sizes.
                    </p>
                  </div>
                </div>
              </div>
                  
              <div id="reworded" className="project-item">
                <h3>ReWorded: A BCI Project</h3>
                <p>
                  Our objective is to investigate how Event Related Potentials (ERPs), particularly the N400 component, can be used to facilitate real-time word recognition. 
                  We aim to identify the optimal frequency and electrode placement that balances user comfort with strong neural responses for language processing. 
                  We intend to determine whether distinct EEG waveform characteristics, specifically those related to the N400, can effectively differentiate between real words and non-words. 
                  This comprehensive approach will enhance our understanding of cognitive processing during language comprehension and assess the effectiveness of machine learning models in capturing these differences, 
                  ultimately finding the rate at which the brain most effectively processes and distinguishes letters and words with minimal noise.
                </p>
                <p className="project-tools">Brain-Computer Interfaces • Machine Learning • EEG • ERPs (N400)</p>
                <div className="project-buttons">
                  <a
                    href={bci_presentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                  </a>

                  <a
                    href="https://github.com/MichaelSchaar/ReWorded-Brain-Computer-Interfaces-Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link secondary"
                  >
                    GitHub
                  </a>
                </div>

                <div className="project-images">
                  <div className="project-figure">
                    <img
                      src={bciselfie}
                      alt="OpenBCI Cap"
                      className="project-image"
                    />
                    <p className="figure-caption">
                      Figure 1: Wearing an EEG cap to collect and record neural signals used to investigate real-time word recognition using Event-Related Potentials (ERPs). 
                    </p>
                  </div>

                  <div className="project-figure">
                    <img
                      src={bcidiagram}
                      alt="EEG Electrode Placement"
                      className="project-image"
                    />
                    <p className="figure-caption">
                      Figure 2: EEG electrode placement used to record neural activity associated with language processing, memory, attention, and word recognition during the 
                      experiment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="project-item">
                <h3>Tidyclust by Team Tibble</h3>
                <p>
                  An R-based clustering Analysis with Tidyclust. Using the Penguins data set, we explore tidyclusts' k-means clustering algorithm and how it can help us gain a better
                  understanding of the average or typical female bill attributes as they relate to certain species of penguin.
                </p>
                <p className="project-tools">R • Tidyclust • ggplot2 • Data Analysis</p>
                <div className="project-buttons">
                  <a
                    href={`${import.meta.env.BASE_URL}Team-Tibble-Presentation.html`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                  </a>

                  <a
                    href="https://github.com/MichaelSchaar/Tidyclust-by-Team-Tibble-R-Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link secondary"
                  >
                    GitHub
                  </a>
                </div>

                <div className="project-images">
                  <div className="project-figure">
                    <img
                      src={extractingresults}
                      alt="Extracting Results"
                      className="project-image"
                    />
                    <p className="figure-caption">
                      Figure 1: Penguins grouped into clusters based on similarities in bill length and bill depth using the tidyclust framework. 
                      Each color represents a different cluster identified by the model. 
                    </p>
                  </div>

                  <div className="project-figure">
                    <img
                      src={extractingcentroids}
                      alt="Extracting Centroids"
                      className="project-image"
                    />
                    <p className="figure-caption">
                      Figure 2: Cluster centroids identified by the tidyclust model. 
                      The centroid of each cluster represents the typical bill length and bill depth of penguins within each group.
                    </p>
                  </div>
                </div>
              </div>

              <div className="project-item">
                <h3>Comparative Evaluation of Classifiers on UCI Datasets: A Cross-Validation Approach</h3>
                <p>
                  This study investigates the comparative performance of three widely used machine learning classifiers known as logistic regression, support vector machines (SVMs), and random forest across three datasets from the UCI Machine Learning Repository. 
                  Datasets include: Iris, Breast Cancer Wisconsin, and Wine Quality. Following the methodology proposed by Caruana and Niculescu-Mizil (2006) I employed a structured framework involving cross-validation with varied partition splits (20/80, 50/50, and 80/20) and trials,
                  we evaluate classifier accuracy and hyperparameter optimization. Random forest consistently performed best for complex datasets, while SVMs excelled on linearly separable data, achieving perfect accuracy on the Iris dataset. Feature importance visualizations provide insights into influential predictors. 
                  Our results validate the utility of ensemble models like random forest for complex tasks while highlighting the efficiency of simpler models for structured data. Following practices inspired by empirical studies on machine learning algorithms, the findings provide insights into the relative strengths and weaknesses of each method and their applicability to real-world problems.
                </p>
                <p className="project-tools">Supervised Machine Learning • Classifier Comparison • Cross-Validation • Predictive Modeling</p>
                <div className="project-buttons">
                  <a
                    href={supervised_ml_researchPaper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                  </a>

                  <a
                    href="https://github.com/MichaelSchaar/Comparative-Evaluation-of-Classifiers-Supervised-ML-Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link secondary"
                  >
                    GitHub
                  </a>
                </div>

                <div className="project-images">
                  <div className="project-figure">
                    <img
                      src={modelcomparison}
                      alt="Model Comparison"
                      className="project-image"
                    />
                    <p className="figure-caption">
                      Figure 1: Comparison of Random Forest, Support Vector Machine (SVM), and Logistic Regression performance across three benchmark datasets. 
                      Results highlight how classifier effectiveness varies depending on dataset complexity and structure.
                    </p>
                  </div>

                  <div className="project-figure">
                    <img
                      src={winequality}
                      alt="Wine Quality"
                      className="project-image"
                    />
                    <p className="figure-caption">
                      Figure 2: Random Forest feature importance analysis for the Wine Quality dataset. 
                      Alcohol content, density, and volatile acidity emerged as the most influential predictors of wine quality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="project-item">
                <h3>Analyzing The Relationship between Mean Income & EV Population</h3>
                <p>
                  This project focuses on the relationship between the registration of electric and hybrid vehicles and house income in the states of New York and Texas. 
                  We want to determine if there is a relationship between house income and the number of electric and hybrid vehicles being registered. 
                  If a higher income is associated with more vehicle registrations we hope to find a positive correlation between income and vehicle registration population, 
                  and vice-versa that a lower income is associated with a lower population of registered electic and hybrid vehicles. We also want to see the differences between these two states through the use of other interesting observations.
                </p>
                <p className="project-tools">Data Science • Regression Analysis • Electric Vehicle Analytics • Data Visualization</p>
                <div className="project-buttons">
                  <a
                    href={data_science_final}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                  </a>

                  <a
                    href="https://github.com/MichaelSchaar/Analyzing-the-Relationship-Between-Mean-Income-EV-Population-Pandas-Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link secondary"
                  >
                    GitHub
                  </a>
                </div>

                <div className="project-images">
                  <div className="project-figure">
                    <img
                      src={newyorkplot}
                      alt="New York Plot"
                      className="project-image"
                    />
                    <p className="figure-caption">
                      Figure 1: Relationship between household income and electric vehicle registrations across New York ZIP codes. 
                      The regression line suggests a positive correlation, indicating that higher-income areas generally have larger EV populations.
                    </p>
                  </div>

                  <div className="project-figure">
                    <img
                      src={texasplot}
                      alt="Texas Plot"
                      className="project-image"
                    />
                    <p className="figure-caption">
                      Figure 2: Relationship between household income and electric vehicle registrations across Texas ZIP codes. 
                      Similar to New York, higher-income areas tended to have greater EV populations, however the strength of the relationship slightly differed between states.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="project-section">
          <button onClick={() => toggleSection("ux")} className="project-toggle">
            UX/UI Design
            <span>{openSection === "ux" ? "−" : "+"}</span>
          </button>

          {openSection === "ux" && (
            <div className="project-list">
              <div id="pivotour" className="project-item">
                <h3>Pivotour</h3>
                <p>
                  Pivotour is a startup concept designed to transform long airport layovers into personalized local travel experiences.
                  Through user research, competitive analysis, service design, branding, business modeling, and interactive prototyping, 
                  our team developed a platform that connects travelers with curated local tours tailored to their layover schedule. 
                  The project explored the intersection of UX design, entrepreneurship, and product strategy while addressing a common pain point experienced by travelers worldwide.
                </p>
                <p className="project-tools">Startup Design • Entrepreneurship • Figma • Prototyping</p>
                <div className="project-buttons">
                  <a
                    href={pivotour_final}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                  </a>

                  <a
                    href="https://www.figma.com/proto/DHrzTDc50dvpImakOzwMi6/COGS-122-PIVOTOUR?node-id=74-906&p=f&t=BzNfy5PMKTi2YIMA-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=74%3A906"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link secondary"
                  >
                    Figma 
                  </a>
                </div>

                <div className="project-images">
                  <div className="project-figure">
                    <img
                      src={Discovering_need}
                      alt="Discovering a Need"
                      className="project-image"
                    />
                    <p className="figure-caption">
                      Figure 1: Survey data collected to better understand traveler transportation preferences and opportunities for improving the layover experience.
                    </p>
                  </div>
                  <div className="project-figure">
                    <img
                      src={current_value_flow}
                      alt="Current Value Flow"
                      className="project-image"
                    />
                    <p className="figure-caption">
                      Figure 2: Value flow analysis highlighting the relationship between travelers, tour providers, and the Pivotour platform.
                    </p>
                  </div>
                  <div className="project-figure">
                    <img
                      src={figma_prototype}
                      alt="Figma Prototype"
                      className="project-image"
                    />
                    <p className="figure-caption">
                      Figure 3: High-fidelity Figma prototype of the Pivotour mobile app showcasing the end-to-end user journey, from discovering local tours to booking and managing personalized layover experiences.
                    </p>
                  </div>
                  <div className="project-figure">
                    <img
                      src={Landing_page}
                      alt="Landing Page"
                      className="project-image"
                    />
                    <p className="figure-caption">
                      Figure 4: A/B landing page test conducted to evaluate user engagement and identify the most effective design for attracting prospective users.
                    </p>
                  </div>
                </div>
              </div>

              <div id="portfolio-ai" className="project-item">
                <h3>Portfolio.AI</h3>
                <p>
                  Portfolio.AI is a concept for an AI-powered portfolio builder designed to help UX designers create personalized and professional online portfolios. 
                  We researched challenges designers face when building portfolios and developed features such as AI-assisted moodboards, typography recommendations, content organization tools, and originality analysis. 
                  The project explored how AI can support creativity while preserving individual design identity.
                </p>
                <p className="project-note">
                  Note: Unfortunately, the original Figma prototype for this project is no longer accessible because it was created under a former UC San Diego account that has since been deactivated.
                </p>
                <p className="project-tools">UX/UI Design • AI-Assisted Design • Prototyping • Figma</p>

                <div className="project-buttons">
                  <a
                    href={portfolio_final}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                  </a>
                </div>

                <div className="project-images">
                  <div className="project-figure">
                    <img
                      src={Portfolio_hero}
                      alt="Hero Image"
                      className="project-image"
                    />
                    <p className="figure-caption">
                      Figure 1: Final concept mockup showcasing the Portfolio.AI platform across desktop and tablet interfaces.
                    </p>
                  </div>
                  <div className="project-figure">
                    <img
                      src={Moodboard}
                      alt="Moodboard"
                      className="project-image"
                    />
                    <p className="figure-caption">
                      Figure 2: Moodboard generation feature that helps users explore visual styles, color palettes, and creative directions for their portfolio.
                    </p>
                  </div>
                  <div className="project-figure">
                    <img
                      src={Content_page}
                      alt="Content Page"
                      className="project-image"
                    />
                    <p className="figure-caption">
                      Figure 3: Content management feature that helps users organize portfolio projects, case studies, and personal information into a structured professional portfolio.
                    </p>
                  </div>
                  <div className="project-figure">
                    <img
                      src={Originality}
                      alt="Originality Checker"
                      className="project-image"
                    />
                    <p className="figure-caption">
                      Figure 4: Inspiration-driven layout builder and originality checker that allow users to analyze design references, identify preferred interface elements, and generate more personalized portfolio layouts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="project-item">
                <h3>EZ Gym Interactive Kiosk</h3>
                <p>
                  EZ Gym is a fitness application concept designed to help UCSD users create, manage, and track personalized workout routines. 
                  My team and I designed an interactive system that guides users through exercise selection, workout setup, and real-time performance tracking. 
                  The platform includes instructional exercise tutorials, rest timers, progress analytics, and workout history to help users monitor their fitness goals. 
                  We also explored sensor-based repetition tracking, allowing workout reps to be recorded automatically while providing manual controls when needed. 
                  Additional features such as leaderboards, performance statistics, and gym navigation were incorporated to create a more engaging, unique and user-friendly fitness experience.
                </p>
                <p className="project-note">
                  Note: Unfortunately, the project slides for this project are no longer accessible because they were created under a former UC San Diego account that has since been deactivated.
                </p>
                <p className="project-tools">UX/UI Design • User Research • Gamification • Figma</p>
                <div className="project-buttons">
                  <a
                    href="https://www.figma.com/proto/NSJayHFK87ORys0gDHkoDN/Hi-fi--Kiosk-Prototype?node-id=2-2&starting-point-node-id=2%3A2&t=qMNc98ef3rseBepF-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link secondary"
                  >
                    Figma 
                  </a>
                </div>

                <div className="project-images">
                  <div className="project-figure">
                    <img
                      src={Mid_fidelity}
                      alt="Mid Fidelity Prototype"
                      className="project-image"
                    />
                    <p className="figure-caption">
                      Figure 1: Mid-fidelity wireframe illustrating the end-to-end user flow, from workout setup and exercise tracking to progress analytics and personalized recommendations.
                    </p>
                  </div>
                  <div className="project-figure">
                    <img
                      src={Styleguide}
                      alt="Style Guide"
                      className="project-image"
                    />
                    <p className="figure-caption">
                      Figure 2: Style guide defining the visual identity of EZ Gym, including color palettes, typography, branding, icons, and interface components.
                    </p>
                  </div>
                  <div className="project-figure">
                    <img
                      src={kiosk}
                      alt="Kiosk"
                      className="project-image"
                    />
                    <p className="figure-caption">
                      Figure 3: Physical EZ Gym kiosk prototype developed to demonstrate the intended user experience and explore how members could interact with the system in a gym environment.
                    </p>
                  </div>
                  <div className="project-figure">
                    <img
                      src={User_testing}
                      alt="User Testing"
                      className="project-image"
                    />
                    <p className="figure-caption">
                      Figure 4: User testing session conducted to evaluate the EZ Gym kiosk interface, gather feedback, and identify opportunities for improving the user experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="project-section">
          <button onClick={() => toggleSection("hci")} className="project-toggle">
            Human-Computer Interaction (HCI)
            <span>{openSection === "hci" ? "−" : "+"}</span>
          </button>

          {openSection === "hci" && (
            <div className="project-list">

              <div className="project-item">
                <h3>Assisting Blind People to Orient and Commute</h3>
                <p>
                  This project explored how assistive technology can enhance independent navigation for blind individuals. 
                  Our team designed a conceptual cochlear implant system that combines GPS-guided voice navigation with proximity-based object detection to provide real-time environmental awareness and route guidance. 
                  Through user-centered research, accessibility analysis, and iterative design, we developed a solution aimed at improving mobility, safety, and overall quality of life for visually impaired users. 
                </p>
                <p className="project-tools">HCI • Assistive Technology • Inclusive Design • Human-Centered Design</p>
                <div className="project-buttons">
                  <a
                    href={cyborgs_project}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                  </a>
                </div>

                <div className="project-images">
                  <div className="project-figure">
                    <img
                      src={implant_design}
                      alt="Model Comparison"
                      className="project-image"
                    />
                    <p className="figure-caption">
                      Figure 1: Prototype concept for an enhanced cochlear implant that combines GPS-assisted navigation 
                      with radius-based object detection to provide real-time route guidance, obstacle awareness, and 
                      environmental feedback for blind users.
                    </p>
                  </div>

                  <div className="project-figure">
                    <img
                      src={implant_function}
                      alt="Model Comparison"
                      className="project-image"
                    />
                    <p className="figure-caption">
                      Figure 2: Visualization of the dual-radius detection system. 
                      A smaller radius (r) identifies nearby obstacles such as pedestrians, vegetation, etc. 
                      while a larger radius (R) detects distant hazards such as vehicles, poles, etc. providing real-time navigation guidance and route correction.
                    </p>
                  </div>
                </div>
              </div>

              <div className="project-item">
                <h3>Sensory-friendly Audio and Display Adaptability for Video Playback</h3>
                <p>
                  This project explored how sensory-friendly audio and display adaptations can improve the video playback experience for users with sensory sensitivities. 
                  Through a literature review and interviews with UCSD students, our team evaluated the effectiveness and social acceptability of features such as content 
                  warnings and automatic audio/visual adjustments. Findings highlighted the importance of personalization, user control, accessibility, and digital well-being when designing inclusive media experiences.
                </p>
                <p className="project-tools">HCI • User Research • Accessibility • Human-Centered Design</p>

                <div className="project-buttons">
                  <a
                    href={hci_project}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                  </a>
              </div>
            </div>
          </div>
          )}
      </div>
     </div>
    </section>
  );
}

export default Projects;