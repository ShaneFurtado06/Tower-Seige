class Stand{
    constructor(x,y){
        var options={isStatic:true}
        this.body=Bodies.rectangle(x,y,400,8,options);
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;

        push ();
            translate (pos.x,pos.y);
            rectMode(CENTER);
            fill("white");
            rect(0,0,400,8);
        pop ();    
    }
}