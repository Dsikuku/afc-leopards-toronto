/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ingwe: {
          blue: '#0056b3',
          dark: '#0a0a0a',
          concrete: '#262626',
          accent: '#ffffff',
        },
      },
    },
  },
  plugins: [],
}