const gulp = require("gulp");
const imageMin = require("gulp-imagemin")
const uglify = require("gulp-uglify-es").default;
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

//Optimize images
gulp.task("imageMin", (cb) => {
    gulp.src("src/img/*")
    .pipe(imageMin())
    .pipe(gulp.dest("dist/img"))
    cb()
})

//Copy index.html over to dist folder...
gulp.task("copyHTML", (cb) => {
    gulp.src("src/*.html")
    .pipe(gulp.dest("dist"))
    cb()
})

//Minify JS files
gulp.task("uglify", (cb) => {
    gulp.src("src/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
    cb()
})

//Compile SASS
gulp.task("sass", (cb) => { 
    gulp.src("src/scss/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist/css"))
    cb()
})


//Run all tasks
gulp.task("default", gulp.parallel(["sass", "uglify", "copyHTML", "imageMin"]))

//Watch for changes
gulp.task("watch", () => {
    gulp.watch("src/js/index.js", gulp.series("uglify"));
    gulp.watch("src/img/*", gulp.series("imageMin"));
    gulp.watch("src/scss/*.scss", gulp.series("sass"));
    gulp.watch("src/scss/components/*.scss", gulp.series("sass"));
    gulp.watch("src/*.html", gulp.series("copyHTML"));
})