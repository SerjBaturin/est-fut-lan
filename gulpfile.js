const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

function css() {
  return gulp
    .src("./main.scss")
    .pipe(sass())
    .pipe(autoprefixer("last 4 versions"))
    .pipe(gulp.dest("./"));
}

function watch() {
  browserSync.init({
    server: "./",
  });
  gulp.watch("./scss/*.scss", css);
  gulp.watch("./index.html").on("change", browserSync.reload);
  gulp.watch("./scripts/*.js").on("change", browserSync.reload);
  gulp.watch("./main.scss").on("change", browserSync.reload);
  gulp.watch("./*/**.scss").on("change", browserSync.reload);
}

exports.css = css;
exports.watch = watch;
