var gulp = require('gulp'),
	htmlmin = require('gulp-htmlmin'),
	inline = require('gulp-inline-source'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant');

gulp.task('imagemin', function() {
	return gulp.src('app/img/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('dist/img'))
});

gulp.task('minify', function() {
	return gulp.src('app/**/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(inline())
    	.pipe(gulp.dest('dist'));
});

gulp.task('default', function() {
	console.log('hello');
});
