class Paper
{
constructor(x, y, radius)
{
var options={
isStatic:false,
restitution:0.3,
// friction:0.5,
// density:1.2
}
this.body = Bodies.circle(x, y, radius, options);
this.radius=radius;
// this.height=height;
World.add(world, this.body);
}
display()
{
    var pos=this.body.position
    //push();
    //var angle=this.body.angle
  //  translate(pos.x, pos.y);
   // rotate(angle);
    fill(255);
    ellipseMode(RADIUS);
    ellipse(pos.x, pos.y, this.radius,20);
  //  pop();
}
}