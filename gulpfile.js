var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
let uglify = require('gulp-uglify-es').default;
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var del = require('del');

var paths = {
	styles: {
		src: 'src/styles/*.scss',
		dest: 'assets/styles/',
	},
	scripts: {
		src: 'src/scripts/*.js',
		dest: 'assets/scripts/',
	},
	images: {
		src: 'src/images/*',
		dest: 'assets/images/',
	},
};

function clean() {
	return del(['assets']);
}

function styles() {
	return gulp
		.src(paths.styles.src)
		.pipe(sass())
		.pipe(cleanCSS())
		.pipe(
			rename({
				basename: 'app',
				suffix: '.min',
			})
		)
		.pipe(gulp.dest(paths.styles.dest));
}

function scripts() {
	return gulp
		.src(paths.scripts.src, { sourcemaps: true })
		.pipe(uglify())
		.pipe(concat('app.min.js'))
		.pipe(gulp.dest(paths.scripts.dest));
}

function images() {
	return gulp
		.src(paths.images.src, { sourcemaps: true })
		.pipe(gulp.dest(paths.images.dest));
}

function watch() {
	gulp.watch(paths.scripts.src, scripts);
	gulp.watch(paths.styles.src, styles);
}

var build = gulp.series(clean, gulp.parallel(styles, scripts, images));

exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.watch = watch;
exports.build = build;
exports.default = build;
