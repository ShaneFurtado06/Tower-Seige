class Ground{
    constructor(x,y,width){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,8,options);
        this.x=x;
        this.y=y;
        this.width=width;

        World.add (world,this.body);
    }

    display(){
        var pos=this.body.position;

        push ();
            translate (pos.x,pos.y);
            rectMode(CENTER);
            fill ("red");
            rect(0,0,this.width,8);
        pop ();    
    }
}