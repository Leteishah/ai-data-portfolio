import { Link } from 'react-router-dom'

function HydraulicProject() {
  return (
    <main className="case-study">
      <Link to="/#projects" className="case-back-link">
        <span>←</span> Back to Selected Work
      </Link>

      {/* PROJECT HERO */}
      <section className="case-hero">
        <p className="eyebrow">
          MSc ARTIFICIAL INTELLIGENCE · DIGITAL TWIN · MACHINE LEARNING
        </p>

        <h1>
          AI-Enabled Digital Twin
          <br />
          for Hydraulic Fault Detection
        </h1>

        <p className="case-intro">
          A digital twin and machine learning system developed to investigate
          whether synthetic sensor data can support reliable fault detection
          in a hydraulic subsystem.
        </p>

        <div className="case-meta">
          <div>
            <span>PROJECT</span>
            <p>MSc Artificial Intelligence</p>
          </div>

          <div>
            <span>FOCUS</span>
            <p>Fault Detection · Digital Twins</p>
          </div>

          <div>
            <span>TOOLS</span>
            <p>Python · Scikit-learn · Streamlit</p>
          </div>

          <div>
            <span>YEAR</span>
            <p>2026</p>
          </div>
        </div>
      </section>

      {/* 01 — OVERVIEW */}
      <section className="case-section">
        <div className="case-section-label">
          <span>01</span>
          <p>OVERVIEW</p>
        </div>

        <div className="case-section-content">
          <h2>
            Can synthetic data support
            reliable fault detection?
          </h2>

          <div className="case-text">
            <p>
              Industrial hydraulic systems can experience faults such as leaks
              and valve failures, but obtaining large quantities of labelled
              real-world fault data for machine learning can be difficult,
              expensive and potentially unsafe.
            </p>

            <p>
              This project investigated whether a simplified digital twin could
              provide an alternative. I developed a hydraulic subsystem
              simulation capable of generating synthetic pressure and flow
              sensor data under normal and faulty operating conditions.
            </p>

            <p>
              The generated time-series data was transformed through feature
              engineering and used to train machine learning models to classify
              normal operation, leak faults and valve-stuck actuator faults.
            </p>
          </div>

          <div className="research-question">
            <span>RESEARCH QUESTION</span>

            <p>
              Can synthetic data from a digital twin support reliable hydraulic
              fault detection?
            </p>
          </div>
        </div>
      </section>

      {/* 02 — DIGITAL TWIN */}
      <section className="case-section">
        <div className="case-section-label">
          <span>02</span>
          <p>DIGITAL TWIN</p>
        </div>

        <div className="case-section-content">
          <h2>
            Modelling the hydraulic
            system in software.
          </h2>

          <div className="case-text">
            <p>
              I developed a simplified digital twin of a hydraulic subsystem
              to model the relationship between pump operation, valve position,
              pressure and flow.
            </p>

            <p>
              Rather than attempting to reproduce every physical characteristic
              of a hydraulic system, the simulation focused on the key
              cause-and-effect relationships needed to generate observable
              fault behaviour.
            </p>

            <p>
              The system operates in discrete time steps, allowing pressure and
              flow to evolve dynamically as control inputs and fault conditions
              change.
            </p>
          </div>

<div className="twin-architecture">
  <div className="architecture-heading">
    <span>SYSTEM ARCHITECTURE</span>
    <p>Hydraulic subsystem simulation</p>
  </div>

  <div className="architecture-flow">

    <div className="architecture-item">
      <span>INPUT</span>
      <h3>Pump</h3>
      <p>Pump Speed</p>
    </div>

    <div className="architecture-arrow">→</div>

    <div className="architecture-item">
      <span>CONTROL</span>
      <h3>Control Valve</h3>
      <p>Valve Position</p>
    </div>

    <div className="architecture-arrow">→</div>

    <div className="architecture-item architecture-primary">
      <span>MODEL</span>
      <h3>Hydraulic System</h3>
      <p>Dynamic simulation</p>
    </div>

    <div className="architecture-arrow">→</div>

    <div className="architecture-item">
      <span>SENSORS</span>
      <h3>System Output</h3>
      <p>Pressure + Flow</p>
    </div>

  </div>

  <div className="digital-twin-output">
    <span>DIGITAL TWIN</span>
    <p>
      The subsystem is simulated over discrete time steps, generating
      pressure and flow sensor measurements as operating conditions change.
    </p>
  </div>
</div>
        </div>
      </section>
      {/* 03 — SYNTHETIC DATA */}
<section className="case-section">
  <div className="case-section-label">
    <span>03</span>
    <p>SYNTHETIC DATA</p>
  </div>

  <div className="case-section-content">
    <h2>
      Simulating faults to create
      labelled training data.
    </h2>

    <div className="case-text">
      <p>
        The digital twin was used to generate pressure and flow time-series
        data under three operating conditions: normal operation, a hydraulic
        leak and a valve-stuck actuator fault.
      </p>

      <p>
        Each simulation ran for 80 time steps, with 50 simulations generated
        for each operating condition. This produced a balanced dataset of
        150 simulation runs for machine learning.
      </p>
    </div>

  <div className="signal-comparison">
  <div className="signal-comparison-heading">
    <span>SIMULATED SENSOR RESPONSES</span>
    <p>Normal · Leak · Valve-Stuck</p>
  </div>

  <div className="signal-grid">

    <figure className="signal-card">
      <div className="signal-card-image">
        <img
          src="/images/hydraulic-normal-response.png"
          alt="Pressure and flow signals generated during normal hydraulic operation"
        />
      </div>

      <figcaption>
        <span>01</span>
        <div>
          <h3>Normal</h3>
          <p>
            Pressure rises and stabilises while flow remains within the
            expected operating range.
          </p>
        </div>
      </figcaption>
    </figure>

    <figure className="signal-card">
      <div className="signal-card-image">
        <img
          src="/images/hydraulic-leak-response.png"
          alt="Pressure and flow signals generated during a simulated hydraulic leak"
        />
      </div>

      <figcaption>
        <span>02</span>
        <div>
          <h3>Leak</h3>
          <p>
            The simulated leak produces a lower hydraulic response,
            creating a distinguishable pressure and flow pattern.
          </p>
        </div>
      </figcaption>
    </figure>

    <figure className="signal-card">
      <div className="signal-card-image">
        <img
          src="/images/hydraulic-valve-stuck-response.png"
          alt="Hydraulic signals showing valve command and effective valve position during a valve-stuck fault"
        />
      </div>

      <figcaption>
        <span>03</span>
        <div>
          <h3>Valve-Stuck</h3>
          <p>
            The commanded and effective valve positions diverge, making
            the actuator fault observable in the simulated response.
          </p>
        </div>
      </figcaption>
    </figure>

  </div>

  <p className="signal-comparison-caption">
    Example outputs from the hydraulic digital twin showing how different
    operating conditions produce distinct simulated sensor behaviour.
  </p>
</div>


    <div className="fault-grid">
      <div className="fault-card">
        <span>01</span>
        <h3>Normal</h3>
        <p>
          The valve responds normally to control commands and the hydraulic
          system operates without an introduced fault.
        </p>
      </div>

      <div className="fault-card">
        <span>02</span>
        <h3>Leak</h3>
        <p>
          A simulated loss of hydraulic energy reduces the achievable
          pressure and flow as leak severity increases.
        </p>
      </div>

      <div className="fault-card">
        <span>03</span>
        <h3>Valve-Stuck</h3>
        <p>
          The effective valve position becomes fixed, preventing the actuator
          from responding to subsequent control commands.
        </p>
      </div>
    </div>
    <div className="iteration-block">
  <p className="iteration-label">EXPERIMENT ITERATION</p>

  <div className="iteration-grid">
    <div className="iteration-item">
      <span>V1</span>
      <h3>Initial Dataset</h3>
      <p>
        The first dataset used steady pump and valve commands throughout
        each simulation run.
      </p>
    </div>

    <div className="iteration-arrow">→</div>

    <div className="iteration-item">
      <span>LIMITATION</span>
      <h3>Fault Observability</h3>
      <p>
        Without a change in valve command, normal and valve-stuck behaviour
        could appear similar, making the actuator fault difficult to identify.
      </p>
    </div>

    <div className="iteration-arrow">→</div>

    <div className="iteration-item">
      <span>V2</span>
      <h3>Improved Dataset</h3>
      <p>
        A controlled valve change at t = 40 and Gaussian sensor noise were
        introduced to make actuator behaviour more observable and the
        simulated measurements more realistic.
      </p>
    </div>
  </div>
</div>
  </div>
</section>
{/* 04 — FEATURE ENGINEERING */}
<section className="case-section">
  <div className="case-section-label">
    <span>04</span>
    <p>FEATURE ENGINEERING</p>
  </div>

  <div className="case-section-content">
    <h2>
      Turning sensor signals
      into machine learning features.
    </h2>

    <div className="case-text">
      <p>
        Each simulation produced a time series of pressure and flow
        measurements. To prepare this data for classification, I transformed
        each simulation run into a fixed-length feature vector.
      </p>

      <p>
        The features were designed to capture both the overall magnitude of
        the sensor signals and how the hydraulic system responded over time.
        This allowed different types of fault behaviour to be represented
        numerically for the machine learning models.
      </p>
    </div>

    <div className="feature-groups">
      <div className="feature-group">
        <span>STATIC FEATURES</span>

        <h3>Signal behaviour</h3>

        <div className="feature-list">
          <p>Mean pressure & flow</p>
          <p>Standard deviation</p>
          <p>Minimum & maximum</p>
          <p>Signal range</p>
        </div>
      </div>

      <div className="feature-group">
        <span>DYNAMIC FEATURES</span>

        <h3>System response</h3>

        <div className="feature-list">
          <p>Early vs late response</p>
          <p>Change after excitation</p>
          <p>Pressure-flow relationship</p>
          <p>Signal correlation</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* 05 — MACHINE LEARNING */}
<section className="case-section">
  <div className="case-section-label">
    <span>05</span>
    <p>MACHINE LEARNING</p>
  </div>

  <div className="case-section-content">
    <h2>
      Comparing linear and
      nonlinear classifiers.
    </h2>

    <div className="case-text">
      <p>
        The engineered features were used to train machine learning models
        to classify each simulation as normal operation, a leak or a
        valve-stuck fault.
      </p>

      <p>
        I compared Logistic Regression as an interpretable linear baseline
        with Random Forest as a nonlinear model capable of capturing more
        complex relationships between the hydraulic features.
      </p>
    </div>

    <div className="model-grid">
      <div className="model-card">
        <span>MODEL 01</span>

        <h3>Logistic Regression</h3>

        <p>
          An interpretable linear baseline used to determine whether the
          engineered features provided sufficient separation between the
          three operating conditions.
        </p>

        <div className="model-detail">
          <span>PREPROCESSING</span>
          <p>Feature scaling</p>
        </div>
      </div>

      <div className="model-card">
        <span>MODEL 02</span>

        <h3>Random Forest</h3>

        <p>
          A nonlinear ensemble model used to investigate whether more complex
          relationships between the engineered features could improve fault
          classification.
        </p>

        <div className="model-detail">
          <span>PREPROCESSING</span>
          <p>No feature scaling required</p>
        </div>
      </div>
    </div>

    <div className="evaluation-block">
      <span>EVALUATION</span>

      <div className="evaluation-metrics">
        <p>Accuracy</p>
        <p>Precision</p>
        <p>Recall</p>
        <p>F1 Score</p>
      </div>
    </div>
  </div>
</section>
{/* 06 — RESULTS */}
<section className="case-section">
  <div className="case-section-label">
    <span>06</span>
    <p>RESULTS</p>
  </div>

  <div className="case-section-content">
    <h2>
      Strong fault classification
      in the simulated environment.
    </h2>

    <div className="case-text">
      <p>
        Logistic Regression produced the strongest overall performance,
        correctly classifying every sample in the test dataset across normal,
        leak and valve-stuck operating conditions.
      </p>

      <p>
        Cross-validation remained consistently high, suggesting that the
        result was not dependent on a single train-test split. Random Forest
        also performed strongly, but produced a small number of
        misclassifications.
      </p>
    </div>

    <div className="results-grid">
      <div className="result-card result-highlight">
        <span>TEST ACCURACY</span>
        <strong>100%</strong>
        <p>Logistic Regression</p>
      </div>

      <div className="result-card">
        <span>CROSS-VALIDATION</span>
        <strong>≈98%</strong>
        <p>Average accuracy</p>
      </div>

      <div className="result-card">
        <span>CV RANGE</span>
        <strong>96.7–100%</strong>
        <p>Across validation folds</p>
      </div>
    </div>

<div className="model-comparison">
  <div className="model-comparison-heading">
    <span>MODEL EVALUATION</span>
    <p>Confusion Matrix Comparison</p>
  </div>

  <div className="model-comparison-grid">

    <figure className="model-result">
      <div className="model-result-heading">
        <span>MODEL 01</span>
        <h3>Logistic Regression</h3>
      </div>

      <div className="model-result-image">
        <img
          src="/images/hydraulic-logistic-confusion-matrix.png"
          alt="Logistic Regression confusion matrix showing all hydraulic fault test samples correctly classified"
        />
      </div>

      <figcaption>
        <strong>38 / 38 correct</strong>
        <p>
          All leak, normal and valve-stuck test samples were
          correctly classified.
        </p>
      </figcaption>
    </figure>

    <figure className="model-result">
      <div className="model-result-heading">
        <span>MODEL 02</span>
        <h3>Random Forest</h3>
      </div>

      <div className="model-result-image">
        <img
          src="/images/hydraulic-random-forest-confusion-matrix.png"
          alt="Random Forest confusion matrix showing one normal hydraulic sample incorrectly classified as a leak"
        />
      </div>

      <figcaption>
        <strong>37 / 38 correct</strong>
        <p>
          One normal sample was incorrectly classified as a leak;
          all leak and valve-stuck samples were correctly classified.
        </p>
      </figcaption>
    </figure>

  </div>
</div>

    <div className="result-insight">
      <span>KEY FINDING</span>

      <p>
        The more complex Random Forest model did not outperform Logistic
        Regression, suggesting that the engineered feature space was largely
        linearly separable under the controlled simulation conditions.
      </p>
    </div>
  </div>
</section>
{/* 07 — INTERACTIVE DIGITAL TWIN */}
<section className="case-section">
  <div className="case-section-label">
    <span>07</span>
    <p>INTERACTIVE TWIN</p>
  </div>

  <div className="case-section-content">
    <h2>
      Bringing simulation and
      prediction together.
    </h2>

    <div className="case-text">
      <p>
        I integrated the trained machine learning model into an interactive
        Streamlit application, bringing the hydraulic simulation and fault
        classification workflow into a single interface.
      </p>

      <p>
        The application provides a practical demonstration of the digital
        twin, allowing simulated hydraulic behaviour to be explored while
        displaying the model's predicted operating condition.
      </p>
    </div>

<div className="dashboard-preview">
  <span>INTERACTIVE APPLICATION</span>

  <div className="dashboard-image">
    <img
      src="/images/hydraulic-dashboard.png"
      alt="Streamlit hydraulic digital twin dashboard showing simulation controls, fault prediction, class probabilities and simulated pressure and flow signals"
    />
  </div>

  <p className="dashboard-caption">
    Interactive Streamlit application combining hydraulic simulation,
    feature extraction and machine learning fault prediction.
  </p>
</div>

    <div className="dashboard-features">
      <div>
        <span>01</span>
        <p>Run hydraulic simulations</p>
      </div>

      <div>
        <span>02</span>
        <p>Observe system behaviour</p>
      </div>

      <div>
        <span>03</span>
        <p>View fault predictions</p>
      </div>
    </div>
  </div>
</section>
{/* 08 — LIMITATIONS & NEXT STEPS */}
<section className="case-section">
  <div className="case-section-label">
    <span>08</span>
    <p>LIMITATIONS</p>
  </div>

  <div className="case-section-content">
    <h2>
      From controlled simulation
      to real-world validation.
    </h2>

    <div className="case-text">
      <p>
        The results demonstrate the potential of synthetic data for hydraulic
        fault detection, but they were produced within a controlled simulation
        environment using a simplified representation of a hydraulic system.
      </p>

      <p>
        Real hydraulic systems contain greater variability, uncertainty and
        complexity. The next stage would therefore be to validate the approach
        using real operational sensor data and progressively increase the
        fidelity of the digital twin.
      </p>
    </div>

    <div className="limitations-grid">
      <div className="limitation-item">
        <span>01</span>
        <h3>Simplified Model</h3>
        <p>
          The digital twin captures key hydraulic relationships rather than
          the full physical complexity of an industrial hydraulic system.
        </p>
      </div>

      <div className="limitation-item">
        <span>02</span>
        <h3>Synthetic Data</h3>
        <p>
          Training and testing were performed using simulation-generated data
          rather than experimental or field sensor data.
        </p>
      </div>

      <div className="limitation-item">
        <span>03</span>
        <h3>Fault Scope</h3>
        <p>
          The study focused on normal operation, leak faults and valve-stuck
          faults rather than the wider range of faults found in real systems.
        </p>
      </div>
    </div>

    <div className="next-steps">
      <span>NEXT STEPS</span>

      <p>
        Validate the framework using real hydraulic sensor data, expand the
        range and complexity of simulated faults, and investigate how the
        digital twin performs under more realistic operating variability.
      </p>
    </div>
  </div>
</section>
<div className="case-footer-navigation">
  <Link to="/#projects" className="case-back-link">
    <span>←</span> Back to Selected Work
  </Link>
</div>



    </main>
  )
}

export default HydraulicProject