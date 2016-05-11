/**
 * Returns brightest photo url from photo array
 */

// Caman = require('caman').Caman;

const getBrightest = (photoArr) => {
  let found = '';
  let max = 0;
  photoArr.forEach( photo => {
    /* Caman(photo.s3URL, function () {
      console.log(this.Analyze.calculateLevels());
    }); */

    // Not going to work due to cross-domain limitation :(

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const img = new Image();
    img.src = photo.s3URL;
    context.drawImage(img, 0, 0 );
    const divider = 10;
    let brightness = 0;
    let x = 0;
    let y = 0;
    let pixel = null;
    for (; x < img.width; x += img.width / divider) {
      for (; y < img.height; y += img.height / divider) {
        pixel = context.getImageData(x, y, 1, 1);
        brightness += pixel.data[0] / divider; // only use red channel for optimization
      }
    }
    if (brightness > max) {
      max = brightness;
      found = img.src;
    }
    return found;
  });
};

export default getBrightest;


