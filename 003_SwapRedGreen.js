// write your code here
var image =new SimpleImage("usain.jpg") ;
print(image) ;
function swapRedGreen() {

    for (var pixel of image.values()) {
        var x = pixel.getRed();
        var y = pixel.getGreen();
        pixel.setRed(y);
        pixel.setGreen(x);

    }
    return image  ;
}
print(swapRedGreen(image));

// Made mistake in return function kept in inside for loop
