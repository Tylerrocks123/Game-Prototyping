var canvas;
var context;
var player;
var timer;
var interval = 1000/60;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

player = new GameObject(100,canvas.height/2,100,100,"#eeea1e");
npc1 = new GameObject(300,canvas.height/2,100,100,"#1eaeff");
npc2 = new GameObject(600,canvas.height/2,100,100,"#df1eaf");
npc3 = new GameObject(900,canvas.height/2,100,100,"#00ff00");
//player.vx = 2;
//player.vy = 2;

timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0,0,canvas.width,canvas.height);

    if(d)
    {
        player.x += 4;
    }
    if(a)
    {
        player.x -= 4;
    }

    player.move();
    if (player.x > canvas.width + player.width/2)
    {
       // player.vx *= -1;
        player.color = "#40ff00";
    }
    if (player.x < 0 + player.width/2)
    {
       // player.vx = 2;
        player.color = "#ff0000";
    }
    if (player.y > canvas.height + player.height/2)
    {
        //player.vy *= -1;
        player.color = "#ff40b6";
    }
    if (player.y < 0 + player.height/2)
    {
       // player.vy = 2;
        player.color = "#0000ff";
    }
    player.drawCircle();
    npc1.drawCircle();
    npc2.drawCircle();
    npc3.drawRect();
}
