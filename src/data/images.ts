/**
 * Image paths under public/images — single source of truth for asset URLs.
 */
export const images = {
  brand: {
    logoWhite: "/images/logo-white.png",
    logoBlack: "/images/logo-black.png",
    favicon: "/favicon.png",
    appleTouchIcon: "/apple-touch-icon.png",
  },
  hero: {
    src: "/images/hero-exterior.png",
    src2x: "/images/hero-exterior@2x.png",
    alt: "Luxury facility exterior at dusk",
  },
  whoWeAre: {
    photo: "/images/who-we-are-building.png",
    background: "/images/who-we-are-bg.png",
    background2x: "/images/who-we-are-bg@2x.png",
  },
  philosophy: {
    photo: "/images/philosophy-library.png",
  },
  esg: {
    photo: "/images/esg-forest.png",
  },
  cta: {
    background: "/images/cta-skyline.jpg",
  },
  industries: {
    commercial: "/images/industry-commercial.png",
    commercial2x: "/images/industry-commercial@2x.png",
    hospitality: "/images/industry-hospitality.png",
    residential: "/images/industry-residential.png",
    retail: "/images/industry-retail.png",
    industrial: "/images/industry-industrial.png",
    education: "/images/industry-education.png",
  },
  partners: {
    bluegame: "/images/partner-bluegame.png",
  },
} as const;
