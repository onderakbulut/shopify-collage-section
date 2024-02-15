var gulp = require('gulp');
var postcss = require('gulp-postcss'); //For Compiling tailwind utilities with tailwind config
var tailwindcss = require('tailwindcss');
var autoprefixer = require('autoprefixer'); // Adds prefixes for browser compliant 
var cssnano = require('cssnano'); // Minify css files
var sass = require('gulp-sass')(require('sass')); //For Compiling SASS files
var purgecss = require("gulp-purgecss"); // Remove Unused CSS from Styles

// Run:
// gulp sass
// Complies sass only once
gulp.task('sass', function() {
    var processors = [
        tailwindcss,
        autoprefixer,
        cssnano
    ];
    return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./assets'));
});

gulp.task('prod', function() {
    var processors = [
        tailwindcss,
        autoprefixer
    ];
    return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(purgecss({
        content: ['./*.html',"./**/*.liquid","./assets/*.js"],        
        defaultExtractor: content => {
            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
            const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
            return broadMatches.concat(innerMatches)
        }
    
    }))
    .pipe(gulp.dest('./assets'));
});

// Run:
// gulp watch
// Starts watcher and keeps compiling the css file as you make changes
gulp.task('watch', function () {
    gulp.watch(["./sass/*.scss","./*.html","./**/*.liquid"], gulp.series('prod'));
});