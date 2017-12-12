var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concatCss = require('gulp-concat-css'),
    spritesmith = require('gulp.spritesmith'),
    watch = require('gulp-watch'),
    webserver = require('gulp-webserver'),
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin'),
    path = require('path'),
    autoprefixer = require('gulp-autoprefixer'),
    minify = require('gulp-minify');


gulp.task('concat-css', function () {
  return gulp.src('css/dist/**/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('css/'));
});

gulp.task('sass', function () {
  return gulp.src('css/src/*/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/dist'));
});


gulp.task('sprite', function () {
    var spriteData = gulp.src('img/src/*.png').pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.css'
    }));
    return spriteData.pipe(gulp.dest('img/'));
});

gulp.task('webserver', function() {
    gulp.src('')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true,
            port: 8080
        }));
});

gulp.task('svgstore', function () {
    return gulp
        .src('img/src/employee/*.svg')
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: false
                    }
                }]
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('img'));
});

gulp.task('autoprefixer', function () {
    return gulp.src('css/bundle.css').pipe(autoprefixer({
        browsers: ['last 15 versions'],
        cascade: false
    })).pipe(gulp.dest('css/'));
});


gulp.task('compress', function() {
    gulp.src('js/src/*.js')
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('js'))
});


gulp.task('watch', function() {
    gulp.watch('css/src/*/*.scss', ['sass']);
    gulp.watch('css/dist/*/*.css', ['concat-css']);
    gulp.watch('img/src/*.png', ['sprite']);
    gulp.watch('js/src/*.js', ['compress']);
});

gulp.task('default', ['autoprefixer', 'watch', 'webserver', 'compress']);



