var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	postcss      = require('gulp-postcss'),
    sourcemaps   = require('gulp-sourcemaps');

gulp.task('autoprefixer', function () {
        return gulp.src('*.css')
        autoprefixer()
        .pipe(gulp.dest('./dest'));
});

gulp.task('default', function () {
    return gulp.src('**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dest'));
});