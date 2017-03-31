var gulp = require('gulp');

gulp.task('minify', function() {
	gulp.src('src/alone.js') // 匹配 'client/js/somedir/somefile.js' 并且将 `base` 解析为 `client/js/`
		.pipe(minify())
		.pipe(gulp.dest('build'));  // 写入 'build/somedir/somefile.js'
});
