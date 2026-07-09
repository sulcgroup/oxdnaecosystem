import Link from "next/link";

const footerLinks = {
  community: [
    { label: "Tutorials", href: "/tutorials" },
    { label: "Data & Tools", href: "/data-tools" },
    { label: "Contact Us", href: "/contact-us" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section>
          <p className="footer-eyebrow">Funding</p>
          <h2>Acknowledgements</h2>
          <p>
            We gratefully acknowledge{" "}
            <a
              href="https://www.nsf.gov/awardsearch/show-award?AWD_ID=2346048"
              target="_blank"
              rel="noopener noreferrer"
            >
              NSF POSE Grant #2346048
            </a>
            .
          </p>
          <p className="footer-copyright">© {new Date().getFullYear()} oxDNA Ecosystem</p>
        </section>
        <section>
          <p className="footer-eyebrow">Community</p>
          <ul>
            {footerLinks.community.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </footer>
  );
}
