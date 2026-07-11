import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

type TutorialLink = {
  title: string;
  description: string;
  href: string;
  external?: boolean;
};

const tutorials: TutorialLink[] = [
  {
    title: "List of tutorials",
    description: "A curated index of tutorials, primers, and walkthroughs for using oxDNA.",
    href: "/tutorials/list-of-tutorials",
  },
  {
    title: "OxDNA Documentation",
    description: "The full oxDNA reference wiki covering installation, input formats, and model details.",
    href: "https://dna.physics.ox.ac.uk/index.php?title=Main_Page",
    external: true,
  },
  {
    title: "YouTube tutorials",
    description: "Video walkthroughs and recorded lectures hosted on the oxDNA tutorials YouTube channel.",
    href: "https://www.youtube.com/@oxdnatutorials1969/videos",
    external: true,
  },
  {
    title: "How We Simulate Origami",
    description: "Companion methods paper on simulation workflows for DNA origami with oxDNA.",
    href: "https://doi.org/10.1002/smtd.202401526",
    external: true,
  },
];

export default function TutorialsPage() {
  return (
    <>
      <PageIntro
        title="Tutorials"
        description="Guided educational materials, documentation, and video walkthroughs for the oxDNA ecosystem."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Tutorials" }]}
      />

      <section className="section">
        <div className="container card-grid cols-3">
          {tutorials.map((tutorial) => (
            <article key={tutorial.title} className="card">
              <h3>{tutorial.title}</h3>
              <p>{tutorial.description}</p>
              {tutorial.external ? (
                <a
                  href={tutorial.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Open
                </a>
              ) : (
                <Link href={tutorial.href} className="btn btn-primary">
                  Open
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
