var gulp = require('gulp');

var uglify = require('gulp-uglify');

gulp.task('script',function(){
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist'))
})

gulp.task('auto',function(){
	gulp.watch('js/*.js',['script']);
})

gulp.task('default',['script','auto']);