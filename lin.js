class lin{
    constructor(C,D){
        var options = {
           bodyA : C,  
           bodyB : D,
           length : 10,
           stiffness : 0.4     
    }
    this.chain = Matter.Constraint.create(options);
    World.add(world,this.chain);
  }
  display(){
      strokeWeight(6);
      line(this.chain.bodyA.position.x,
           this.chain.bodyA.position.y,
           this.chain.bodyB.position.x,
           this.chain.bodyB.position.y)
  }
}