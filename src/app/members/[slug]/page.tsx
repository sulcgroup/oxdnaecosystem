import { notFound } from "next/navigation";
import { PageIntro } from "@/components/PageIntro";

type MemberProfile = {
  name: string;
  description?: string;
};

const memberProfiles = {
  "petr-sulc": {
    name: "Petr Sulc",
    description:
      "Petr Sulc is an Associate Professor at Arizona State University and an ERC grant group leader at Technical University of Munich. He received his bachelor's degree in physics at Czech Technical University, master's at Ecole Polytechnique in Paris, and his D.Phil. in theoretical physics at the University of Oxford. He worked at Los Alamos National Lab and was a fellow in physics and biology at The Rockefeller University in New York. In 2018, he established his research group at the Biodesign Institute at Arizona State University. His research broadly encompasses applications of statistical physics and computational chemistry to studies of DNA and RNA in biology and nanotechnology. He has published over 70 papers in the fields of physics, bionanotechnology, chemistry, and engineering. His group develops and maintains the oxDNA ecosystem of tools for design and simulation of nucleic acid nanostructures.",
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
    description:
      "Thomas Ouldridge is a Reader (Associate Professor) in the Principles of Biomolecular Systems at Imperial College London. He leads an interdisciplinary group probing the fundamental principles underlying complex biochemical systems through theoretical modelling, simulation, and experiment. In particular, the group focuses on the interplay between the detailed biochemistry and the overall output of processes such as sensing, replication, or self-assembly, drawing inspiration from natural systems while exploring the possibilities of engineering artificial analogs.\n\nDr. Ouldridge completed his PhD, in which he developed the original version of the oxDNA model, at the University of Oxford in 2011. He subsequently held two independent fellowships dedicated to the development of that model and its application to problems in molecular information processing, before taking up a faculty position in the Department of Bioengineering at Imperial College in 2016.",
  },
  "carlos-castro": {
    name: "Carlos Castro",
    description:
      "Professor Castro received his Bachelor's and Master's degrees in Mechanical Engineering from The Ohio State University and his PhD in Mechanical Engineering from the Massachusetts Institute of Technology. He was a post-doctoral fellow at the Technische Universität München working in structural DNA nanotechnology. Dr. Castro joined OSU in 2011 as a faculty member and is currently an Associate Professor in the Department of Mechanical and Aerospace Engineering and a faculty member of the OSU Biophysics Graduate Program. His research focuses on the self-assembly of DNA nanodevices for biophysical and biomedical applications. Dr. Castro's laboratory has pioneered the use of engineering mechanics and design approaches for the development of DNA nanomachines with complex motion, dynamic behavior, and programmed stimulus response. A major goal of his current research is to develop nanodevices for measurement, manipulation, and drug delivery in biological systems. He has received honors including OSU research and teaching awards, an NSF CAREER award, an Alexander von Humboldt fellowship, and a Fulbright Research Scholar Award.",
  },
  "megan-engel": {
    name: "Megan Engel",
    description:
      "Megan completed her DPhil in theoretical physics at the University of Oxford as a Rhodes Scholar. Her research, pursued in collaboration with DNA nanotechnologists, explored biological self-assembly, the process by which proteins and nucleic acids build themselves from one-dimensional strands of building blocks into functional three-dimensional shapes. As a Schmidt Science Fellow, Megan worked with Michael Brenner at Harvard University to apply machine learning techniques to the study of non-equilibrium biological systems. As an Assistant Professor at the University of Calgary, Megan works to improve our understanding of how nature has harnessed the laws of physics to drive processes like robust self-assembly and molecular energy transduction, ultimately leading to better rational design of synthetic, self-assembling nanomachines.",
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
