const { src, dest } = require("gulp");
const bs = require("browser-sync");
const options = require("../config");

module.exports = function move_files() {
  return src([options.paths.src.configurator + "**/*"])
    .pipe(dest(options.paths.build.configurator))
    .pipe(bs.stream());
};
