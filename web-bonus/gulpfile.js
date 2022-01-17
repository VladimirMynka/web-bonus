//const gulp = require("gulp");
//const concat = require("gulp-concat");
//var del = require('del');

var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");

gulp.task("hello", function () {
    console.log("hello");
});

gulp.task("default", function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['TScript/Program.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest("js"));
});