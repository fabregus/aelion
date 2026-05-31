import { images } from "./images";

export type Industry = {
  title: string;
  description: string;
  image: string;
};

export const industriesIntro = {
  kicker: "INDUSTRIES WE SERVE",
  title: "Tailored Solutions for Every Environment",
};

export const industries: Industry[] = [
  {
    title: "Commercial & Corporate",
    description: "Premium FM for offices, headquarters, and business parks.",
    image: images.stock.alexanderTsang,
  },
  {
    title: "Hospitality & Leisure",
    description: "High-touch services aligned with luxury hospitality standards.",
    image: images.sections.group533,
  },
  {
    title: "Residential & Mixed Use",
    description: "Reliable, discreet, and efficient support for residential complexes.",
    image: images.sections.mask1,
  },
  {
    title: "Retail & Shopping Centers",
    description: "Operational continuity, cleanliness, and customer-ready environments.",
    image: images.sections.group534,
  },
  {
    title: "Industrial & Logistics",
    description: "Technical FM for warehouses, logistics hubs, and production facilities.",
    image: images.sections.group535,
  },
  {
    title: "Education & Institutions",
    description: "Safe, compliant, and well-maintained learning environments.",
    image: images.stock.klio,
  },
];
