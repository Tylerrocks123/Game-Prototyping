var canvas;
var context;
var player;
var timer;
var interval = 1000/60;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

player = new Player();
player.vx = 2;
player.vy = 2;

timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0,0,canvas.width,canvas.height);
    player.move();
    if (player.x > canvas.width + player.width/2)
    {
        player.vx *= -1;
        player.color = "#40ff00";
    }
    if (player.x < 0 + player.width/2)
    {
        player.vx = 2;
        player.color = "#ff0000";
    }
    if (player.y > canvas.height + player.height/2)
    {
        player.vy *= -1;
        player.color = "#ff40b6";
    }
    if (player.y < 0 + player.height/2)
    {
        player.vy = 2;
        player.color = "#0000ff";
    }
    player.draw();
}
