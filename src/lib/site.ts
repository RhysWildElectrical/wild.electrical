// Central place for placeholder business details.
// Everything marked PLACEHOLDER must be replaced with real details before launch.

export const site = {
  name: "Wild Electrical",
  domain: "wildelectrical.au",
  phone: "0411 608 100",
  phoneHref: "tel:+61411608100",
  email: "rhys@wildelectrical.au",
  serviceArea: "South Australia",
  address: "Adelaide Hills",
  abn: "98 749 910 248",
  licence: "PLACEHOLDER — add electrical licence number",
  hours: "24/7",
  social: {
    facebook: "",
    instagram: "",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export type Service = {
  slug: string;
  title: string;
  summary: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "residential",
    title: "Residential",
    summary:
      "General electrical work for homes — from repairs and switchboard upgrades to full rewires.",
    bullets: [
      "Switchboard upgrades & safety switches",
      "Lighting, power points & wiring repairs",
      "Fault finding & diagnostics",
      "Smoke alarm installation & compliance",
    ],
  },
  {
    slug: "new-homes",
    title: "New Homes",
    summary:
      "Electrical fit-out for new home builds, working alongside builders from first fix to handover.",
    bullets: [
      "Rough-in & fit-off for new builds",
      "Coordination with builders and other trades",
      "Data, TV & networking pre-wiring",
      "Compliance certification",
    ],
  },
  {
    slug: "additions-renovations",
    title: "Additions & Renovations",
    summary:
      "Electrical work for extensions, renovations and additions — matched to what's already there.",
    bullets: [
      "Extension & renovation wiring",
      "Kitchen & bathroom electrical upgrades",
      "Integrating new circuits with existing switchboards",
      "Minor and major additions",
    ],
  },
  {
    slug: "commercial",
    title: "Commercial",
    summary:
      "Electrical installation and maintenance for offices, retail and commercial fit-outs.",
    bullets: [
      "Office & retail fit-outs",
      "Switchboard & distribution upgrades",
      "Emergency & exit lighting",
      "Scheduled maintenance & compliance testing",
    ],
  },
  {
    slug: "industrial",
    title: "Industrial",
    summary:
      "Industrial electrical installation, maintenance and fault finding for plant and facilities.",
    bullets: [
      "Plant & machinery electrical work",
      "Motor control & switchgear",
      "Preventative maintenance programs",
      "Breakdown fault finding & repair",
    ],
  },
  {
    slug: "instrumentation",
    title: "Instrumentation",
    summary:
      "Installation, calibration and troubleshooting of process instrumentation and control systems.",
    bullets: [
      "Sensor & transmitter installation",
      "Loop checking & calibration",
      "Control panel wiring",
      "Fault diagnosis on instrumentation systems",
    ],
  },
  {
    slug: "solar",
    title: "Solar",
    summary:
      "Solar electrical work for homes and businesses, from new installs to servicing.",
    bullets: [
      "Residential & commercial solar installation",
      "Battery storage integration",
      "System servicing & fault finding",
      "Performance & compliance checks",
    ],
  },
  {
    slug: "utility-scale-solar",
    title: "Solar Farm & Utility-Scale",
    summary:
      "Maintenance and fault finding for large-scale solar farms and utility-scale installations.",
    bullets: [
      "Scheduled maintenance programs",
      "Fault finding across large-scale arrays",
      "Inverter & switchgear servicing",
      "Utility-scale electrical support",
    ],
  },
];
