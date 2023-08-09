export const supportedToolsConfig = {
  jest: { name: "Jest", logoFilename: "jest.svg" },
  nextjs: { name: "Next.js", logoFilename: "nextjs.svg" },
  nodejs: { name: "Node.js", logoFilename: "nodejs.svg" },
  peppy: { name: "Peppy", logoFilename: "peppy.svg" },
  prettier: { name: "Prettier", logoFilename: "prettier.svg" },
  react: { name: "React", logoFilename: "react.svg" },
  tailwindcss: { name: "Tailwind CSS", logoFilename: "tailwindcss.svg" },
  typescript: { name: "TypeScript", logoFilename: "typescript.svg" },
} satisfies Record<string, SupportedToolsConfig>;

export type SupportedToolsConfig = { name: string; logoFilename: string };

export type SupportedToolsConfigConfig = typeof supportedToolsConfig;

export type SupportedToolKey = keyof SupportedToolsConfigConfig;
