function Contact() {
  return (
    <section className="contact-section" id="contact">
      <p className="eyebrow">LET'S CONNECT</p>

      <div className="contact-grid">
        <h2>
          Let's build
          <br />
          something useful.
        </h2>

        <div className="contact-content">
          <p>
            I'm open to opportunities across data, artificial intelligence
            and technology, particularly roles where I can solve real-world
            problems and continue developing technically.
          </p>

          <a href="mailto:leteisha.hall@hotmail.co.uk" className="contact-link">
            Get in touch <span>↗</span>
          </a>
          <div className="contact-socials">
            <a
              href="https://www.linkedin.com/in/leteishahall"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/Leteishah"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact