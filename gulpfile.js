const { series, parallel, src, dest, watch, gulp } = require('gulp');

// gulp plugins and utils
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const gutil = require('gulp-util');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const livereload = require('gulp-livereload');

// postcss plugins
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const easyimport = require('postcss-easy-import');
const customProperties = require('postcss-custom-properties');
const colorFunction = require('postcss-color-function');


function watchTask() {
    livereload.listen();
    watch('assets/css/*.css', (cssTask));
    watch('assets/js/*.js', (jsTask));
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
exports.default = series(parallel(cssTask, jsTask), watchTask);