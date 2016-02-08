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
var del = require('del');
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

gulp.task('clean', function() {
 	return del(['dist']);

});

gulp.task('copy', function() {
  return gulp.src(['client/**/*.html', 'client/**/*.png', 'client/**/*.json', 'client/**/*.js', 'client/**/*.css'])
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
  return file('client/app/app.config.ts', 'export const ENV_URL: string = \'' + appConfig.env[ENV].url + '\';', { src: true })
    .pipe(gulp.dest('.'));
});

gulp.task('build', ['set-env', 'clean'], function(done) {
	runSequence(['copy', 'scss'], ['ts-lint', 'concat', 'compile-ts'], function() {
	// runSequence(['set-env', 'copy', 'scss'], ['ts-lint', 'concat', 'compile-ts'], function() {
		if (browserSync.active) {
			browserSync.reload({
				stream: true,
				once: true
			});
		}
		done();
	});
});

gulp.task('cordova-copy', function() {
  del(['www']);
  gulp.src(['dist/app/**/*.*'])
    .pipe(gulp.dest('www'));
});

gulp.task('serve', function() {

	gulp.watch([config.html, config.scss, config.allTs, 'client/**/*.json'], ['build']);
  gulp.watch([config.allTests], ['test']);

	runSequence(['server'], ['build'], function() {
		browserSync({
			port: 9000,
	    files: ['index.html'],
	    injectChanges: true,
	    logFileChanges: false,
	    logLevel: 'silent',
	    notify: true,
	    reloadDelay: 2000
		});
	});

});

gulp.task('default', ['serve']);
