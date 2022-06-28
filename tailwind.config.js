/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /bg-('green' | 'blue' | 'gray')-(100|200|300|400|500|600|700)/,
      variants: ['lg', 'hover', 'focus'],
    },
    /^from-/,
    /^to-/,
    /^bg-/,

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
