import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#000000",
          light: "#171717",
        },
        white: "#FFF",
        purple: "#8430AC",
        lightGray: "#EAEAEA",
        grey: "#D3D3D3",
        hover: "#d2a0f8",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
        },
      },
    },
  },

  plugins: [],
};
export default config;
