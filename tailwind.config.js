module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safeList: [
    {
      pattern: /from-(green|blue|gray)-(100|200|300|400)/,
    },
    {
      pattern: /to-(green|blue|gray)-700/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}