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
var typescript = require('typescript');
var runSequence = require('run-sequence');
var KarmaServer = require('karma').Server;
var del = require('del');

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

gulp.task('build', ['clean'], function(done) {
	runSequence(['copy', 'scss'], ['ts-lint', 'compile-ts'], function() {
		if (browserSync.active) {
			browserSync.reload({
				stream: true,
				once: true
			});
		}
		done();
	});
});

gulp.task('serve', function() {

	gulp.watch([config.html, config.scss, config.allTs], ['build']);
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
