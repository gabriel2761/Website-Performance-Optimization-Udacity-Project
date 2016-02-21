var gulp = require('gulp'),
	htmlmin = require('gulp-htmlmin'),
	inline = require('gulp-inline-source'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant')
	uglify = require('gulp-uglify');

gulp.task('uglify', function() {
	return gulp.src('app/js/perfmatters.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
});

gulp.task('uglify-pizzas', function() {
	return gulp.src('app/views/js/main.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/views/js'))
});

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

gulp.task('default', ['minify', 'imagemin', 'uglify', 'uglify-pizzas']);
