/**
 * Brand palette — keep in sync with colors.txt at project root.
 */
export const colors = {
  white: "#FFFFFF",
  navy: "#1A213D",
  gray: "#707070",
  black: "#000000",
  cream: "#F9F5F3",
  dark: "#0A1D2E",
  primary: "#02AF9F",
  slate: "#6A6F81",
  surface: "#F7F7F7",
} as const;

export type BrandColor = keyof typeof colors;
