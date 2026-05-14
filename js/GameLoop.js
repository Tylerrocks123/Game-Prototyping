//game loop
//set up canvas
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

//handle timing and frame regulation
var interval = 1000/60;
var timer = setInterval(animate, interval);

player = new GameObject();

function animate()
{
    context.clearRect(0,0,canvas.clientWidth,canvas.height);
    player.move();
    player.drawtriangle();
}