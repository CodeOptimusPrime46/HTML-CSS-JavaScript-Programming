// write your code here
var image =new SimpleImage("hilton.jpg") ;
print(image) ;
var w = image.getWidth() ;
print(w);

var h = image.getHeight() ;
print(h);
for (var pixel of image.values()) {

    x = pixel.getX();
    if (x <= (w/3) ){
        var g=255-pixel.getRed() ;
        pixel.setRed(g);
    }
    else if (x <= (2*w/3)){
        var g= 255-pixel.getGreen() ;
        pixel.setGreen(g);
    }
    else {
        var g= 255-pixel.getBlue() ;
        pixel.setBlue(g);
    }
}
print(image);

// write your code here
var image =new SimpleImage("hilton.jpg") ;
print(image) ;
var w = image.getWidth() ;
print(w);
var v= 0.33*w ;
var z= 0.66*w ;
var g= 255;

var h = image.getHeight() ;
print(h);
for (var pixel of image.values()) {

    x = pixel.getX();
    if (x <= (w/3) ){

        pixel.setRed(255);
    }
    else if (x <= (2*w/3)){
        pixel.setGreen(255);
    }
    else {
        pixel.setBlue(255);
    }
}
print(image);

// Didn't keep Get x function outside if else loop
