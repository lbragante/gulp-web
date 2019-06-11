const gulp = require('gulp')
const html = require('gulp-htmlmin')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const js = require('gulp-uglify')
const concat = require('gulp-concat')


gulp.task('default', watch)
gulp.task('html', minificaHtml)
gulp.task('sass', compilaSass)
gulp.task('js', minificaJs)


function minificaHtml() {
    return gulp
        .src('src/**/*.html')
        .pipe(html({ collapseWhitespace: true }))
        .pipe(gulp.dest('public/'))
}

function compilaSass() {
    return gulp
        .src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        //.pipe(sass({ outputStyle: 'compressed' }))
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(concat('estilos.min.css'))
        .pipe(gulp.dest('public/css'))
}

function minificaJs() {
    return gulp
        .src('src/js/**/*.js')
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('public/js'))
}

function watch() {
    gulp.watch('src/sass/**/*.scss', compilaSass)
    gulp.watch('src/**/*.html', minificaHtml)
    gulp.watch('src/js/**/*.js', minificaJs)
}

