const gulp = require("gulp");
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify'); // for js minify
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

function style(){
	return gulp.src('./src/scss/**/*.scss')
	.pipe(sass())
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(gulp.dest('./public/css'))
	.pipe(browserSync.stream());
}

gulp.task('js', function() {
   return gulp.src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/bootstrap/dist/js/bootstrap.js',
            'node_modules/owl.carousel/dist/owl.carousel.min.js',
            'src/js/**/*.js'
        ])
        .pipe(minify())
        .pipe(concat('script.js'))
        .pipe(gulp.dest('public/js'));
});


function watch(){
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.watch('./src/scss/**/*.scss', style);
	gulp.watch('./*html').on('change', browserSync.reload);
	gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;

