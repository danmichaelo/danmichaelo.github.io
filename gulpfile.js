var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat');


gulp.task('default', [], function () {
    gulp.src(['node_modules/normalize.css/normalize.css', 'src/*.css'])
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('dist'))
});

