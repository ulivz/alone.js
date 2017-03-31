const gulp = require('gulp')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const del = require('del')

gulp.task('pack', ["clean"], function () {
	return gulp.src('./src/alone.js')
		.pipe(gulp.dest('./dist'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(gulp.dest('./dist'));
});

gulp.task('clean', function () {
	return del(['dist/*'])
});

gulp.task('run', function () {
	var watcher = gulp.watch('./src/alone.js', ['clean', 'pack']);
	watcher.on('change', function (event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
})

