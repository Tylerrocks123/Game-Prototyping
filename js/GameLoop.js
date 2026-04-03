var canvas;
var context;
var player;
var timer;
var interval = 1000/60;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

player = new Player();
player.vx = 2;
player.vy = 0;

timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0,0,canvas.width,canvas.height);
    player.move();
    if (player.x > canvas.width + player.width/2)
    {
        player.x = -player.width/2
    }
    player.draw();
}
