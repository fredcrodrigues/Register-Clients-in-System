module.exports = {
  content: ['./src/pages/**/*.{html,js,jsx,tsx}', 
            './src/components/**/*.{html,js,tsx,jsx}'],
  safelist: [
      /^bg-/,
      /^to-/,
      /^from-/,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
