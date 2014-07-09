var fs = require('fs');

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var clean = require('gulp-clean');
var nodemon = require('gulp-nodemon');
var runSequence = require('run-sequence');
var Combine = require('stream-combiner');

var appsrc = 'apps-src';
var appsrv = 'server/apps';
var apppub = 'public/apps';

var apps = fs.readdirSync(appsrc);

gulp.task('apps-browserify', function () {
    return Combine.apply(this, apps.map(function (appDir) {
        return gulp.src(appsrc + '/' + appDir + '/client/main.js')
            .pipe(browserify({transform: 'reactify'}))
            .pipe(gulp.dest(apppub + '/' + appDir + '/client/'));
    }));
});

gulp.task('apps-copy-assets', function () {
    return gulp.src(appsrc + '/*/public/**/*')
        .pipe(gulp.dest(apppub + '/'));
});

gulp.task('apps-copy-server', function () {
    return gulp.src(appsrc + '/*/server/**/*')
        .pipe(gulp.dest(appsrv + '/'));
});

gulp.task('apps-clean', function () {
    return gulp.src(apppub + '/*', {read: false})
        .pipe(clean());
});

gulp.task('apps-clean-server', function () {
    return gulp.src(appsrv + '/*', {read: false})
        .pipe(clean());
});

gulp.task('apps-build', function () {
    return runSequence('apps-clean', ['apps-browserify', 'apps-copy-assets', 'apps-copy-server']);
});

gulp.task('apps-watch', function () {
    return gulp.watch(appsrc + '/**/*', ['apps-build']);
});

gulp.task('nodemon', function () {
    return nodemon({
        script: 'server/index.js',
        ext: 'js',
        watch: 'server'
    });
});

gulp.task('server', function () {
    return runSequence('apps-build', ['nodemon', 'apps-watch']);
});
