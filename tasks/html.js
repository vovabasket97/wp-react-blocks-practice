const { src, dest } = require("gulp");
const include = require("gulp-file-include");
const bs = require("browser-sync");
const options = require("../config");
const rename = require("gulp-rename");

module.exports = function html() {
  return src(["src/**/*.html", "!src/components/**/*.html"])
    .pipe(include())
    .pipe(
      rename(function (path) {
        if(path.basename === 'index') path.basename = "configurator";
        path.extname = ".php";
      })
    )
    .pipe(dest(options.paths.build.configurator))
    .pipe(bs.stream());
};
