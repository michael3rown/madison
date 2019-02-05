// Include gulp
var gulp = require('gulp');

// Include Plugins
var less = require('gulp-less'); // Compiles LESS into CSS.
var cleanCSS = require('gulp-clean-css'); // Minifies CSS.
var renameCSS = require('gulp-rename'); //Rename files.

// Path Variables
var paths = {
	less: 'less',
	css: 'css'
};

// Compile style.less and Minify style.css
gulp.task('multi-less', function() {
	return gulp.src(paths.less + '/style.less')
		.pipe(less())
		.pipe(gulp.dest(paths.css))
});

// Watch Files for Changes
gulp.task('watch', function() {
	gulp.watch(paths.less + '/*.less', ['multi-less']);
	gulp.watch(paths.less + '/cms_elements/*.less', ['multi-less']);
});

// Default Task
gulp.task('default', ['multi-less']);