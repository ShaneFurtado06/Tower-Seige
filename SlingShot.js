class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:40,
            'stiffness':0.8
        }
        this.body=Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.body);
    }

    ballFly(){
        this.body.bodyA=null;
    }
    reAttach(bodyA){
        this.body.bodyA=bodyA;
    }

    display(){
        if(this.body.bodyA){
            var posBodyA=this.body.bodyA.position;
            var pointB=this.pointB;

            push ();
                strokeWeight (4);
                stroke("red")
                line (posBodyA.x,posBodyA.y,pointB.x,pointB.y);
                line (posBodyA.x,posBodyA.y-3,pointB.x-10,pointB.y-10);
            pop ();
        }
    }
}