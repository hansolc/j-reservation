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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#007AFF",
        kakao: "#F9E000",
      },
      backgroundImage: {
        "home-img": "url('/assets/images/home_rest_img.png')",
      },
    },
  },
  plugins: [],
};
export default config;
