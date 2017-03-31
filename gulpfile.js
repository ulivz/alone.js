const gulp = require('gulp')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const del = require('del')

gulp.task('pack', ["clean"], function () {
	return gulp.src('./src/alone.js')
		.pipe(gulp.dest('./dist'))    //输出all.js到文件夹
		.pipe(rename({ suffix: '.min' }))   //rename压缩后的文件名
		.pipe(uglify())    //压缩
		.pipe(gulp.dest('./dist'));  //输出
});

gulp.task('clean', function () {
	return del(['dist/*'])
});

var watcher = gulp.watch('src/*.js', ['clean','pack']);

watcher.on('change', function(event) {
	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});