const run = require("gulp-run");
const bs = require("browser-sync");

module.exports = function blocks() {
  return run("npm run build-blocks").exec().pipe(bs.stream());
};
