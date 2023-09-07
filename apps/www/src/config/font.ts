import {
  Inter as FontSans,
  JetBrains_Mono as FontMono,
} from "next/font/google";

const sans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
const mono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontConfig = { sans, mono };
