export type NavChild = {
  label: string;
  href?: string;
  external?: boolean;
  children?: NavChild[];
};

export type NavItem = {
  label: string;
  href?: string;
  external?: boolean;
  children?: NavChild[];
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Data & Tools",
    href: "/data-tools",
    children: [
      { label: "Info", href: "/data-tools" },
      { label: "Nanobase", href: "https://nanobase.org/", external: true },
      { label: "Tacoxdna", href: "https://github.com/lorenzo-rovigatti/tacoxDNA", external: true },
      { label: "OxDNA", href: "https://oxdna.org/", external: true },
      { label: "ppview", href: "https://github.com/zoombya/ppview", external: true },
      { label: "cogli2", href: "https://sourceforge.net/projects/cogli1/", external: true },
    ],
  },
  { label: "Publications", href: "/publications" },
  {
    label: "Experiments",
    href: "/experiments",
    children: [
      { label: "Main Page", href: "/experiments" },
      {
        label: "Structure types",
        children: [
          { label: "Scaffolded Helical Bundles", href: "/experiments/structure-types/scaffolded-helical-bundles" },
          { label: "Scaffolded Wireframes", href: "/experiments/structure-types/scaffolded-wireframes" },
          { label: "Scaffold-Free Wireframes", href: "/experiments/structure-types/scaffold-free-wireframes" },
          { label: "DNA Bricks", href: "/experiments/structure-types/dna-bricks" },
          { label: "DNA Slats", href: "/experiments/structure-types/dna-slats" },
          { label: "Small DNA Complexes", href: "/experiments/structure-types/small-dna-complexes" },
        ],
      },
      {
        label: "Design",
        children: [
          { label: "Origami Size", href: "/experiments/design-considerations/origami-size" },
          { label: "Rigid vs Flexible", href: "/experiments/design-considerations/rigid-vs-flexible" },
          { label: "Yield", href: "/experiments/design-considerations/yield" },
          { label: "Budget", href: "/experiments/design-considerations/budget" },
          { label: "Addressability", href: "/experiments/design-considerations/addressability" },
          { label: "Living Materials", href: "/experiments/design-considerations/living-materials" },
          { label: "Buffer", href: "/experiments/design-considerations/buffer" },
          { label: "Surface vs Solution", href: "/experiments/design-considerations/surface-vs-solution" },
        ],
      },
      {
        label: "Software",
        children: [
          { label: "CadNano", href: "/experiments/software/cadnano" },
          { label: "ScadNano", href: "/experiments/software/scadnano" },
          { label: "NanoBricks", href: "/experiments/software/nanobricks" },
          { label: "NUPACK", href: "/experiments/software/nupack" },
          { label: "SeqWalk", href: "/experiments/software/seqwalk" },
          { label: "dnafold", href: "/experiments/software/dnafold" },
          { label: "pyOrigamiBreak", href: "/experiments/software/pyorigamibreak" },
          { label: "oxDNA", href: "/experiments/software/oxdna" },
          { label: "Athena", href: "/experiments/software/athena" },
          { label: "#-CAD", href: "/experiments/software/sharp-cad" },
          { label: "Braids", href: "/experiments/software/braids" },
        ],
      },
      {
        label: "Synthesis",
        children: [
          { label: "Thermal Annealing Ramp", href: "/experiments/synthesis-variables/thermal-annealing-ramp" },
          { label: "Buffer Salt Concentrations", href: "/experiments/synthesis-variables/buffer-salt-concentrations" },
          { label: "Staple : Scaffold Ratio", href: "/experiments/synthesis-variables/staple-scaffold-ratio" },
        ],
      },
      {
        label: "Purification",
        children: [
          { label: "PAGE", href: "/experiments/purification/page" },
          { label: "AGE", href: "/experiments/purification/age" },
          { label: "Spin Filtration", href: "/experiments/purification/spin-filtration" },
          { label: "PEG Precipitation", href: "/experiments/purification/peg-precipitation" },
          { label: "Gel Extraction", href: "/experiments/purification/gel-extraction" },
          { label: "Magnetic-Bead Purification", href: "/experiments/purification/magnetic-bead-purification" },
          { label: "Size-Exclusion Chromatography", href: "/experiments/purification/size-exclusion-chromatography" },
        ],
      },
      {
        label: "Imaging Methods",
        children: [
          { label: "AFM", href: "/experiments/imaging-methods/afm" },
          { label: "TEM", href: "/experiments/imaging-methods/tem" },
        ],
      },
    ],
  },
  { label: "Challenges", href: "/challenges" },
  {
    label: "Members",
    children: [
      { label: "Petr Sulc", href: "/members/petr-sulc" },
      { label: "Grigory Tikhomirov", href: "/members/grigory-tikhomirov" },
      { label: "Lorenzo Rovigatti", href: "/members/lorenzo-rovigatti" },
      { label: "Tom Ouldridge", href: "/members/tom-ouldridge" },
      { label: "Carlos Castro", href: "/members/carlos-castro" },
      { label: "Megan Engel", href: "/members/megan-engel" },
    ],
  },
  { label: "About", href: "/about" },
  {
    label: "Tutorials",
    children: [
      { label: "List of tutorials", href: "/tutorials/list-of-tutorials" },
      { label: "OxDNA Documentation", href: "https://dna.physics.ox.ac.uk/index.php?title=Main_Page", external: true },
      { label: "YouTube tutorials", href: "https://www.youtube.com/@oxdnatutorials1969/videos", external: true },
      { label: "How We Simulate Origami", href: "https://doi.org/10.1002/smtd.202401526", external: true },
    ],
  },
];
