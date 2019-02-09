var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    mixins = require('postcss-mixins'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    browserSync = require('browser-sync').create(),
    hexrgba = require('postcss-hexrgba');


gulp.task('styles', styles);
function styles() {
  console.log("Styles task ran");
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
  
};

gulp.task('watch', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  gulp.watch('./app/**/*.html', function(done) {
    browserSync.reload();
    if (done) done();
  });
  gulp.watch('./app/assets/styles/**/*.pcss', function(done) {
    console.log("starting styles");
    cssInject();
    if (done) done();
  });
});

gulp.task('cssInject', cssInject);
function cssInject() {
  styles();
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
};