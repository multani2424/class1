class Hammer extends BaseClass{
  constructor(x,y){
    super(x,y,120,120);
    this.image = loadImage("sprites/hammer.png");
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}