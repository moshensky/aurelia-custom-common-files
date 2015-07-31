var gulp = require('gulp');
var runSequence = require('run-sequence');
var to5 = require('gulp-babel');
var paths = require('../paths');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');
var jade = require('gulp-jade');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build-html-es6', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.output + 'es6'));
});

gulp.task('build-es6', ['build-html-es6'], function () {
  return gulp.src(paths.source)
    .pipe(gulp.dest(paths.output + 'es6'));
});

gulp.task('build-html-commonjs', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.output + 'commonjs'));
});

gulp.task('build-commonjs', ['build-html-commonjs'], function () {
  return gulp.src(paths.source)
    .pipe(to5(assign({}, compilerOptions, {modules:'common'})))
    .pipe(gulp.dest(paths.output + 'commonjs'));
});

gulp.task('build-html-amd', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.output + 'amd'));
});

gulp.task('build-amd', ['build-html-amd'], function () {
  return gulp.src(paths.source)
    .pipe(to5(assign({}, compilerOptions, {modules:'amd'})))
    .pipe(gulp.dest(paths.output + 'amd'));
});

gulp.task('build-css-system', function () {
  return gulp.src(paths.css)
    .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('build-html-system', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.output + 'system'));
});

// TODO: generate maps conditionaly based on config!
gulp.task('build-js-system', function () {
  return gulp.src(paths.source)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(to5(assign({}, compilerOptions, {modules:'system'})))
    .pipe(sourcemaps.write({includeContent: true}))
    .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('build-system', ['build-html-system', 'build-css-system', 'build-js-system']);


gulp.task('compile-jade', function () {
  return gulp.src(paths.jade)
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('src/.'));
});

gulp.task('compile-less', function () {
  return gulp.src(paths.less)
    .pipe(less())
    .pipe(gulp.dest('src/.'));
});


gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    'compile-jade',
    'compile-less',
    ['build-es6', 'build-commonjs', 'build-amd', 'build-system'],
    callback
  );
});
