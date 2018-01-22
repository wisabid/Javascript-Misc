const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

//try running gulp serve. it will call the below task wich in turn would call browsersyncit, wich in turn would call nodemon task. Unfortunately nodemon task isnt working..infact wen u edit entry file index.js, the nodemon is not restarting..this is verified by watching teh command prompt
gulp.task('serve', ['browsersyncit'], () => {
	console.log('Now Gonna call browserSync!');
	gulp.watch('./*.*', reload);
		//.on('change', reload);
});

gulp.task('browsersyncit', ['nodemon'], () => {
	console.log('Gonna call Nodemon!');
	browserSync({
		server : {
			baseDir : './'
		}
	});
});

gulp.task('nodemon', (callback) => {
	console.log('You are at Nodemon now!');
	//Unfortunately nodemon is not working properly
	let running = false;
	return nodemon({
		script : './index.js', //instead of manually doing 'node index.js' in console
		watch : ['./*.*'] //watch everything in this node app
	})
		.on('start', () => {
			if (!running) {
				callback();
			}
			running = true;
		})
		.on('restart', () => {
			setTimeout(()=> reload(), 500);
		});
})