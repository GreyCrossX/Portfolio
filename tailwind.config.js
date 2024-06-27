/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'text': 'var(--text)',
        'background': 'var(--background)',
        'primary': {
          '100': '#F2E6FF',
          '200': '#D9B3FF',
          '300': '#C080FF',
          '400': '#A64DFF',
          '500': '#8C1AFF', // royal purple
          '600': '#7313E6',
          '700': '#590EBF',
          '800': '#400999',
          '900': '#260573',
        },
        'green': {
          '100': '#E6FFEB',
          '200': '#B3FFC7',
          '300': '#80FFA3',
          '400': '#4DFF80',
          '500': '#1AFF5C', // green
          '600': '#13E64C',
          '700': '#0EBF3D',
          '800': '#09992D',
          '900': '#05731E',
        },
        'blue': {
          '100': '#E6F0FF',
          '200': '#B3D1FF',
          '300': '#80B3FF',
          '400': '#4D94FF',
          '500': '#1A75FF', // blue
          '600': '#1360E6',
          '700': '#0E4DBF',
          '800': '#093A99',
          '900': '#052673',
        },
        'red': {
          '100': '#FFE6E6',
          '200': '#FFB3B3',
          '300': '#FF8080',
          '400': '#FF4D4D',
          '500': '#FF1A1A', // red
          '600': '#E61313',
          '700': '#BF0E0E',
          '800': '#990909',
          '900': '#730505',
        },
        'yellow': {
          '100': '#FFF3E6',
          '200': '#FFE0B3',
          '300': '#FFCC80',
          '400': '#FFB84D',
          '500': '#FFA31A', // yellow/orange
          '600': '#E68F13',
          '700': '#BF7A0E',
          '800': '#996609',
          '900': '#734F05',
        }},
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}