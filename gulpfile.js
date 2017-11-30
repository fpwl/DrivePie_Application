var gulp = require("gulp"),
    sass = require("gulp-sass");

gulp.task("sass", function () {
    return gulp.src("sass/style.scss")
    .pipe(sass({
        //makes css minified
        outputStyle:"compressed"
    })
    .on("error", sass.logError))
    .pipe(gulp.dest("css/"));
});