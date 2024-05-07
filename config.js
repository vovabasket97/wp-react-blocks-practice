module.exports = {
  proxy: "http://localhost:8888/organization/wp-blocks/",
  config: {
    tailwindjs: "./tailwind.config.js",
    port: 9050,
  },
  paths: {
    root: "./",
    src: {
      base: "./src",
      blocks: './src/blocks',
      scss: "./src/scss",
      js: "./src/js",
      img: "./src/img",
      fonts: "./src/fonts/",
      components: "./src/components/",
      cart: "./src/cart/"
    },
    build: {
      base: "./build",
      css: "./build/css",
      js: "./build/js",
      img: "./build/img",
      fonts: "./build/fonts/",
      components: "./build/components",
      cart: "./parts",
    },
  },
};
