var canvas = new fabric.Canvas("canvas");

var player_image;
var block_image;

var player_x = 10;
var player_y = 10;

var height = 30;
var width = 30;

function player_update(){
    fabric.Image.fromURL("player.webp", function(Img){
        player_image = Img;

        player_image.scaleToHeight(150);
        player_image.scaleToWidth(140);

        player_image.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_image);
    });
}
player_update();