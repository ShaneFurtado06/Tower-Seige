class Box{
    constructor(x,y){
        var options={
            isStatic:false,
            'friction':0.7,
            'restitution':1,
            'density':1.2
        }
        this.body=Bodies.rectangle(x,y,40,40,options);
        World.add(world,this.body);
        this.Visiblity=255;
    }

    display(){
        if(this.body.speed>6){
            score++
        }
        
        if(this.body.speed<3){
        
        var pos=this.body.position;
        var angle=this.body.angle;
           
        push ();
            translate (pos.x,pos.y);
            rectMode(CENTER);
            rotate(angle);
            strokeWeight(2);
            stroke("purple");
            fill ("pink");
            rect(0,0,40,40);
        pop ();    
            
        }   
        
        else{
            World.remove(world,this.body);
            push();
            this.Visiblity=this.Visiblity-5;
            pop();
        }
    }
}
