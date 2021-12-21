const postcss = require('gulp-postcss');
const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');

gulp.task('css', function () {
    const plugins = [
        autoprefixer({browsers: ['last 1 version']}),
        cssnano(),
        postcssPresetEnv()
    ];
    return gulp.src('./app/main.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./app/dest'));
});

gulp.task('watch', function(){
    gulp.watch('**/*.css', ['css']);
});

gulp.task('default', gulp.series('css', 'watch'))
