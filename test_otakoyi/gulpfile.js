'use strict';

var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),
  spritesmith = require('gulp.spritesmith'),
  watch = require('gulp-watch'),
  del = require('del');

// Компиляция SCSS в CSS
gulp.task('sass', function() {
  return gulp.src('src/styles/style.scss')
  .pipe(sass())
  .pipe(gulp.dest('build/css/'));
});


// Минификация файла script.js
gulp.task('compress-js', function() {
  return gulp.src('src/js/script.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js/'));
});

// Очистка папки build перед перезаписью файлов
gulp.task('clean', function() {
  return del('build');
});

// Копирование необходимых файлов из папки src в папку build
gulp.task('copy', function() {
    gulp.src(['src/js/classList.min.js', 'src/js/jquery.jcarousel-core.min.js', 'src/js/jquery.jcarousel-autoscroll.min.js', 'src/js/jquery.jcarousel-control.min.js', 'src/js/jquery.jcarousel-pagination.min.js'])
        .pipe(gulp.dest('build/js/'))
    gulp.src(['src/styles/reset.css'])
        .pipe(gulp.dest('build/css/'))
    gulp.src('src/img/**/*')
        .pipe(gulp.dest('build/img/'))
    gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('build/fonts/'))
});


// Сборка спрайта из нескольких картинок
gulp.task('sprite', function () {
  var spriteData = gulp.src('src/img/sprite-contact/*.png')
    .pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.scss',
    algorithm: 'left-right'
  }));
  return spriteData.pipe(gulp.dest('build/img/sprite-contact-icons/'));
});

// Отслеживание изменений файлов *.scss и script.js
gulp.task('watch', function () {
  gulp.watch('src/styles/*.scss', ['sass']);
  gulp.watch('src/js/script.js', ['compress-js']);
});

// Установка операций по умолчанию при запуске команды gulp
gulp.task('default', ['sass', 'compress-js', 'copy', 'watch']);