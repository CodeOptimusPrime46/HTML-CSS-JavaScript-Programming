const lib =  require('./cs101.js');
const li =  require('./SimpleImage,js'); 

// Yelow
var yellow = new SimpleImage(200,200);
print(yellow);

for (var pixel of yellow.values()) {
    var ne = 255-pixel.getRed();
    pixel.setRed(ne);
    pixel.setGreen(ne);

}
print(yellow);

// Magenta

var magenta = new SimpleImage(200,200);
print(magenta);

for (var pixel of yellow.values()) {
    var ne = 255-pixel.getRed();
    pixel.setRed(ne);
    pixel.setBlue(ne);

}
print(magenta);
