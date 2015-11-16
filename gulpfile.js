var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var tsc = require('gulp-typescript');
var tslint = require('gulp-tslint');
var tsProject = tsc.createProject('tsconfig.json');
var config = require('./gulp.config')();
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');

var browserSync = require('browser-sync');
var superstatic = require('superstatic');

gulp.task('ts-lint', function() {
	return gulp.src(config.allTs)
		.pipe(tslint())
		.pipe(tslint.report('prose', {
			emitError: false
		}));
});

gulp.task('compile-ts', function() {
	var sourceTsFiles = [
		config.allTs,
		config.typings
	];

	var tsResult = gulp
		.src(sourceTsFiles)
		.pipe(sourcemaps.init())
		.pipe(tsc(tsProject));

	return tsResult.js
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.tsOutputPath));
});

gulp.task('scss', function() {
  gulp.src(config.scss)
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
 	return gulp.src('dist/**/*.*', {read: false})
   .pipe(clean());

});

gulp.task('copy', function() {
  return gulp.src(['app/**/*.html'])
    .pipe(gulp.dest('dist'));
});

gulp.task('serve', function() {


  gulp.watch([config.allTs], ['ts-lint', 'compile-ts']);
	gulp.watch([config.scss], ['scss', 'compile-ts']);
	gulp.watch([config.html], ['copy', 'compile-ts']);

	runSequence(['clean'], ['copy', 'scss'], ['ts-lint', 'compile-ts'], function() {
		browserSync({
			port: 3000,
	    files: ['index.html', '**/*.js'],
	    injectChanges: true,
	    logFileChanges: false,
	    logLevel: 'silent',
	    notify: true,
	    reloadDelay: 0,
	    server: {
	      baseDir: './dist'
	    }
		});
	});

});

gulp.task('default', ['serve']);
