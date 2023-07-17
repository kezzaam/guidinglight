module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        chivo: 'Chivo, sans-serif',
        chivoItalic: 'Chivo-Italic, sans-serif',
      },
      colors: {
        cetaceanblue: '#111033',
        intensewhite: '#F8F9FA',
        bluegrey: '#619DC3',
        fuzzywuzzy: '#CC6666',
        deer: '#B78E5C',
        magenta: '#95344F',
        fawn: '#EFA970',
        emerald: '#34957A',
        vegasgold: '#C3B861',
      },
    },
  },
  plugins: [],
};
