// write your code here
var img = new SimpleImage("smallpanda.png");
print (img);
var a =img.getHeight() ;
var b= img.getWidth() ;
var output = new SimpleImage(b,a);
print(output);


function addBorder() {

    for (var pixel of img.values()) {
        var x= pixel.getX() ;
        var y= pixel.getY() ;
        var a =img.getHeight() ;
        var b= img.getWidth() ;
        var bgpixel = output.getPixel(x ,y );

        if(x < 11 || y < 11) {

            output.setPixel(pixel.getX(),pixel.getY(),bgpixel);

        }

        else if (x <= (b-10) && y <= (a-10)) {

            output.setPixel(pixel.getX(),pixel.getY(),pixel);

        }

        else {

            output.setPixel(pixel.getX(),pixel.getY(),bgpixel);

         }




    }

    return output;
}

print(addBorder(img)) ;

// mistake in and condition else if . make analysis before redoing.
