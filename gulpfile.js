var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var del = require("del");

gulp.task("watch", function(){
   gulp.watch("src/*.ts", ['build']);
});

gulp.task("clean", function(){
   del("dist/"); 
});

gulp.task("build", ['clean'], function(){
    return gulp.src("src/*.ts").pipe(ts(tsProject)).js.pipe(gulp.dest("dist")); 
});

gulp.task("default", ['build'], function(){
   
});