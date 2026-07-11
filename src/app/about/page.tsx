import { PageIntro } from "@/components/PageIntro";

type TimelineEntry = {
  date: string;
  title: string;
  body: string;
};

const placeholderEntries: TimelineEntry[] = [
  {
    date: "2026",
    title: "Milestone placeholder",
    body: "Most recent entry appears at the top. Replace with a real update.",
  },
  {
    date: "2025",
    title: "Milestone placeholder",
    body: "Replace with a real update for this year.",
  },
  {
    date: "2024",
    title: "Milestone placeholder",
    body: "Replace with a real update for this year.",
  },
  {
    date: "2023",
    title: "Milestone placeholder",
    body: "Replace with a real update for this year.",
  },
  {
    date: "2022",
    title: "Milestone placeholder",
    body: "Replace with a real update for this year.",
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
          <ol className="timeline" aria-label="Project timeline">
            {placeholderEntries.map((entry) => (
              <li key={entry.date} className="timeline-item">
                <span className="timeline-date">{entry.date}</span>
                <div className="timeline-card">
                  <h3 className="timeline-title">{entry.title}</h3>
                  <p className="timeline-body">{entry.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
