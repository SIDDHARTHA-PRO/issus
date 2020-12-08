class Wall{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.w=w
        this.h=h
        this.x=x
        this.y=y 
        this.body=Matter.Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
    }
    display(){
        var groundPos=this.body.position;		
        push()
        translate(groundPos.x, groundPos.y);
        rectMode(CENTER)
    
        fill(128,128,128)
        rect(200,200,10, 100);
        pop()
    }
}