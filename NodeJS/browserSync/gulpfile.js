const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync'); //require dep plugin


gulp.task('live-reload', ['compilesass'], browserSync.reload);

gulp.task('compilesass', () => {
	gulp.src('sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('css'))
});

//
gulp.task('watch', function() {
	//set this config
	browserSync({
		server : {
			baseDir : './'
		}
	})
	//watch and call the task consisting of browserSync.reload
	gulp.watch('sass/*.scss', ['live-reload']);
	gulp.watch('./*.html', ['live-reload'])
});