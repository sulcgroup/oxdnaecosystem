import { PageIntro } from "@/components/PageIntro";

export default function CiteUsPage() {
  return (
    <>
      <PageIntro
        title="Citing oxDNA"
        description="Please cite these publications for any work that uses the oxDNA simulation package."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cite Us" }]}
      />
      <section className="section">
        <div className="container card-grid">
          <article className="card">
            <h3>For the code</h3>
            <p>
              <a
                href="https://doi.org/10.21105/joss.04693"
                target="_blank"
                rel="noopener noreferrer"
              >
                oxDNA: coarse-grained simulations of nucleic acids made simple
              </a>
            </p>
            <p>
              E. Poppleton, M. Matthies, D. Mandal, F. Romano, P. Šulc and L.
              Rovigatti, J. Open Source Softw. 8, 4693 (2023)
            </p>
          </article>
          <article className="card">
            <h3>For the CUDA-powered code</h3>
            <p>
              <a
                href="http://onlinelibrary.wiley.com/doi/10.1002/jcc.23763/abstract"
                target="_blank"
                rel="noopener noreferrer"
              >
                A comparison between parallelization approaches in molecular
                dynamics simulations on GPUs
              </a>
            </p>
            <p>
              L. Rovigatti, P. Šulc, I. Reguly, F. Romano, J. Comput. Chem. 36,
              1–8 (2015)
            </p>
          </article>
          <article className="card">
            <h3>
              For <code>oxDNA_analysis_tools</code>
            </h3>
            <p>
              <a
                href="https://doi.org/10.1093/nar/gkab324"
                target="_blank"
                rel="noopener noreferrer"
              >
                OxDNA.org: a public webserver for coarse-grained simulations of
                DNA and RNA nanostructures
              </a>
            </p>
            <p>
              E. Poppleton, R. Romero, A. Mallya, L. Rovigatti and P. Šulc,
              Nucl. Acids Res. 49, W491–W498 (2021)
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
