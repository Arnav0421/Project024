var options ={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2


}
class ball{
    constructor(x,y){
      super(x,y,50,50);
      this.trajectory =[];
      this.visiblity = 255;

    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
  
      super.display();
  
      if(this.body.velocity.x > 10 && this.body.position.x > 200){
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
      }
     
    }
  }
  