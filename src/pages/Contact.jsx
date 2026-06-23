function Contact() {
  return (
    <section className="contact-page">

      <h1>Contact📲</h1>

      <p className="contact-intro">
        Please feel free to connect with me!
      </p>

      <div className="social-links">

        <div className="social-item">

          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
          />

          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com/in/michael-schaar"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/michael-schaar
            </a>
          </p>

        </div>

        <div className="social-item">

          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub"
          />

          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/MichaelSchaar"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/MichaelSchaar
            </a>
          </p>

        </div>

      </div>

    </section>
  );
}

export default Contact;