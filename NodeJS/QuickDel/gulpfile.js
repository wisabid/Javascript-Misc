const gulp = require('gulp');

gulp.task('runserver', function () {
	console.log('Changes detected in file! Restarting Server...');
	// exec('node express-trial.js', function(err, stdout, stderr) {
	// 		console.log(stdout);
	// 		console.log(stderr);
	// })

})

gulp.task('watch', function () {
	gulp.watch('./*.js', ['runserver']);
	gulp.watch('./*.html', ['runserver']);

})