/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    defaultExtendTheme: "dark",
    themes: {
      dark: {
        colors: {
          danger: {
            DEFAULT: "#7f1d1d"
          },
          default: {
            DEFAULT: "#2A2A40"
          },
          content1: {
            DEFAULT: "#12132A"
          }
        }
      }
    }
  })]

}

