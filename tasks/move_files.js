const { src, dest } = require("gulp");
const bs = require("browser-sync");
const options = require("../config");

module.exports = function move_files() {
  return src([options.paths.src.components + "**/*"])
    .pipe(dest(options.paths.build.components))
    .pipe(bs.stream());
};
