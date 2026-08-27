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
  licence: "PGE228784",
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
      "All electrical work for homes, from repairs and switchboard upgrades to full rewires.",
    bullets: [
      "Switchboard upgrades and inspections",
      "Lighting, power points and switches",
      "Fault finding and rectification",
      "Smoke alarm installation and testing",
    ],
  },
  {
    slug: "new-homes",
    title: "New Homes",
    summary:
      "Electrical first and second fix for new homes, working alongside builders from first fix to handover.",
    bullets: [
      "First and second fix of new builds",
      "Coordination with builders and other trades",
      "SAPN power connections and new services (undergrounds)",
      "Certificates of compliance",
    ],
  },
  {
    slug: "additions-renovations",
    title: "Additions & Renovations",
    summary:
      "Electrical work for extensions, additions and renovations, working with you.",
    bullets: [
      "Extensions and additional wiring",
      "Kitchen and bathroom electrical upgrades",
      "Integrating new circuits with your existing home",
      "Minor and major additions",
    ],
  },
  {
    slug: "commercial",
    title: "Commercial",
    summary:
      "Electrical installation and maintenance for offices, retail, commercial and cafes.",
    bullets: [
      "Office and retail install and maintenance",
      "Switchboard and distribution upgrades",
      "Emergency and exit lighting",
      "Scheduled maintenance and compliance testing/verification",
    ],
  },
  {
    slug: "industrial",
    title: "Industrial",
    summary:
      "Industrial electrical installation, maintenance and fault finding for plant and facilities.",
    bullets: [
      "Plant and machinery electrical work",
      "Motor controls and switchgear",
      "Preventative maintenance programs",
      "Breakdown fault finding and repair",
    ],
  },
  {
    slug: "instrumentation",
    title: "Instrumentation",
    summary:
      "Installation and maintenance of process instrumentation including weather station sensors.",
    bullets: [
      "Sensor installations",
      "Weather station installation and fault finding",
      "Control wiring",
      "Fault finding",
    ],
  },
  {
    slug: "solar",
    title: "Solar",
    summary:
      "Solar electrical work for homes and businesses, from new installations to servicing.",
    bullets: [
      "Residential solar installations",
      "System servicing and fault finding",
      "Performance and compliance verification",
    ],
  },
   {
    slug: "air-conditioning",
    title: "Air Conditioning",
    summary:
      "Split system installations plus the electrical connections and circuits any air conditioning system needs.",
    bullets: [
      "Split system air conditioner installation",
      "Electrical connections and circuits for AC systems",
      "Switchboard provisioning for AC units",
      "Fault finding on air conditioning electrical faults",
    ],
  },
  {
    slug: "utility-scale-solar",
    title: "Utility Scale Solar Farms",
    summary:
      "Maintenance and fault finding for utility scale solar farm installations.",
    bullets: [
      "Scheduled maintenance programs",
      "Fault finding across large arrays",
      "Utility-scale electrical support",
      "Weather station installation and maintenance",
    ],
  },
];
