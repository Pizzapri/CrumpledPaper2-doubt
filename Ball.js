class Ball{
    constructor(x,y){
        var options={
            isStatic:true,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,30,options);
        this.radius=30;
        this.image=loadImage("sprites/paper.png")
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        var angle = this.body.angle;
        this.body.position.x=pos.x;
        this.body.position.y=pos.y;
        pos.x=mouseX
        pos.y=mouseY
        fill("#E800E3");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius);
    }
}