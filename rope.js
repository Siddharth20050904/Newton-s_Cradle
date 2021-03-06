class Rope{
    constructor(bodyA, offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: bodyA,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffness: 0.04,
            length: 300
        }
        this.rope =Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, this.offsetX,this.offsetY);
    }
};