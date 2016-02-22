var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var tsc = require('gulp-typescript');
var tslint = require('gulp-tslint');
var tsProject = tsc.createProject('tsconfig.json');
var tsTestProject = tsc.createProject('tsTestConfig.json');
var config = require('./gulp.config')();
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var nodemon = require('gulp-nodemon');
var concat = require('gulp-concat');
var useref = require('gulp-useref');
var typescript = require('typescript');
var runSequence = require('run-sequence');
var KarmaServer = require('karma').Server;
var cordova_lib = require('cordova-lib');
var file = require('gulp-file');
var appConfig = require('./support/app.config.json');
var rm = require('gulp-rimraf');
var fs = require('fs');

var browserSync = require('browser-sync');
var superstatic = require('superstatic');

gulp.task('ts-lint', function() {
	return gulp.src([config.allTs, config.allTests])
		.pipe(tslint())
		.pipe(tslint.report('prose', {
			emitError: false
		}));
});

gulp.task('serve', function() {
	gulp.watch([config.scss], ['scss']);
});

gulp.task('default', ['serve']);
