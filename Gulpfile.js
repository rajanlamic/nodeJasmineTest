/**
 * Created by Rajan on 02/12/2015.
 */
var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var server = require('gulp-express');

gulp.task('server', function() {
    server.run(['app.js']);
    gulp.watch(['app.js'], server.notify);
});

gulp.task('tdd', function () {
    return gulp.src('spec/*.js')
        .pipe(jasmine());
});

gulp.task('watch', ['tdd'], function() {
    gulp.watch('spec/*.js', ['tdd']);
});

gulp.task('default', ['watch']);