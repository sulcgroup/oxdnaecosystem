import React from "react";
import Link from "next/link";
import { DocIcon, ToolIcon, ToolsIcon } from "@/components/Icons";
import { HomePrimerRail } from "@/components/HomePrimerRail";
import { OxViewEmbed } from "@/components/OxViewEmbed";

const allAtomTradeoffs = [
  {
    stance: "Pro",
    detail:
      "Solution is atomistically detailed, capturing specific water/ion interactions and highly localized chemistry.",
  },
  {
    stance: "Pro",
    detail: "Depending on the choice of force fields, these models can be generalized for proteins, lipids, and other systems.",
  },
  {
    stance: "Pro",
    detail:
      "Can capture external forces and constraints more accurately than coarse-grained models."
  },
  {
    stance: "Con",
    detail:
      "Computationally very expensive, limiting simulations to small systems and much shorter timescales.",
  },
];

const coarseGrainedTradeoffs = [
  {
    stance: "Pro",
    detail:
      "Much faster computationally than an all-atom simulation, allowing for larger systems and longer timescales to be simulated.",
  },
  {
    stance: "Pro",
    detail:
      "With the right force field model, captures thermodynamics and mechanics very well."
  },
  {
    stance: "Con",
    detail:
      "Interaction potentials are limited, and cannot capture the full chemical diversity of nucleic acids, proteins, or small molecules.",
  },
  {
    stance: "Con",
    detail:
      "Force fields are parameterized for nucleic acids, and thus, cannot natively simulate arbitrary proteins or complex small-molecule systems (without modifications and validations).",
  },
];

const modelIngredients = [
  {
    title: "Configuration File",
    detail:
      "A description of the physical geometry, containing the 3D positions, velocities, and angular orientations of every nucleotide in the system. As an example, here's a simple conf file of an RNA 8-mer duplex: init.conf (https://github.com/lorenzo-rovigatti/oxDNA/blob/master/examples/RNA_DUPLEX_MELT/init.conf)zx",
  },
  {
    title: "Topology File",
    detail:
      "A description of the chemical sequence and connectivity, detailing what nucleotides are present, their bases (A, T, G, C, U), and which nucleotides are covalently bonded to each other. Following the same example, here's a simple top file of the same RNA 8-mer duplex: https://github.com/lorenzo-rovigatti/oxDNA/blob/master/examples/RNA_DUPLEX_MELT/sim.top",
  },
  {
    title: "Input File",
    detail:
      "Simulation parameters such as temperature, salt concentration, number of steps, and whether to use MD or MC methods. Here's the example of an input file to study the properties of the RNA 8-mer duplex: https://github.com/lorenzo-rovigatti/oxDNA/blob/master/examples/RNA_DUPLEX_MELT/input",
  },
  {
    title: "Observables",
    detail:
      "A list of different physical quantities the code should return at the end of simulation. If you do not request observables, you only get the default trajectory. You can explicitly request outputs like hydrogen-bonding energy, distance between particles, or coaxial-stacking quantities, and most of these can also be analyzed post-simulation. This README calculates the melting temperatures based on the extrapolations to a series of temperatures: https://github.com/lorenzo-rovigatti/oxDNA/blob/master/examples/RNA_DUPLEX_MELT/README",
  },
];

const ecosystemTools = [
  {
    title: "oxDNA / oxRNA Engine",
    detail: "The core C++/CUDA simulation engine responsible for running computational physics workloads.",
  },
  {
    title: "Oxpy",
    detail:
      "A Python module that binds directly to the oxDNA engine and enables techniques like replica-exchange and well-tempered metadynamics.",
  },
  {
    title: "oxDNA Analysis Tools (oat)",
    detail:
      "A Python toolkit for trajectory analysis, including alignment, nucleotide distance calculations, interduplex angles, and hydrogen-bond pattern comparisons.",
  },
  {
    title: "OxView",
    detail:
      "A browser-based visualization and editing interface for loading, manipulating, and inspecting 3D configuration and topology files.",
  },
  {
    title: "Conversion Utilities",
    detail:
      "Scripts and integrations (including scadnano and tacoxDNA) that convert CAD designs into oxDNA-ready topology and configuration files.",
  },
];

const foundationalConcepts = [
  "Thermodynamics of base pairing and melting temperatures.",
  "Persistence length and mechanical rigidity of polymers.",
  "Free energy landscapes and rare-event kinetics (useful for Umbrella Sampling and Forward Flux Sampling).",
];

const primerHighlights = [
  { id: "what-does-oxdna-do", label: "What does oxDNA do?" },
  { id: "how-does-it-work", label: "How does it work?" },
  { id: "tools-within-oxecosystem", label: "Tools within OxEcosystem" },
  { id: "what-do-i-need-to-know", label: "What do I need to know?" },
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="section">
        <div className="container hero">
          <div>
            <p className="eyebrow">Open Scientific Infrastructure</p>
            <h1>The oxDNA Research Ecosystem</h1>
            <p>
              A shared workspace for DNA nanotechnology simulation, visualization, and
              reproducible methods. Explore tools, publications, tutorials, and citation
              guidance in one coherent research portal.
            </p>
            <div className="button-row" style={{ marginTop: "1.4rem" }}>
              <Link href="/publications" className="btn btn-cta">
                View Publications
              </Link>
              <Link href="/data-tools" className="btn btn-primary">
                Explore Data & Tools
              </Link>
            </div>
          </div>
          <figure className="hero-media">
            <OxViewEmbed />
          </figure>
        </div>
      </section>

      <section className="section primer-section">
        <div className="container primer-layout">
          <article className="primer-content">
            <p className="eyebrow">oxDNA Primer</p>
            <h2 id="what-does-oxdna-do" className="primer-anchor">What does oxDNA do?</h2>
            <p>
              In a nutshell, oxDNA is a simulation code that models nucleic acid behavior
              (DNA and RNA) at a coarse-grained level. The original model was introduced by
              T. E. Ouldridge, J. P. K. Doye, and A. A. Louis{" "}
              <a className="home-ref" href="#home-ref-3">[3]</a>, and has evolved into an
              extensible simulation and analysis framework supporting oxDNA1, oxDNA2, oxRNA,
              and oxNA force fields.
            </p>
            <p>
              oxDNA can run both molecular dynamics (MD) and Monte Carlo (MC) simulations.
              MD runs on CPUs or CUDA-enabled GPUs, while MC can use algorithms like Virtual
              Move Monte Carlo to accelerate equilibration and sampling. By simulating many
              nucleotides over time, it is possible to accurately determine average
              thermodynamic and mechanical behavior across systems ranging from simple duplexes
              to massive DNA origami assemblies.
            </p>
            <p>
              Using a coarse-grained model to determine DNA behavior is quite different from
              approaches like all-atom molecular dynamics. Each method has strengths and
              limitations depending on the scientific question.
            </p>

            <div className="primer-compare" aria-label="All-atom and coarse-grained comparison">
              <h4 className="primer-compare-header">All-Atom Models: Pros and Cons</h4>
              <h4 className="primer-compare-header">Coarse-Grained Models (oxDNA): Pros and Cons</h4>
              {allAtomTradeoffs.map((item, i) => (
                <React.Fragment key={i}>
                  <div className="primer-procon-cell">
                    <strong>{item.stance}</strong>
                    <span>{item.detail}</span>
                  </div>
                  <div className="primer-procon-cell">
                    <strong>{coarseGrainedTradeoffs[i].stance}</strong>
                    <span>{coarseGrainedTradeoffs[i].detail}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>

            <h3 id="how-does-it-work" className="primer-anchor">How does it work?</h3>
            <p>
              In order to do anything, the code first needs a model of some problem of
              interest. This could be a simple DNA duplex, a Holliday junction, or a complex
              DNA origami nanorobot. You describe the model so the code can run simulation and
              analysis.
            </p>
            <dl className="primer-definitions">
              {modelIngredients.map((item) => (
                <div key={item.title}>
                  <dt>{item.title}</dt>
                  <dd>{item.detail}</dd>
                </div>
              ))}
            </dl>

            <h3 id="tools-within-oxecosystem" className="primer-anchor">Tools within OxEcosystem</h3>
            <p>
              The oxDNA project has grown far beyond a single simulation engine. It is now a
              rich ecosystem of interconnected tools designed to help design, simulate, and
              analyze nucleic acid nanotechnology workflows.
            </p>
            <dl className="primer-definitions">
              {ecosystemTools.map((tool) => (
                <div key={tool.title}>
                  <dt>{tool.title}</dt>
                  <dd>{tool.detail}</dd>
                </div>
              ))}
            </dl>

            <h3 id="what-do-i-need-to-know" className="primer-anchor">What do I need to know?</h3>
            <p>
              To begin, you just need to go to OxView to visualize and edit your structure,
              and OxCloud to simulate it right in your browser.
            </p>
            <p>
              To have fine-grained control over all the tools the oxDNA ecosystem has to
              offer, you will need to be a little proficient with the command-line interface
              (CLI) and git for staying up-to-date with the latest code developments.
            </p>
            <p>
              For advanced users, the oxpy (Python bindings) and oat APIs offer direct
              usability improvements over raw text inputs and outputs, enabling more
              fine-grained analysis and statistical calculations.
            </p>
            <p>
              If you are new to nucleic acid biophysics, these foundational concepts are
              especially useful:
            </p>
            <ul className="primer-bullets">
              {foundationalConcepts.map((concept) => (
                <li key={concept}>{concept}</li>
              ))}
            </ul>
          </article>

          <HomePrimerRail sections={primerHighlights} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Featured Tools</p>
          <div className="card-grid cols-3">
            <article className="card">
              <div className="icon-row">
                <ToolIcon />
                <span>Simulation</span>
              </div>
              <h3>oxDNA Simulation Suite</h3>
              <p>Run large-scale DNA and RNA coarse-grained simulations with reproducible inputs.</p>
              <a href="https://oxdna.org/" target="_blank" rel="noopener noreferrer" className="btn btn-link">Open oxDNA</a>
            </article>
            <article className="card">
              <div className="icon-row">
                <ToolsIcon />
                <span>Tools</span>
              </div>
              <h3>Data & Tools Directory</h3>
              <p>Open Nanobase, Tacoxdna, OxDNA, ppview, and cogli2 from one centralized hub.</p>
              <Link href="/data-tools" className="btn btn-link">Browse Data & Tools</Link>
            </article>
            <article className="card">
              <div className="icon-row">
                <DocIcon />
                <span>Publications</span>
              </div>
              <h3>Publications and Citations</h3>
              <p>Review papers, software citations, and reproducibility references for oxDNA research.</p>
              <Link href="/publications" className="btn btn-link">Open Publications</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="about-section-heading" id="references">References</h2>
          <ol className="pub-list home-references">
            <li id="home-ref-3" value={3} className="pub-item">
              <span className="pub-number">3.</span>
              <span className="pub-citation">T. E. Ouldridge, A. A. Louis and J. P. K. Doye, J. Chem. Phys, 134, 085101 (2011)</span>
              {" — "}
              <span className="pub-links">
                <a href="http://aip.scitation.org/doi/abs/10.1063/1.3552946?journalCode=jcp" target="_blank" rel="noopener noreferrer">
                  Structural, mechanical and thermodynamic properties of a coarse-grained DNA model
                </a>
                {" "}(<a href="http://arxiv.org/abs/arXiv:1009.4480" target="_blank" rel="noopener noreferrer">arXiv</a>)
              </span>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
