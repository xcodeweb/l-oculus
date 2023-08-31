// gulp-imagemin: https://www.npmjs.com/package/gulp-imagemin
import imagemin, { optipng } from "gulp-imagemin";
// gulp-newer: https://www.npmjs.com/package/gulp-newer
import newer from "gulp-newer";
// gulp-webp: https://www.npmjs.com/package/gulp-webp
import webp from "gulp-webp";

// Gulp func for convert and min images
export const images = () => {
  return app.gulp
    .src(app.path.src.img)
    .pipe(newer(app.path.build.img))
    .pipe(
      app.plugins.if(
        app.config.minifyImagesInDev || app.isBuild,
        imagemin([optipng({ optimizationLevel: app.config.minifyLevelPng })])
      )
    )
    .pipe(app.gulp.dest(app.path.build.img))
    .pipe(app.plugins.if(app.config.convertImagesToWebp, webp()))
    .pipe(
      app.plugins.if(
        app.config.convertImagesToWebp,
        app.gulp.dest(app.path.build.img)
      )
    )
    .pipe(app.plugins.browsersync.stream());
};
