import surfPhoto from "../assets/surfboard.jpg";

function About() {
  return (
    <section className="about-page">
      <h1>About Me📖</h1>

      <div className="about-content">
        <img
          className="about-image"
          src={surfPhoto}
          alt="Michael Schaar holding a surfboard"
        />

        <div className="about-text">
          <h2>Building thoughtful technology through data, design, and usability.</h2>

          <p>
            I am a 2025 graduate from UC San Diego with a Bachelor&apos;s of Science
            in Cognitive Science specializing in Machine Learning and Neural
            Computation, along with a minor in Design.
          </p>

          <p>
            My interests lie at the intersection of machine learning, data science,
            UX/UI design, and frontend development. I enjoy building projects
            that are both technically meaningful and easy to use, with a strong focus on usability and human-centered design.
          </p>

          <p>
            Outside of technology, I enjoy the outdoors and participate in surfing, fishing, 
            diving, traveling, and exploring whenever I get the opportunity to.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;