export type ServiceItem = {
  title: string;
  description?: string;
  bullets: string[];
};

export type ServiceCategory = {
  id: string;
  label: string;
  theme: "soft" | "hard" | "procurement";
  items: ServiceItem[];
};

export const servicesIntro = {
  kicker: "OUR SERVICES",
  title: "Integrated Facility Management Services",
  text: "AELION provides a complete suite of soft and hard FM services, delivered by trained professionals and supported by strict quality controls, modern equipment, and ISO-aligned procedures.",
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "soft",
    label: "SOFT SERVICES",
    theme: "soft",
    items: [
      {
        title: "Cleaning Services",
        description:
          "Premium cleaning solutions for offices, residential complexes, spa and wellness areas, hospitality, and high-traffic environments.",
        bullets: [
          "Daily cleaning & housekeeping",
          "Beach Cleaning",
          "Glass, façade & high-reach cleaning",
          "Robotic Cleaning",
          "Specialized cleaning for sensitive areas",
          "Deep cleaning & disinfection",
        ],
      },
      {
        title: "Landscaping & Grounds Maintenance",
        description:
          "Design, maintenance, and seasonal care for outdoor environments.",
        bullets: [
          "Garden maintenance",
          "Irrigation systems",
          "Tree care & pruning",
          "Seasonal planting & enhancements",
        ],
      },
      {
        title: "Waste Management",
        description:
          "Efficient, compliant, and environmentally responsible waste handling.",
        bullets: [
          "Recycling Services",
          "Hazardous & Special Waste Handling",
          "Waste Collection & Transportation",
        ],
      },
      {
        title: "Security Services",
        description: "Trained guards ensure safety of people and property.",
        bullets: [
          "Access Control & Monitoring",
          "24/7 Protection",
        ],
      },
      {
        title: "Pest Control Services",
        description: "Disinfection and pest elimination.",
        bullets: [
          "Pest elimination",
          "Microbe Disinfection",
          "Bird repellants",
          "Reptile repellants",
          "Fumigation",
        ],
      },
    ],
  },
  {
    id: "hard",
    label: "HARD SERVICES",
    theme: "hard",
    items: [
      {
        title: "Technical Maintenance",
        description: "Full lifecycle maintenance for building systems.",
        bullets: [
          "HVAC, electrical, plumbing, swimming pools MEP",
          "Pool Cleaning",
          "Preventive & corrective maintenance",
          "Energy optimization",
          "Asset condition reporting",
          "KNX & BMS services",
        ],
      },
      {
        title: "Repairs & On-Demand Works",
        description:
          "Rapid response for urgent issues and small-scale works.",
        bullets: [
          "Emergency repairs",
          "Minor construction",
          "Painting & refurbishments",
          "Carpentry, metalwork, glazing",
        ],
      },
      {
        title: "Building Operations",
        description:
          "Ensuring safe, compliant, and efficient daily operations.",
        bullets: [
          "Facility supervision",
          "Health & safety compliance",
          "Fire safety systems",
          "Access control & security coordination",
        ],
      },
      {
        title: "Specialized Wooden Surface Repairs and Upholstering",
        description: "Professional restoration of wooden furniture.",
        bullets: [
          "Repair and reupholstering of furniture",
          "Wooden Deck maintenance",
        ],
      },
      {
        title: "Issuance & Renewal of Certificates",
        bullets: [
          "F-GAS Compliance",
          "ISO & Hygiene Advisory Services",
        ],
      },
    ],
  },
  {
    id: "procurement",
    label: "PROCUREMENT MANAGEMENT",
    theme: "procurement",
    items: [
      {
        title: "Strategic sourcing and supplier coordination",
        description:
          "Strategic sourcing and supplier coordination to ensure quality materials, equipment, and services at competitive market conditions.",
        bullets: [
          "Centralized procurement management",
          "Order consolidation",
          "Supplier network management",
          "Streamlined administration",
          "Competitive sourcing",
        ],
      },
    ],
  },
];
