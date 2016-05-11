/**
 * Returns brightest photo url from photo array
 */

//Caman = require('caman').Caman;

const GetBrightest = (photoArr) => {
  var found = "";
  var max = 0;
  photoArr.forEach (photo => {
    /*Caman(photo.s3URL, function () {
      console.log(this.Analyze.calculateLevels());
    });*/

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var img = new Image();
    img.src = photo.s3URL;
    context.drawImage(img, 0, 0 );
    var divider = 10;
    var brightness = 0;
    for (var x=0; x<img.width; x+=img.width/divider) {
      for (var y=0; y<img.height; y+=img.height/divider) {
        var pixel = context.getImageData(x, y, 1, 1);
        brightness += pixel.data[0]/divider; //< only use red channel for optimization
      }
    }
    if (brightness > max) {
      max = brightness;
      found = img.src;
    }
    return found;
  });
}

export default GetBrightest;


