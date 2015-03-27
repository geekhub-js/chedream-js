var gulp = require('gulp'),
    concatJs = require('gulp-concat'),
    minifyJs = require('gulp-uglify'),
    less = require('gulp-less'),
    clean = require('gulp-clean');

gulp.task('less', function() {
    return gulp.src(['styles/*.less'])
        .pipe(less({compress: true}))
        .pipe(gulp.dest('css/'));
});

gulp.task('clean', function () {
    return gulp.src(['css/*'])
        .pipe(clean());
});

gulp.task('default', ['clean'], function () {
    var tasks = ['less'];

    tasks.forEach(function (val) {
        gulp.start(val);
    });
});

gulp.task('watch', function () {
    var css = gulp.watch('styles/*.less', ['less']);
});