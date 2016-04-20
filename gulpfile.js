var gulp = require('gulp');

var PATHS = {
    src: 'src/**/*.ts',
    html: 'src/**/*.html'
};

gulp.task('clean', function (done) {
    var del = require('del');
    del(['dist'], done);
});

gulp.task('ts2js', function () {
    var typescript = require('gulp-typescript');
    var tscConfig = require('./tsconfig.json');

    var tsResult = gulp
        .src([PATHS.src, 'node_modules/angular2/typings/browser.d.ts'])
        .pipe(typescript(tscConfig.compilerOptions));

    return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('html', function () {
    return gulp.src(PATHS.html)
        .pipe(gulp.dest('dist'));
});

gulp.task('play', ['ts2js', 'html'], function () {
    var express = require('express');
    var serveStatic = require('serve-static');
    var open = require('open');

    var port = 9000;
    var app = express();

    gulp.watch(PATHS.html, ['html']);
    gulp.watch(PATHS.src, ['ts2js']);

    app.use(serveStatic(__dirname));
    app.use(serveStatic(__dirname + '/dist'));

    app.listen(port, function () {
        open('http://localhost:' + port);
    });
});

gulp.task('default', ['play']);
