import { Kanit, Taviraj, Azeret_Mono } from "@next/font/google";

export const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const taviraj = Taviraj({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

// NOTE: Azeret Mono is a variable font, no need to add an option.
export const azeretMono = Azeret_Mono();
