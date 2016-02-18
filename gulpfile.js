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

gulp.task('compile-ts', function() {
	var sourceTsFiles = [config.allTs];

	var tsResult = gulp
		.src(sourceTsFiles)
		.pipe(sourcemaps.init())
		.pipe(tsc(tsProject));

	return tsResult.js
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.tsOutputPath));
});

gulp.task('concat', function () {
    return gulp.src('client/app/*.html')
        .pipe(useref())
        .pipe(gulp.dest('dist/app'));
});

gulp.task('compile-tests', function() {
	var sourceTsFiles = [config.allTests, config.typings];

	var tsResult = gulp
		.src(sourceTsFiles)
		.pipe(sourcemaps.init())
		.pipe(tsc(tsTestProject));

	return tsResult.js
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.tsTestOutputPath));
});

gulp.task('scss', function() {
  gulp.src(config.scss)
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('dist'));
});

gulp.task('clean', function(cb) {
	return gulp.src(['dist/*', 'www/*'], { read: false }) // much faster
   .pipe(rm({force: true}));

});

gulp.task('copy', function() {
  return gulp.src(['client/**/*.html', 'client/**/*.png', 'client/**/*.ttf', 'client/**/*.eot', 'client/**/*.woff', 'client/**/*.woff2', 'client/**/*.otf', 'client/**/*.svg', 'client/**/*.jpg', 'client/**/*.json', 'client/**/*.js', 'client/**/*.css'])
    .pipe(gulp.dest('dist'));
});

gulp.task('server', function() {

  nodemon({
    script: 'server/app',
		ignore: '**/*.*'
  });

});

gulp.task('test', function(done) {
	runSequence(['compile-tests'], function() {
		new KarmaServer({
				configFile: __dirname + '/karma.conf.js',
				singleRun: true
			}, done).start();
	});
});

gulp.task('set-env', function(done) {
  var ENV = 'local';
  return file('client/app/config/app.config.ts', 'export const ENV_URL: string = \'' + appConfig.env[ENV].url + '\';', { src: true })
    .pipe(gulp.dest('.'));
});

gulp.task('build', function(done) {
	runSequence('clean', 'set-env', 'copy', 'scss', 'ts-lint', 'concat', 'compile-ts', 'cordova-copy', function() {
		done();
	});
});

gulp.task('copy-www', function() {
	return gulp.src(['dist/app/**/*.*'])
		.pipe(gulp.dest('www'));
});

gulp.task('copy-jspm', function() {
	return gulp.src(['jspm_packages/**/*.*'])
		.pipe(gulp.dest('www/jspm_packages'));
});

gulp.task('cordova-copy', function(done) {
  runSequence('copy-www', 'copy-jspm', function() {
		done();
	});
});

gulp.task('serve', function() {
	gulp.watch([config.html, config.scss, config.allTs, 'client/**/*.json', '!client/app/config/app.config.js'], ['build']);
	gulp.watch([config.allTests], ['test']);
	runSequence('build');

});

gulp.task('default', ['serve']);
