var gulp = require('gulp'),
	cleanCSS = require('gulp-clean-css'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass');

gulp.task('scss', function(){
	return gulp.src('assets/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('assets/css'));
});

gulp.task('minifyCSS', function(){
	return gulp.src('assets/css/*.css')
    .pipe(cleanCSS({
			compatibility: 'ie8'
		}))
		.pipe(rename('kjio.min.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('uglifyJS', function(){
	return gulp.src('assets/js/kjio.js')
	.pipe(rename('kjio.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('assets/js'))
});

gulp.task('minifyJS', ['uglifyJS'], function(){
	return gulp.src(['assets/js/kjio.min.js', 'assets/js/rainbow.js'])
		.pipe(concat('kjio.min.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('dist', ['minifyJS', 'minifyCSS'], function(){
	// Duplicate fonts folder into dist folder
	gulp.src('assets/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));
});

gulp.task('default', ['scss'], function(){

});

gulp.task('watch', function(){
	gulp.watch('assets/scss/**/*.scss', ['scss']);
});
