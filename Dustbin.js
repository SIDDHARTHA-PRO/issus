class  Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.width=width
        this.height=height
        this.image=loadImage("dustbingreen.png")
        this.body=Matter.Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
    }
    display(){
        var binpos=this.body.position;
        translate(binpos.x, binpos.y);
      
        imageMode(CENTER)
        image (this.image,0,0,this.width,this.height)       
    }
}