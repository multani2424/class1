class Iron extends BaseClass {
    constructor(x, y, angle) {
     super(x,y,60,100,angle);
     this.image = loadImage('sprites/iron.png');
     Matter.Body.setAngle(this.body,angle);
    }
    
  };
  