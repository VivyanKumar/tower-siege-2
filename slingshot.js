class Slingshot {
    constructor(bodyA,pointB) {
        var slingshot_options={
                bodyA : bodyA,
                pointB : pointB,
                length : 20,
                stiffness : 0.1
        };

        this.pointB = pointB; // {x : 100, y:50}
        this.constraint = Constraint.create(slingshot_options);
        World.add(world,this.constraint);
    }
        display(){
            if(this.constraint.bodyA){
                var pointA = this.constraint.bodyA.position;
                var pointB = this.pointB;
                strokeWeight(4);
                    stroke("#301608");
                    line(pointA.x,pointA.y,pointB.x,pointB.y);      
            } 
        }    
        fly(){
            this.constraint.bodyA = null;
        }
        attach(body){
            this.constraint.bodyA = body;
        }
}