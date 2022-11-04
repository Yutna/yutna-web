import { Kanit, Taviraj, Azeret_Mono } from "@next/font/google";

export const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-kanit",
});

export const taviraj = Taviraj({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-taviraj",
});

// NOTE: Azeret Mono is a variable font, no need to add weight and style options.
export const azeretMono = Azeret_Mono({
  variable: "--font-azeret-mono",
});
