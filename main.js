var canvas = new fabric.Canvas("canvas");

var player_image;
var block_image;

var player_x = 10;
var player_y = 10;

var height = 30;
var width = 30;

function player_update(get_image){
    fabric.Image.fromURL(get_image, function(Img){
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
window.addEventListener("keydown", keydown);
function keydown(e){
    var keydown = e.keyCode;
    console.log(keydown);
    if(e.shiftKey == true && keydown == "80"){
        console.log("p and shift together");
        height += 10;
        width += 10;
        document.getElementById("height").innerHTML = height;
        document.getElementById("width").innerHTML = width;
    }
    if(e.shiftKey == true && keydown == "77"){
        console.log("m and shift together");
        height -= 10;
        width -= 10;
        document.getElementById("height").innerHTML = height;
        document.getElementById("width").innerHTML = width;
    }
    if(keydown == "70"){
        console.log("f");
        player_update("https://lh3.google.com/u/0/d/1RjtrVFlLkNwDUGwQHSjY2WAJOEFjMjsE=w400-h380-p-k-nu-iv1")
    }
    if(keydown == "66"){
        console.log("b");
        player_update("https://lh3.google.com/u/0/d/1nI4k5m6r52xSbRUack7TbIa_U8YvzUt9=w400-h380-p-k-nu-iv1");
    }
    if(keydown == "76"){
        console.log("l");
        player_update("https://lh3.google.com/u/0/d/1PHnkIw5TK441tEvAbSwJ5NlS5ZtDCKSD=w400-h380-p-k-nu-iv1");
    }
    if(keydown == "82"){
        console.log("r");
        player_update("https://lh3.google.com/u/0/d/1hNsjZZWyHXhN0f4yOLjqRNlcB0YpiyNi=w400-h380-p-k-nu-iv1");
    }
    if(keydown == "72"){
        console.log("h");
        player_update("https://lh3.google.com/u/0/d/1JGZlMGfmfzmBiKHvoeeaYsOvJZ96LA88=w400-h380-p-k-nu-iv1");
    }
}
