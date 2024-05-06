const bs = require("browser-sync");
const options = require("../config");

module.exports = function bs_html() {
  return bs({
    proxy: options.proxy,
    open: true
  });
};
