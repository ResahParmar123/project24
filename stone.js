class Stone{

    constructor(x,y,wid,hei){
     this.x=x;
     this.y=y;
     this.width=wid;
     this.height=hei;

     var options = {
         restitution:0.8,
         friction:0.9,
         density:12
    }
    this.body=Bodies.rectangle(x,y,wid,hei,options)
    World.add(world,this.body)
    }

    display(){
    console.log(this.body)
    var angle=this.body.angle    
    var stoneposition=this.body.position;
    push()
    translate(stoneposition.x,stoneposition.y)
    rotate(angle)
    rectMode(CENTER)
    fill("red")
    rect(0,0,this.width,this.height)
    pop()
    }
   
}