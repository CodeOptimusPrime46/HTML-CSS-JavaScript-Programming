// write your code here
// write your code here
var fgImage =new SimpleImage("drewRobert.png") ;
var bgImage =new SimpleImage("dinos.png") ;
var output  =new SimpleImage(fgImage.getWidth(),fgImage.getHeight()) ;
//print(fgImage) ;
print(bgImage) ;
//print(output);

for (var pixel of fgImage.values()) {

    if(pixel.getGreen() > 225 ){

        var bgPixel = bgImage.getPixel(pixel.getX(),pixel.getY());

        output.setPixel(pixel.getX(),pixel.getY(),bgPixel);

    }
    else {
        output.setPixel( pixel.getX(), pixel.getY(),pixel);
    }
}
print(output);
