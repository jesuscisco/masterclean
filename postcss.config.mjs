/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // nuevo plugin
    autoprefixer: {},
  },
};

export default config;
