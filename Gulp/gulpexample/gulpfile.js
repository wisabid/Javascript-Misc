const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
/*
Top Level functions
	gulp.task - defines a task
	gulp.src = Points to file location to use
	gulp.desc = Points to output folder
	gulp.watch - Watch files and fodlers for change


*/

//Logs msg
gulp.task('hellomsg', function(){
	return console.log('Alfie! Gulp is running now'); //go to command line key in gulp hellomsg to c the output
});

//default msg task
/*gulp.task('default', function(){
	return console.log('Alfie! Default Gulp task is running now!'); //use just 'gulp' in cmd
})*/

// copy html files
gulp.task('copyHtml', function(){
	gulp.src('src/*.html')
		.pipe(gulp.dest('dist'))
});

// minify image
gulp.task('minimage', () =>
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
);


// minify js
gulp.task('minifyJS', () =>
	gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
);

// compile sass
gulp.task('compilesass', () =>
	gulp.src('src/sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('dist/css'))
);

// Concat scripts
gulp.task('concatjs', () =>
	gulp.src('src/js/*.js')
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
);

//Run all the tasks..notice that the above default task is commented..now delete dist folder and run gulp
gulp.task('default', ['hellomsg', 'copyHtml', 'minimage', 'minifyJS', 'compilesass', 'concatjs']); 


// Watch all above tasks live...run gulp watch n it will keep watching
gulp.task('watch', function(){
	gulp.watch('src/*.html', ['copyHtml']);
	gulp.watch('src/js/*.js', ['minifyJS', 'concatjs']);
	gulp.watch('src/sass/*.scss', ['compilesass']);
	gulp.watch('src/images/*', ['minimage']);
});