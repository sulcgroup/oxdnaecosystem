import { PageIntro } from "@/components/PageIntro";

export default function ContactUsPage() {
  return (
    <>
      <PageIntro
        title="Contact Us"
        description="Contact channels for collaboration, tool support, and scientific coordination."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />
      <section className="section">
        <div className="container card-grid">
          <article className="card">
            <h3>General Inquiries</h3>
            <p>oxdna.donotreply@gmail.com</p>
          </article>
          <article className="card">
            <h3>Technical Support</h3>
            <p>oxdna.donotreply@gmail.com</p>
          </article>
          <article className="card">
            <h3>Collaboration Requests</h3>
            <p>oxdna.donotreply@gmail.com</p>
          </article>
        </div>
      </section>
    </>
  );
}
