import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      keyframes:{
        'appear':{
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          }
        },
        'up-to-down':{
          '0%':{
            transform: 'translateY(-100%)'
          },
          '100%':{
            transform: 'translateY(100%)'
          }
        }
      },
      animation:{
        'appear' : 'appear linear .6s forwards ',
        'up-to-down': 'up-to-down linear 0.6s forwards'
      },
      boxShadow:{
        'white-xl': '0 0px 25px -12px 130f40',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
