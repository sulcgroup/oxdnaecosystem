import { PageIntro } from "@/components/PageIntro";

export default function ListOfTutorialsPage() {
  return (
    <>
      <PageIntro
        title="List of tutorials"
        description="Here we provide a list of tutorials to help use oxDNA:"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Tutorials", href: "/tutorials" },
          { label: "List of tutorials" },
        ]}
      />

      <section className="section">
        <div className="container">
          <ul className="tutorial-list">
            <li>
              <a
                href="https://doi.org/10.1002/smtd.202401526"
                target="_blank"
                rel="noopener noreferrer"
              >
                Guide to MC and MD Relax
              </a>
            </li>
            <li>
              The oxDNA coarse-grained model as a tool to simulate DNA origami:{" "}
              <a
                href="http://arxiv.org/abs/2004.05052"
                target="_blank"
                rel="noopener noreferrer"
              >
                arXiv
              </a>
              ;{" "}
              <a
                href="https://www.youtube.com/playlist?list=PLPX_lol9U0dbKtaKiiY3Cf5uD2Zs7Tu6g"
                target="_blank"
                rel="noopener noreferrer"
              >
                accompanying videos
              </a>
              ;{" "}
              <a
                href="https://ora.ox.ac.uk/objects/uuid:7a111527-3c1a-4c0f-af89-774b01f43abd"
                target="_blank"
                rel="noopener noreferrer"
              >
                accompanying examples files
              </a>
            </li>
            <li>
              <a
                href="https://www.frontiersin.org/articles/10.3389/fmolb.2021.693710/full"
                target="_blank"
                rel="noopener noreferrer"
              >
                A primer on the oxDNA model of DNA: When to use it, how to simulate it and how to interpret the results
              </a>{" "}
              <a
                href="https://arxiv.org/abs/2104.11567"
                target="_blank"
                rel="noopener noreferrer"
              >
                arXiv
              </a>
              ;{" "}
              <a
                href="https://dx.doi.org/10.5281/zenodo.4809769"
                target="_blank"
                rel="noopener noreferrer"
              >
                accompanying examples files
              </a>
            </li>
            <li>
              An oxDNA tutorials video channel:{" "}
              <a
                href="https://www.youtube.com/channel/UC4ClrQ8xMypSbDZG2QCehpA"
                target="_blank"
                rel="noopener noreferrer"
              >
                youtube
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
