import { PageIntro } from "@/components/PageIntro";

type TimelineEntry = {
  ref: number;
  date: string;
  title: string;
  body: string;
};

type ReferenceEntry = {
  ref: number;
  citation: string;
  title: string;
  paperUrl: string;
  arxivUrl?: string;
  bioRxivUrl?: string;
  dataUrl?: string;
  preprintsUrl?: string;
  chemRxivUrl?: string;
  researchSquareUrl?: string;
  medRxivUrl?: string;
};

const releaseMilestones: TimelineEntry[] = [
  {
    ref: 216,
    date: "2023",
    title: "oxpy",
    body: "The latest oxDNA release: a Python-based interface that makes simulations easier to set up, run and analyse.",
  },
  {
    ref: 162,
    date: "2022",
    title: "Nanobase",
    body: "A public repository for DNA and RNA nanostructures, providing curated designs and metadata for the community.",
  },
  {
    ref: 139,
    date: "2021",
    title: "oxDNA.org",
    body: "A public webserver for coarse-grained simulations of DNA and RNA nanostructures.",
  },
  {
    ref: 103,
    date: "2020",
    title: "oxView & OAT",
    body: "Interactive browser-based visualisation, editing and simulation of large DNA and RNA nanostructures, together with the OxDNA Analysis Tool (OAT).",
  },
  {
    ref: 93,
    date: "2019",
    title: "tacoxDNA",
    body: "A user-friendly web server for running oxDNA simulations, lowering the barrier to entry for non-specialists.",
  },
  {
    ref: 65,
    date: "2018",
    title: "oxDNA in LAMMPS",
    body: "A port of the oxDNA model to the LAMMPS molecular dynamics engine, broadening accessibility and integration with other simulation tools.",
  },
  {
    ref: 32,
    date: "2015",
    title: "Salt-dependent oxDNA",
    body: "Introduces improved structural properties and explicit salt dependence, making the model quantitatively predictive for ionic-strength effects.",
  },
  {
    ref: 25,
    date: "2015",
    title: "oxDNA on GPUs (CUDA)",
    body: "GPU-accelerated implementation of oxDNA, enabling orders-of-magnitude speed-ups over the original CPU code.",
  },
  {
    ref: 17,
    date: "2014",
    title: "oxRNA",
    body: "A nucleotide-level coarse-grained model of RNA, extending the oxDNA framework to RNA duplexes, hairpins, and strand displacement.",
  },
  {
    ref: 3,
    date: "2011",
    title: "Initial oxDNA",
    body: "The original coarse-grained DNA model. Introduces the structural, mechanical and thermodynamic framework that underpins the entire ecosystem.",
  },
];

const references: ReferenceEntry[] = [
  {
    ref: 3,
    citation: "T. E. Ouldridge, A. A. Louis and J. P. K. Doye, J. Chem. Phys, 134, 085101 (2011)",
    title: "Structural, mechanical and thermodynamic properties of a coarse-grained DNA model",
    paperUrl: "http://aip.scitation.org/doi/abs/10.1063/1.3552946?journalCode=jcp",
    arxivUrl: "http://arxiv.org/abs/arXiv:1009.4480",
  },
  {
    ref: 17,
    citation: "P. Šulc, F. Romano, T. E. Ouldridge, J. P. K. Doye, A. A. Louis, J. Chem. Phys. 140, 235102 (2014)",
    title: "A nucleotide-level coarse-grained model of RNA",
    paperUrl: "http://scitation.aip.org/content/aip/journal/jcp/140/23/10.1063/1.4881424",
    arxivUrl: "http://arxiv.org/abs/1403.4180",
  },
  {
    ref: 25,
    citation: "L. Rovigatti, P. Šulc, I. Reguly, F. Romano, J. Comput. Chem., 36, 1-8 (2015)",
    title: "A comparison between parallelization approaches in molecular dynamics simulations on GPUs",
    paperUrl: "http://onlinelibrary.wiley.com/doi/10.1002/jcc.23763/abstract",
    arxivUrl: "http://arxiv.org/abs/1401.4350",
  },
  {
    ref: 32,
    citation: "B. E. K. Snodin, F. Randisi, M. Mosayebi, P. Šulc, J. S. Schreck, F. Romano, T. E. Ouldridge, R. Tsukanov, E. Nir, A. A. Louis, J. P. K. Doye, J. Chem. Phys. 142, 234901 (2015)",
    title: "Introducing Improved Structural Properties and Salt Dependence into a Coarse-Grained Model of DNA",
    paperUrl: "http://scitation.aip.org/content/aip/journal/jcp/142/23/10.1063/1.4921957",
    arxivUrl: "http://arxiv.org/abs/1504.00821",
  },
  {
    ref: 65,
    citation: "O. Henrich, Y.A. Gutierrez-Fosado, T. Curk, T.E. Ouldridge, Eur. Phys. J. E 41, 57 (2018)",
    title: "Coarse-Grained Simulation of DNA using LAMMPS",
    paperUrl: "http://dx.doi.org/10.1140/epje/i2018-11669-8",
    arxivUrl: "http://arxiv.org/abs/1802.07145",
  },
  {
    ref: 93,
    citation: "A. Suma, E. Poppleton, M. Matthies, P. Šulc, F. Romano, A.A. Louis, J.P.K. Doye, C. Micheletti, and L. Rovigatti, J. Comput. Chem. 40, 2586-2595 (2019)",
    title: "tacoxDNA: a user-friendly web server for simulations of complex DNA structures, from single strands to origami",
    paperUrl: "http://dx.doi.org/10.1002/jcc.26029",
  },
  {
    ref: 103,
    citation: "E. Poppleton, J. Bohlin, M. Matthies, S. Sharma, F. Zhang and P. Šulc, Nucleic Acids Res. 48, e72 (2020)",
    title: "Design, optimization, and analysis of large DNA and RNA nanostructures through interactive visualization, editing, and molecular simulation",
    paperUrl: "https://doi.org/10.1093/nar/gkaa417",
    bioRxivUrl: "https://doi.org/10.1101/2020.01.24.917419",
  },
  {
    ref: 139,
    citation: "E. Poppleton, R. Romero, A. Mallya, L. Rovigatti and P. Šulc, Nucl. Acids Res. 49 W491–W498 (2021)",
    title: "OxDNA.org: a public webserver for coarse-grained simulations of DNA and RNA nanostructures",
    paperUrl: "https://doi.org/10.1093/nar/gkab324",
  },
  {
    ref: 162,
    citation: "E. Poppleton, A. Mallya, S. Dey, J. Joseph, P. Šulc, Nucleic Acids Res. 50, D246–D252 (2022)",
    title: "Nanobase.org: a repository for DNA and RNA nanostructures",
    paperUrl: "https://doi.org/10.1093/nar/gkab1000",
  },
  {
    ref: 216,
    citation: "E. Poppleton, M. Matthies, D. Mandal, F. Romano, P. Šulc and L. Rovigatti, J. Open Source Softw. 8, 4693 (2023)",
    title: "oxDNA: coarse-grained simulations of nucleic acids made simple",
    paperUrl: "https://doi.org/10.21105/joss.04693",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        title="About"
        description="A chronological timeline of milestones, releases, and community events for the oxDNA ecosystem."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      <section className="section">
        <div className="container">
          <h2 className="about-section-heading">oxDNA release timeline</h2>
          <p className="about-section-lede">
            A decade of major releases across the oxDNA ecosystem, from the original
            coarse-grained DNA model to the latest Python interface. The numbers in brackets
            link to the matching entry in the references below.
          </p>
          <ol className="timeline" aria-label="oxDNA release timeline">
            {releaseMilestones.map((entry) => (
              <li key={entry.ref} className="timeline-item">
                <span className="timeline-date">{entry.date}</span>
                <div className="timeline-card">
                  <h3 className="timeline-title">
                    {entry.title}{" "}
                    <a
                      className="timeline-ref"
                      href={`#about-ref-${entry.ref}`}
                      aria-label={`See reference ${entry.ref} for ${entry.title}`}
                    >
                      {entry.ref}
                    </a>
                  </h3>
                  <p className="timeline-body">{entry.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="about-section-heading" id="references">
            References
          </h2>
          <p className="about-section-lede">
            The papers referenced from the timeline above. The reference numbers match those
            used on the <a href="/publications">publications page</a>.
          </p>
          <ol className="pub-list about-references">
            {references.map((ref) => (
              <li
                key={ref.ref}
                id={`about-ref-${ref.ref}`}
                value={ref.ref}
                className="pub-item"
              >
                <span className="pub-number">{ref.ref}.</span>
                <span className="pub-citation">{ref.citation}</span>
                {" — "}
                <span className="pub-links">
                  <a href={ref.paperUrl} target="_blank" rel="noopener noreferrer">
                    {ref.title}
                  </a>
                  {ref.arxivUrl ? (
                    <>{" "}(<a href={ref.arxivUrl} target="_blank" rel="noopener noreferrer">arXiv</a>)</>
                  ) : null}
                  {ref.bioRxivUrl ? (
                    <>{" "}(<a href={ref.bioRxivUrl} target="_blank" rel="noopener noreferrer">bioRxiv</a>)</>
                  ) : null}
                  {ref.dataUrl ? (
                    <>{" "}(<a href={ref.dataUrl} target="_blank" rel="noopener noreferrer">data</a>)</>
                  ) : null}
                  {ref.preprintsUrl ? (
                    <>{" "}(<a href={ref.preprintsUrl} target="_blank" rel="noopener noreferrer">preprints</a>)</>
                  ) : null}
                  {ref.chemRxivUrl ? (
                    <>{" "}(<a href={ref.chemRxivUrl} target="_blank" rel="noopener noreferrer">ChemRxiv</a>)</>
                  ) : null}
                  {ref.researchSquareUrl ? (
                    <>{" "}(<a href={ref.researchSquareUrl} target="_blank" rel="noopener noreferrer">Research Square</a>)</>
                  ) : null}
                  {ref.medRxivUrl ? (
                    <>{" "}(<a href={ref.medRxivUrl} target="_blank" rel="noopener noreferrer">medRxiv</a>)</>
                  ) : null}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
