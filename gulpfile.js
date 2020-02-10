const { series, parallel, src, dest, watch, gulp, path } = require('gulp');

// gulp plugins and utils
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const gutil = require('gulp-util');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const livereload = require('gulp-livereload');
const del = require('del'); // delete .temp folder after imagemin
const extReplace = require("gulp-ext-replace"); // webp convert

// postcss plugins
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const easyimport = require('postcss-easy-import');
const customProperties = require('postcss-custom-properties');
const colorFunction = require('postcss-color-function');

// imagemin compressions
const imagemin = require('gulp-imagemin');
const imageminGuetzli = require('imagemin-guetzli');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminGiflossy = require('imagemin-giflossy');
const imageminWebp = require('imagemin-webp');
//const imageminOptipng = require('imagemin-optipng');
//const imageminSvgo = require('imagemin-svgo');


const paths = {
    styles: {
        src: 'assets/css/*.css',
        dest: 'assets/built/'
    },
    scripts: {
        src: 'assets/js/*.js',
        dest: 'assets/built/'
    },
    images: {
        src: 'assets/uncompress/*',
        dest: 'assets/.temp/'
    }
}

// ---------------------------------------------------------- //

// .webp converter
function webp() {
    return src('assets/uncompress/*')
        .pipe(imagemin( [
            imageminWebp( {
                quality: 50
            })
        ]))
        .pipe(extReplace('.webp'))
        .pipe(dest('assets/.temp/'))
};

// image compression task
function giflossyTask() {
    return src('assets/uncompress/*.gif')
        .pipe(imagemin( [
            imageminGiflossy( {
                lossy: 80
            })
        ]))
        .pipe(dest('assets/.temp/'))
};

function cleanTemp() {
    return del(['assets/.temp/*.jpg', 'assets/uncompress/*.jpg']);
};

function mozjpegTask() {
    return src('assets/.temp/*.jpg')
        .pipe(imagemin( [
            imageminMozjpeg( {
                quality: 85,
                progressive: true
            })
        ]))
        .pipe(dest('assets/images/'))
        .pipe(livereload())
};

function guetzliTask() {
    return src('assets/uncompress/*.jpg')
        .pipe(imagemin( [
            imageminGuetzli( {
                quality: 85
            })
        ]))
        .pipe(dest('assets/.temp/'));
};

// end of update (don't change script bellow)

function watchTask() {
    livereload.listen();
    watch('assets/css/*.css', (cssTask));
    watch('assets/js/*.js', (jsTask));
    //watch('assets/uncompress/*.jpg', series(guetzliTask, mozjpegTask, cleanTemp, watchTask));
};

function jsTask() {
    return src('assets/js/*.js')
        .on('error', swallowError)
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(dest('assets/built/'))
};

function cssTask() {
    return src('assets/css/*.css')
        .on('error', swallowError)
        .pipe(sourcemaps.init())
        .pipe(postcss([
            easyimport(),
            customProperties(),
            colorFunction(),
            autoprefixer({overrideBrowserslist: ['last 2 version']}),
            cssnano(),
        ]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('assets/built/'))
        .pipe(livereload())
};

function swallowError(error) {
    gutil.log(error.toString())
    gutil.beep()
    this.emit('end')
};


// gulp main task list
exports.webp = series(webp); // convert all image to webp
exports.imagemin = series(parallel(giflossyTask, guetzliTask), mozjpegTask); // compress images
exports.default = series(parallel(cssTask, jsTask), watchTask);