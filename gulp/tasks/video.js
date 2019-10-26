// video

module.exports = function () {
  $.gulp.task('video', function () {
    return $.gulp.src($.paths.video.src)
      .pipe($.gulp.dest($.paths.video.dest));
  });
}