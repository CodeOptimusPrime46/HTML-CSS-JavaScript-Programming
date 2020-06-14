// write your code here
var image =new SimpleImage("duke_blue_devil.png") ;
print(image) ;
function bluetoYellow() {

    for (var pixel of image.values()) {

        var x = pixel.getRed();
        if(x==0) {
             pixel.setGreen(255);
             pixel.setRed(255);
             pixel.setBlue(0);

        }

    }
    return image  ;
}
print(bluetoYellow(image));
