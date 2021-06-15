class Iron{

    constructor(x,y,width,height){
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;

    var options={
     restitution:0.8,
     friction:3,
     density:30
    }
    this.body=Bodies.rectangle(x,y,width,this.height,options)
    World.add(world,this.body)
    }
  display(){
      var ironpos=this.body.position
      push()
      translate(ironpos.x,ironpos.y)
      rectMode(CENTER)
      fill(0,0,0)
      rect(0,0,this.width,this.height)
      pop()
 }
  }