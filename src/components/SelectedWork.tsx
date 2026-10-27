import { Link } from 'react-router-dom'

function SelectedWork() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-heading">
        <p>SELECTED WORK</p>
        <span>01</span>
      </div>

      {/* PROJECT 01 */}
      <article className="featured-project">
        <div className="project-visual project-visual-image">
          <span>01</span>

          <img
            src="/images/hydraulic-dashboard.png"
            alt="Hydraulic digital twin dashboard showing simulation controls and machine learning fault prediction"
          />
        </div>

        <div className="project-content">
          <p className="project-category">
            MSc ARTIFICIAL INTELLIGENCE · DIGITAL TWIN · MACHINE LEARNING
          </p>

          <h2>
            AI-Enabled Digital Twin
            <br />
            for Hydraulic Fault Detection
          </h2>

          <p className="project-description">
            An AI-enabled digital twin developed to simulate hydraulic system
            behaviour, generate synthetic sensor data and train machine learning
            models to identify normal operation, leaks and valve-stuck faults.
          </p>

          <div className="project-tags">
            <span>Python</span>
            <span>Digital Twin</span>
            <span>Machine Learning</span>
            <span>Streamlit</span>
          </div>

          <Link to="/projects/hydraulic-ml" className="text-link">
            View case study <span>→</span>
          </Link>
        </div>
      </article>
    </section>
  )
}

export default SelectedWork