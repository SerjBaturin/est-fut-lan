const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')

function css () {
  return gulp.src('./main.css')
  .pipe(autoprefixer('last 2 versions'))
  .pipe(gulp.dest('./media'))
}

function watch () {

  gulp.watch('./main.css', css)
}

exports.css = css
exports.watch = watch