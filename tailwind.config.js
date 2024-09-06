/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        heading: ['Montserrat', 'Poppins', 'Georgia', 'serif'],
        serif: ['Merriweather', 'Playfair Display', 'serif'],
        code: ['Source Code Pro', 'Fira Code', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite', // slow circular motion
      },
    },
  },
  plugins: [],
};
