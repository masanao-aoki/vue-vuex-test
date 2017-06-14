var gulp = require('gulp');
var webpackStream = require("webpack-stream");
var webpack = require("webpack");
var plumber = require('gulp-plumber');

//setting
var webpackConfig = require('../webpack.config');
var settings = require('../gulpfile_settings');

gulp.task('webpack', function () {
    return gulp.src('')
        .pipe(plumber())
        .pipe(webpackStream(webpackConfig,webpack))
        .pipe(gulp.dest('')
    );
});
