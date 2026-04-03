function Player()
{
    //set up player starting point
    this.x = canvas.width/2;
    this.y = canvas.height/2;

    //set up player dimensions
    this.width = 100;
    this.height = 100;

    //set up player color
    this.color = "#ff0000"

    //set up player's velocity
    this.vx = 0;
    this.vy = 0;

    this.draw = function()
    {
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x,this.y,this.width/2,0,360*Math.PI/180,true)
        context.fill();
        context.closePath();
    }

    this.move = function()
    {
        this.x += this.vx;
        this.y += this.vy
    }

}