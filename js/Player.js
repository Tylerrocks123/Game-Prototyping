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
        context.save();
        context.fillStyle = this.color;
        context.translate(this.x,this.y);
        context.fillRect((-this.width/2),(-this.height/2),this.width,this.height)
        context.restore();
    }

    this.move = function()
    {
        this.x += this.vx;
        this.y += this.vy;
    }

}