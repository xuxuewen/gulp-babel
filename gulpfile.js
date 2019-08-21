const {src,dest} = require('gulp');
const babel = require("gulp-babel");


function defaultTask(cb) {
  src('./js/**/*.js')
  .pipe(babel())
  .pipe(dest('./dist/js'))
  cb();
}

exports.default = defaultTask