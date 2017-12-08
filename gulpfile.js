//Pluging in plugins
var gulp = require("gulp"),
    sass = require("gulp-sass");
    livereload = require('gulp-livereload');
    minifyCss = require('gulp-minify-css');

// gulp.task("sass", function () {
//     return gulp.src("sass/style.scss")
//     .pipe(sass({
//         //makes css minified
//         outputStyle:"compressed"
//     })
//     .on("error", sass.logError))
//     .pipe(gulp.dest("css/"));
// });

//Server Task
gulp.task('serve', function (event) {
    connect.server({
        root: '',
        port: 1988,
        livereload: true
    });
});

//Styles Task
gulp.task('styles', function () {
    gulp.src('sass/**/style.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifyCss())
        .pipe(gulp.dest('css/'))
        .pipe(connect.reload());
});

//HTML Task
gulp.task('html', function () {
    gulp.src('./*.html')
        .pipe(connect.reload());
});

//Watch Task
gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', ['styles']);
    gulp.watch('./*.html', ['html']);
    gulp.watch('js/*.js', ['lint']);
    gulp.watch('views/*.jade', ['templates']);
});

// gulp.task('default', ['serve', 'styles', 'html', 'lint', 'watch']);
gulp.task('default', ['serve', 'styles', 'html', 'watch']);
