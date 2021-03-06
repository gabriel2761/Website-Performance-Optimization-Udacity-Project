var gulp = require('gulp'),
	htmlmin = require('gulp-htmlmin'),
	inline = require('gulp-inline-source'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant')
	uglify = require('gulp-uglify'),
	csso = require('gulp-csso');

gulp.task('csso-bootstrap', function() {
	return gulp.src('app/views/css/bootstrap-grid.css')
		.pipe(csso())
		.pipe(gulp.dest('views/css'))
});

gulp.task('csso-print', function() {
	return gulp.src('app/css/print.css')
		.pipe(csso())
		.pipe(gulp.dest('css'))
});

gulp.task('uglify', function() {
	return gulp.src('app/js/perfmatters.js')
		.pipe(uglify())
		.pipe(gulp.dest('js'))
});

gulp.task('uglify-pizzas', function() {
	return gulp.src('app/views/js/main.js')
		.pipe(uglify())
		.pipe(gulp.dest('views/js'))
});

gulp.task('imagemin', function() {
	return gulp.src('app/img/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('img'))
});

gulp.task('minify', function() {
	return gulp.src('app/**/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(inline())
    	.pipe(gulp.dest('../gabriel2761.github.io'));
});

gulp.task('default',
	['minify',
	'imagemin',
	'uglify',
	'uglify-pizzas',
	'csso-print',
	'csso-bootstrap'
]);
