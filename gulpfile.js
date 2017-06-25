var requireDir = require('require-dir');
var dir = requireDir('./tasks', { recurse: true });

var gulp = require('gulp');
var watch = require('gulp-watch');

//setting
var settings = require('./gulpfile_settings');

gulp.task('watch', ['html', 'webpack', 'img', 'font'], function(){
    gulp.watch(
        settings.watch.html.files,
        ['html']
    );
    gulp.watch(
        [
		settings.watch.js.files,
		settings.watch.vue.files,
        settings.watch.css.files
        ],
        ['webpack']
    );
    gulp.watch(
        settings.watch.img.files,
        ['img']
    );
    gulp.watch(
        settings.watch.font.files,
        ['font']
    );
});

gulp.task('nodemon', ['server'], function(){
    gulp.watch(['server']);
});

gulp.task('default', ['watch', 'nodemon']);
