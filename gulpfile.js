'use strict';

var autoprefixer = require('gulp-autoprefixer'),
  gulp = require('gulp'),
  minifyCSS = require('gulp-minify-css'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./src/css/main.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./dist/css'))
    .pipe(minifyCSS())
    .pipe(rename(function (path) {
      path.extname = '.min.css';
    }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('copy-deps', function () {
  gulp.src('./bower_components/normalize/normalize.css')
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('copy-demo', function () {
  gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['sass', 'copy-deps', 'copy-demo']);
