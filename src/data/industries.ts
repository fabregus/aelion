import { images } from "./images";

export type Industry = {
  title: string;
  description: string;
  image: string;
  image2x?: string;
};

export const industriesIntro = {
  kicker: "INDUSTRIES WE SERVE",
  title: "Tailored Solutions for Every Environment",
};

export const industries: Industry[] = [
  {
    title: "Commercial & Corporate",
    description: "Premium FM for offices, headquarters, and business parks.",
    image: images.industries.commercial,
    image2x: images.industries.commercial2x,
  },
  {
    title: "Hospitality & Leisure",
    description: "High-touch services aligned with luxury hospitality standards.",
    image: images.industries.hospitality,
  },
  {
    title: "Residential & Mixed Use",
    description: "Reliable, discreet, and efficient support for residential complexes.",
    image: images.industries.residential,
  },
  {
    title: "Retail & Shopping Centers",
    description: "Operational continuity, cleanliness, and customer-ready environments.",
    image: images.industries.retail,
  },
  {
    title: "Industrial & Logistics",
    description: "Technical FM for warehouses, logistics hubs, and production facilities.",
    image: images.industries.industrial,
  },
  {
    title: "Education & Institutions",
    description: "Safe, compliant, and well-maintained learning environments.",
    image: images.industries.education,
  },
];
