var gulp = require('gulp'),
	htmlmin = require('gulp-htmlmin'),
	inline = require('gulp-inline-source');

gulp.task('minify', function() {
	return gulp.src('app/**/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(inline())
    	.pipe(gulp.dest('dist'));
});

gulp.task('default', function() {
	console.log('hello');
});
