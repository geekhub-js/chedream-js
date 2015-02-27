var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var minifyCSS = require('gulp-minify-css');

gulp.task('default', function () {
    gulp.src(['bower_components/angular-loading/angular-loading.css', 'styles/*.css'])
        .pipe(concatCss("style.css"))
        .pipe(gulp.dest('css/'))
        .pipe(minifyCSS({keepBreaks:true}));
});
