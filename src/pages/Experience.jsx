function Experience() {
  return (
    <section className="experience-page">
      <h1>Experience🎓</h1>

      <div className="experience-card">
        <div>
          <h2>Education: UC San Diego John Muir College</h2>
          <p>
            <strong>Major:</strong> Bachelor&apos;s of Science in Cognitive Science
            with a Specialization in Machine Learning and Neural Computation
          </p>
          <p>
            <strong>Minor:</strong> Design
          </p>
        </div>

        <img
          className="experience-image"
          src={`${import.meta.env.BASE_URL}ucsd-image.png`}
          alt="UC San Diego"
        />
      </div>

      <div className="experience-card skills-card">
        <h2>Technical Skills</h2>

        <div className="skills-grid">
          <div>
            <h3>Machine Learning & Data Science</h3>
            <p>Supervised Learning, Unsupervised Learning, Cross-Validation, Model Evaluation, Data Wrangling, Data Cleaning, Data Analysis, Data Visualization, Statistical Analysis, Exploratory Data Analysis (EDA)</p>
          </div>

          <div>
            <h3>Programming</h3>
            <p>Python, R, JavaScript, HTML/CSS, C</p>
          </div>

          <div>
            <h3>Frontend Development</h3>
            <p>React, Git/GitHub</p>
          </div>

          <div>
            <h3>ML & Data Science Libraries/Tools</h3>
            <p>Pandas, NumPy, scikit-learn, Matplotlib, Seaborn, ggplot2, dplyr, tidyr, Jupyter Notebook</p>
          </div>

          <div>
            <h3>Design & Research</h3>
            <p>UX/UI Design, User Research, User Testing, Human-Computer Interaction, Figma, Prototyping</p>
          </div>
        </div>
      </div>

      <div className="experience-card">
        <h2>Resume</h2>

        <div className="resume-content">

          <div className="resume-viewer">
            <iframe src={`${import.meta.env.BASE_URL}resume.pdf#page=1&view=FitH`} title="Michael Schaar Resume"></iframe>
          </div>

          <a className="download-resume" href={`${import.meta.env.BASE_URL}resume.pdf`} download>
            Download Resume
          </a>
        </div>
      </div>

      <div className="experience-card">
        <div>
          <h2>Achievements</h2>
          <p>• UC San Diego Provost Honors (2022)</p>
          <p>• Palomar College Dean&apos;s List (2018)</p>
        </div>
      </div>


      <div className="experience-card">
        <div>
          <h2>Extracurricular</h2>
          <p>UC San Diego Surf Team Member (2022–2025)</p>
        </div>

        <img
          className="experience-image"
          src={`${import.meta.env.BASE_URL}wave.png`}
          alt="Ocean wave"
        />
      </div>
    </section>
  );
}

export default Experience;