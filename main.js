var canvas = new fabric.Canvas("canvas");
var canvasy = document.getElementById("canvas");
var ctx = canvasy.getContext("2d");

var player_image;

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
player_update("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/295fb76c-7179-4c70-a508-a1cce61a876f/dc5bss3-525d66e4-1c8d-4063-b1ad-61f060ce9983.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI5NWZiNzZjLTcxNzktNGM3MC1hNTA4LWExY2NlNjFhODc2ZlwvZGM1YnNzMy01MjVkNjZlNC0xYzhkLTQwNjMtYjFhZC02MWYwNjBjZTk5ODMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NyuuWGWDXMbTSWSC1j1DGKbCTzhP4U7W0lqvWNU1y7Q");
window.addEventListener("keydown", key);
function key(e){
    var keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == "38"){
        up();
        console.log("up");
    }
    if (keypressed == "40"){
        down();
        console.log("down");
    }
    if (keypressed == "37"){
        left();
        console.log("left");
    }
    if (keypressed == "39"){
        right();
        console.log("right");
    }
}
function up(){
    if(player_y >= 0){
        player_y -= 10;
        console.log(`x = ${player_x}, y = ${player_y}`);
        canvas.remove(player_image);
        player_update("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/295fb76c-7179-4c70-a508-a1cce61a876f/dc5bss3-525d66e4-1c8d-4063-b1ad-61f060ce9983.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI5NWZiNzZjLTcxNzktNGM3MC1hNTA4LWExY2NlNjFhODc2ZlwvZGM1YnNzMy01MjVkNjZlNC0xYzhkLTQwNjMtYjFhZC02MWYwNjBjZTk5ODMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NyuuWGWDXMbTSWSC1j1DGKbCTzhP4U7W0lqvWNU1y7Q");
    }
}
function down(){
    if(player_y <= 500){
        player_y += 10;
        console.log(`x = ${player_x}, y = ${player_y}`);
        canvas.remove(player_image);
        player_update("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/295fb76c-7179-4c70-a508-a1cce61a876f/dc5bss3-525d66e4-1c8d-4063-b1ad-61f060ce9983.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI5NWZiNzZjLTcxNzktNGM3MC1hNTA4LWExY2NlNjFhODc2ZlwvZGM1YnNzMy01MjVkNjZlNC0xYzhkLTQwNjMtYjFhZC02MWYwNjBjZTk5ODMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NyuuWGWDXMbTSWSC1j1DGKbCTzhP4U7W0lqvWNU1y7Q");
    }
}
function left(){
    if(player_x >= 0){
        player_x -= 10;
        console.log(`x = ${player_x}, y = ${player_y}`);
        canvas.remove(player_image);
        player_update("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/295fb76c-7179-4c70-a508-a1cce61a876f/dc5bss3-525d66e4-1c8d-4063-b1ad-61f060ce9983.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI5NWZiNzZjLTcxNzktNGM3MC1hNTA4LWExY2NlNjFhODc2ZlwvZGM1YnNzMy01MjVkNjZlNC0xYzhkLTQwNjMtYjFhZC02MWYwNjBjZTk5ODMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NyuuWGWDXMbTSWSC1j1DGKbCTzhP4U7W0lqvWNU1y7Q");
    }
}
function right(){
    if(player_x <= 700){
        player_x += 10;
        console.log(`x = ${player_x}, y = ${player_y}`);
        canvas.remove(player_image);
        player_update("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/295fb76c-7179-4c70-a508-a1cce61a876f/dc5bss3-525d66e4-1c8d-4063-b1ad-61f060ce9983.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI5NWZiNzZjLTcxNzktNGM3MC1hNTA4LWExY2NlNjFhODc2ZlwvZGM1YnNzMy01MjVkNjZlNC0xYzhkLTQwNjMtYjFhZC02MWYwNjBjZTk5ODMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NyuuWGWDXMbTSWSC1j1DGKbCTzhP4U7W0lqvWNU1y7Q");
    }
}
