 /**************** Gulp.js 4 configuration ****************/
const {series, parallel, src, dest, watch, gulp } = require('gulp');

const run               = require('gulp-run');
const exec              = require('child_process').exec;
const spawn             = require('cross-spawn');
const runSequence       = require('run-sequence');
const sourcemaps        = require('gulp-sourcemaps');
const postcss           = require('gulp-postcss');
const gutil             = require('gulp-util');
const child             = require('child_process');
const concat            = require('gulp-concat');
const uglify            = require('gulp-uglify');
const browserSync       = require('browser-sync').create();
const del               = require('del'); // delete .temp folder after imagemin
const extReplace        = require("gulp-ext-replace"); // webp convert

// postcss plugins
const autoprefixer      = require('autoprefixer');
const cssnano           = require('cssnano');
const easyimport        = require('postcss-easy-import');
const customProperties  = require('postcss-custom-properties');
const colorFunction     = require('postcss-color-function');

// imagemin compressions
const imagemin          = require('gulp-imagemin');
const imageminGuetzli   = require('imagemin-guetzli');
const imageminMozjpeg   = require('imagemin-mozjpeg');
const imageminGiflossy  = require('imagemin-giflossy');
const imageminWebp      = require('imagemin-webp');
//const imageminOptipng = require('imagemin-optipng');
//const imageminSvgo    = require('imagemin-svgo');

// ---------------------------------------------------------- //

// Sripts.js
function jsTask() {
    return src('assets/js/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(dest('assets/built/'))
    .pipe(browserSync.stream())
    .on('error', swallowError);
};

// Styles.css
function cssTask() {
    return src('assets/css/*.css')
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
    .pipe(browserSync.stream())
    .on('error', swallowError);
};

// Images.jpg .gif .png .webp
// GIF
function giflossyTask() {
    return src('../blog/img/*.gif')
    .pipe(imagemin( [
        imageminGiflossy( {
            lossy: 80
        })
    ]))
    .pipe(dest('../blog/imgFinal/'))
    .on('error', swallowError);
};
// JPG 1
function guetzliTask() {
    return src('../blog/img/*.{jpg,jpeg}')
    .pipe(imagemin( [
        imageminGuetzli( {
            quality: 85
        })
    ]))
    .pipe(dest('../blog/img-pre/'))
    .on('error', swallowError);
};
// JPG 2
function mozjpegTask() {
    return src('../blog/img-pre/*.{jpg,jpeg}')
    .pipe(imagemin( [
        imageminMozjpeg( {
        quality: 85,
        progressive: true
        })
    ]))
    .pipe(dest('../blog/imgFinal/'))
    .on('error', swallowError);
};
// .webp converter
function webpTask() {
    return src('../blog/imgFinal/*.{jpg,jpeg,png,gif}')
    .pipe(imagemin( [
        imageminWebp( {
            quality: 50,
            number: 6
        })
    ]))
    .pipe(extReplace('.webp'))
    .pipe(dest('../blog/webp/'))
    .on('error', swallowError);
};

function swallowError(error) {
    gutil.log(error.toString())
    gutil.beep()
    this.emit('end')
};

// Run Jekyll build
function build(done) {
    spawn('jekyll', [
        'build',
        '--config',
        '_config.yml'
    ], {
        env: process.env,
        stdio: 'ignore'
    }).on('close', reload).on('exit', done)
};

/*function jekyllBuild() {
    return src('')
    .pipe(run('bundle exec jekyll build'))
    .on('error', gutil.log)
}*/

// Serve
function serve() {
    child.spawn('jekyll', [
        'serve',
        '--livereload',
        '--incremental',
        '--watch',
        '--drafts'
    ], {
        stdio: 'inherit'
    });
}

// Reload
function reload() {
    return browserSync.reload()
}

// Serve site and watch files
function watchTask() {
    browserSync.init({
        open: true,
        ghostMode: false,
        port: 4000,
        logFileChange: true,
        logServer: 'debug',
        server: {
            baseDir: '_build'
        }
    });
    watch('_config.yml', series(build, reload));
    watch('./assets/css/*.css', series(cssTask, reload));
    watch('./assets/js/*.js', series(jsTask, reload));
    watch('./assets/uncompress/*.jpg', series(guetzliTask, mozjpegTask));
    watch('./assets/uncompress/*.gif', series(giflossyTask));
    watch('./assets/temp2/*.{jpg,jpeg,png,gif}', series(webpTask));
    watch('./_posts/**/*.+(md|markdown|MD)', series(build, reload));
    if (module.exports.drafts) {
        watch('_drafts/*.+(md|markdown|MD)', series(build, reload));
    };
    watch(['**/*.+(html|md|markdown|MD)', '!_build/**/*.*'], series(build, reload));
    watch('feed.xml', series(build, reload));
    watch('_data/**.*+(yml|yaml|csv|json)', series(build, reload));
};

function cleanTask(callback) {
    return del(['assets/.temp/*.{jpg,jpeg}', 'assets/uncompress/*.{jpg,jpeg}']);
    callback();
};

// gulp main task list
exports.js          = series(jsTask);
exports.css         = series(cssTask);
exports.jpg         = series(guetzliTask, mozjpegTask);
exports.gif         = series(giflossyTask);
exports.webp        = series(webpTask); // convert all image to webp
exports.images      = series(parallel(giflossyTask, guetzliTask), mozjpegTask, webpTask); // compress images
exports.clean       = parallel(cleanTask)
exports.watch       = series(watchTask)
//exports.default     = series(serve, parallel(cssTask, jsTask, series(parallel(giflossyTask, guetzliTask), mozjpegTask, webpTask)), jekyllBuild, watchTask);
exports.default     = parallel(serve, watchTask);