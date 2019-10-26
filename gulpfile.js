'use strict';

global.$ = {
  gulp: require('gulp'),
  glp: require('gulp-load-plugins')(),
  browserSync: require('browser-sync').create(),

  paths: {
    tasks: require('./gulp/config/tasks.js'),
    root: './build',
    templates: {
      pages: 'src/templates/pages/*.pug',
      src: 'src/templates/**/*.pug',
      dest: 'build/assets/'
    },
    fonts: {
      src: 'src/fonts/**/*.*',
      dest: 'build/assets/fonts/'
    },
    styles: {
      // src: 'src/styles/app.scss',
      src: 'src/styles/**/*.scss',
      dest: 'build/assets/styles/'
    },
    images: {
      src: 'src/images/**/*.{jpg,jpeg,png}',
      dest: 'build/assets/images/'
    },
    video: {
      src: 'src/video/**/*.*',
      dest: 'build/assets/video/'
    },
    sprites: {
      src: 'src/images/sprites/*.svg',
      dest: 'build/assets/images/sprites/'
    },
    scripts: {
      libs: 'src/scripts/libs/slick.min.js',
      src: 'src/scripts/app.js',
      dest: 'build/assets/scripts/'
    }
  }
};

$.paths.tasks.forEach(function (taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  $.gulp.parallel('templates', 'fonts', 'styles', 'images', 'video', 'sprites', 'scripts'),
  $.gulp.parallel('watch', 'server')
));

$.gulp.task('build', $.gulp.series(
  'clean',
  $.gulp.parallel('templates', 'fonts', 'styles', 'images', 'video', 'sprites', 'scripts')
));