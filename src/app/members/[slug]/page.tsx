import { notFound } from "next/navigation";
import { PageIntro } from "@/components/PageIntro";

type MemberProfile = {
  name: string;
  description?: string;
};

const memberProfiles = {
  "petr-sulc": {
    name: "Petr Sulc",
  },
  "lorenzo-rovigatti": {
    name: "Lorenzo Rovigatti",
    description:
      "Lorenzo Rovigatti is an associate professor in the Physics Department at Sapienza University of Rome, where his research focuses on the theoretical and computational modeling of soft matter and self-assembling systems. As one of the core developers of the oxDNA model, Lorenzo’s work is central to expanding the capabilities of coarse-grained simulations to accurately capture the complex physical and thermodynamic behaviors of nucleic acid nanostructures.",
  },
  "grigory-tikhomirov": {
    name: "Grigory Tikhomirov",
    description:
      "Greg Tikhomirov is an assistant professor in Electrical Engineering and Computer Sciences at UC Berkeley, where his Ti Lab designs and fabricates atomically precise devices by combining rational top-down engineering with bottom-up DNA-based self-assembly. Because realizing the next generation of complex nucleic acid nanodevices depends critically on the kind of design and simulation tools this project advances, computational ecosystems like oxDNA are central to his group's effort to transform proof-of-concept self-assembly into useful, manufacturable technology.",
  },
  "tom-ouldridge": {
    name: "Tom Ouldridge",
  },
  "carlos-castros": {
    name: "Carlos Castros",
  },
  "megan-engel": {
    name: "Megan Engel",
  },
} satisfies Record<string, MemberProfile>;

type MemberSlug = keyof typeof memberProfiles;

type MemberPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(memberProfiles).map((slug) => ({ slug }));
}

export default async function MemberPage({ params }: MemberPageProps) {
  const { slug } = await params;

  if (!(slug in memberProfiles)) {
    notFound();
  }

  const member: MemberProfile = memberProfiles[slug as MemberSlug];

  return (
    <>
      <PageIntro
        title={member.name}
        description={member.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Members" },
          { label: member.name },
        ]}
      />

    </>
  );
}
