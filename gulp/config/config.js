// html: html, pug
// style: scss, less
// framework: false, tailwind

export const config = {
  mode: {
    html: "html",
    style: "scss",
    framework: false,
  },
  minifyHtml: true,
  minifyCss: true,
  convertImagesToWebp: false,
  minifyImagesInDev: false,
  minifyLevelPng: 4,
  cleanImages: false,
};

/* mode: {
  html - html mode
  style - style mode
  framework - set css framework (example: "tailwind")
}
minifyHtml - enable/disable html minify
minifyCss - enable/disable css minify
convertImagesToWebp - enable/disable convert images to webp
minifyImagesInDev - enable/disable minify images in dev mode
minifyLevel - level of minify images from 0 to 7
cleanImages - clean images all time when watch
*/
