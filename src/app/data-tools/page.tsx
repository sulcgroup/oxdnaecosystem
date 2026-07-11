import { PageIntro } from "@/components/PageIntro";

const quickLinks = [
  { label: "Nanobase", href: "https://nanobase.org/" },
  { label: "OxDNA", href: "https://oxdna.org/" },
  { label: "Tacoxdna", href: "https://github.com/lorenzo-rovigatti/tacoxDNA" },
  { label: "ppview", href: "https://github.com/zoombya/ppview" },
  { label: "cogli2", href: "https://sourceforge.net/projects/cogli1/" },
];

const tacoxdnaFeatures = [
  "Generator for twisted and knotted configurations",
  "oxDNA-to-LAMMPS converter",
  "LAMMPS-to-oxDNA converter",
  "oxDNA-to-PDB converter",
  "PDB-to-oxDNA converter",
  "cadnano-to-oxDNA converter",
  "CanDo-to-oxDNA converter",
  "Tiamat-to-oxDNA converter",
  "vHelix-to-oxDNA converter",
  "rpoly-to-oxDNA converter",
  "scadnano-to-oxDNA converter",
];

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function DataToolsPage() {
  return (
    <>
      <PageIntro
        title="Data & Tools"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Data & Tools" }]}
      />

      <section className="section section-tight">
        <div className="container">
          <div className="quick-links">
            <span className="quick-links-label">Quick links:</span>
            <ul className="quick-links-list">
              {quickLinks.map((tool, index) => (
                <li key={tool.label}>
                  <ExternalLink href={tool.href}>{tool.label}</ExternalLink>
                  {index < quickLinks.length - 1 ? <span aria-hidden="true">,</span> : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="tool-descriptions">
          <article>
            <h2 id="nanobase">Nanobase</h2>
            <p>
              Nanobase is a respository of DNA/RNA and protein nanostructures. It is a
              public resource for the bionanotechnology community to share and reuse their
              computational and experimental designs, with the goal of becoming
              RCSB PDB-like database and encouraging more collaboration and reusability of
              designs developed in our community.
            </p>
            <p>
              Find the repository at{" "}
              <ExternalLink href="https://nanobase.org/">https://nanobase.org/</ExternalLink>.
            </p>
          </article>

          <article>
            <h2 id="oxdna">OxDNA</h2>
            <p>OxDNA.org is a cloud-based platform to run oxdna simulations. Their goal is to facilitate
               development of more advanced and complex designs in the fields of DNA and RNA nanotechnology 
               by facilitating non-experts to run simple simulations. The simulations this server supports are 
               equilibrium sampling of assembled designs, meant to assist users to test in silico their designs
               before taking them to the lab.</p>
            <p>
              Find more information at{" "}
              <ExternalLink href="https://oxdna.org/">https://oxdna.org/</ExternalLink>.
            </p>
          </article>

          <article>
            <h2 id="tacoxdna">Tacoxdna</h2>
            <p>
              tacoxDNA (Tools and Converters for oxDNA) is a collection of tools initially
              developed to help oxDNA users. It was developed by Dr. Lorenzo Rovigatti,
              used for seamless conversion between multiple file-types, including:
            </p>
            <ul>
              {tacoxdnaFeatures.map((feature) => (
                <li key={feature}>
                  <strong>{feature}</strong>
                </li>
              ))}
            </ul>
            <p>
              Find more information at{" "}
              <ExternalLink href="https://github.com/lorenzo-rovigatti/tacoxDNA">
                https://github.com/lorenzo-rovigatti/tacoxDNA
              </ExternalLink>
              .
            </p>
          </article>

          <article>
            <h2 id="ppview">ppview</h2>
            <p>
              PPView is a browser-based javascript app for visualizing patchy particle
              systems. It was developed by Dr. Michael Matthies at Arizona State University
              and Technical University of Munich.
            </p>
            <p>
              Find more information at{" "}
              <ExternalLink href="https://github.com/zoombya/ppview">
                https://github.com/zoombya/ppview
              </ExternalLink>
              .
            </p>
            <p>
              Access the tool at{" "}
              <ExternalLink href="https://zoombya.github.io/ppview/">
                https://zoombya.github.io/ppview/
              </ExternalLink>
              .
            </p>
          </article>

          <article>
            <h2 id="cogli2">cogli2</h2>
            <p>
              cogli2 is a simple program for visualizing trajectories of course-grained
              simulations such as oxDNA or patchy particles. It was developed by
              Dr. Lorenzo Rovigatti at Sapienza University of Rome.
            </p>
            <p>
              Find more information at{" "}
              <ExternalLink href="https://sourceforge.net/projects/cogli1/">
                https://sourceforge.net/projects/cogli1/
              </ExternalLink>
              .
            </p>
          </article>
          </div>
        </div>
      </section>
    </>
  );
}
