var gulp = require("gulp");
var liverelaod = require("gulp-livereload");
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;


/*// 静态服务器
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    //gulp.watch("app/scss/!*.scss", ['sass']);
    gulp.watch([
        "static/css/!*.css",
        "css/!*.css",
        "**!/!*.html"
    ]).on('change', reload);
});*/

// 代理

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "xjddemo.local.com"
    });

    //gulp.watch("app/scss/!*.scss", ['sass']);
    gulp.watch([
        "themes/68ecshopcom_360buy/*.dwt",
        "themes/68ecshopcom_360buy/*.php",
        "themes/68ecshopcom_360buy/*.css",
        "themes/68ecshopcom_360buy/library/*.lbi",
        "themes/68ecshopcom_360buy/js/*.js",
        "themes/68ecshopcom_360buy/css/*.css",
        "mobile/*.php",
        "mobile/themesmobile/68ecshopcom_mobile/*.dwt",
        "mobile/themesmobile/68ecshopcom_mobile/css/*.css",
        "mobile/themesmobile/68ecshopcom_mobile/library/*.lbi",
        "*.php",
    ]).on('change', reload);
});



/*
//livereload
gulp.task('watch', function() {
    //启动liverelaod 监听
    liverelaod.listen();

    //只监听html文件
    gulp.watch('./h5bp/!*.html', function (file) {
        console.log(file);
        gulp.src(file.path).pipe(liverelaod());
    });

});
*/


