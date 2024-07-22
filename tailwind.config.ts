import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xs": { min: "300px" },
        xs: { max: "575px" }, // Mobile (iPhone 3 - iPhone XS Max).
        sm: { min: "576px", max: "897px" }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
        md: { min: "898px", max: "1199px" }, // Tablet (matches max: iPad Pro @ 1112px).
        lg: { min: "1200px" }, // Desktop smallest.
        xl: { min: "1259px" }, // Desktop wide.
        "2xl": { min: "1359px" }, // Desktop widescreen.
      },
    },
  },
};

export default config;
