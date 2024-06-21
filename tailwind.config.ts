import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#111322",
        gray: {
          50: "#7D7986",
          40: "#A4A1AA",
          30: "#CBC9CF",
          20: "#E5E4E7",
          10: "#F2F2F3",
          5: "#FAFAFA",
        },
        red: {
          40: "#FF4040",
          30: "#FF8D72",
          20: "#FFAF9B",
          10: "#FFEBE7",
        },
        blue: {
          20: "#0080FF",
          10: "#CCE6FF",
        },
        green: {
          20: "#20A81E",
          10: "#D4F7D4",
        },
        kakao: "#FEE500",
      },
    },
  },
  plugins: [],
};
export default config;
