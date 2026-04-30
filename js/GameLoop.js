var canvas;
var context;
var player;
var timer;
var interval = 1000/60;

var frictionX = 0.8;
var frictionY = 0.8;
var gravity = 1;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

player = new GameObject(100,canvas.height/2,100,100,"#eeea1e");
platform0 = new GameObject();
platform0.width = 400;
platform0.y = player.y + player.height/2 + platform0.height/2;
platform0.color = "#66ff33";
/* npc1 = new GameObject(300,canvas.height/2,100,100,"#1eaeff");
npc2 = new GameObject(600,canvas.height/2,100,100,"#df1eaf");
npc3 = new GameObject(900,canvas.height/2,100,100,"#00ff00"); */
//player.vx = 2;
//player.vy = 2;

timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0,0,canvas.width,canvas.height);

    if (w && player.canJump)
    {
        player.canJump = false;
        player.vy += player.jumpSpeed;
    }

    /* if(d)
    {
        player.x += 4;
    }
    if(a)
    {
        player.x -= 4;
    } */

    doHandleAcceleration();
    doHandleFriction();
    doHandleGravity();
    doUpdatePosition();
    doCheckBottomBounds();

    while(platform0.hitTestPoint(player.bottom()) && player.vy >= 0)
    {
        player.y--;
        player.vy = 0;
        player.canJump = true;
    }

    // while(platform0.hitTestPoint(player.top()))
    // {
    //     player.y++;
    //     player.vy = 0;
    // }

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

    player.jumpSpeed = -20

//npc1 collision stuff
/* if(npc1.collisionCheck(player))
    {
        npc1.color = "yellow";
        npc1.width = 125;
    }
    else
    {
        npc1.color = "green";
        npc1.width = 100;
    }

//npc2 collision stuff
if (npc2.collisionCheck(player))
{
    context.strokeRect(npc2.x-npc2.width/2, npc2.y-npc2.height/2, npc2.width, npc2.height);
}

if (npc3.collisionCheck(player))
{
    player.x = player.prevX;
}
else
{
    player.prevX = player.x;
} */

    player.drawCircle();
    player.drawDebug();
    platform0.drawRect();
    /* npc1.drawCircle();
    npc2.drawCircle();
    npc3.drawRect(); */
}

function doHandleAcceleration()
{
    if (d)
    {
        player.vx += player.ax * player.force;
    }
    if (a)
    {
        player.vx += player.ax * -player.force;
    }
}

function doHandleFriction()
{
    player.vx *= frictionX;
}

function doHandleGravity()
{
    player.vy += gravity;
}

function doUpdatePosition()
{
    player.x += player.vx;
    player.y += player.vy;
}

function doCheckBottomBounds()
{
    if (player.y > canvas.height - player.height/2)
    {
        player.y = canvas.height - player.height/2;
        player.vy = 0;
        player.canJump = true;
        //doJump();
    }
}

function doJump()
{
    if (w)
    {
        player.vy = player.jumpSpeed;
        
    }
}