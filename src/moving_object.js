function MovingObject(obj) {
  this.pos = obj.pos;
  this.vel = obj.vel;
  this.radius = obj.radius;
  this.color = obj.color;
}

MovingObject.prototype.draw = function (ctx) {
  const x = this.pos[0];
  const y = this.pos[1];

  ctx.beginPath();
  ctx.arc(x, y, this.radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = this.color;
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
};

MovingObject.prototype.move = function () {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
};

module.exports = MovingObject;
