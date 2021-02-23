function MovingObject(obj) {
    this.pos = obj.pos;
    this.vel = obj.vel;
    this.radius = obj.radius;
    this.color = obj.color;
}

MovingObject.prototype.draw = function(ctx) {
    const x = ctx.canvas.width / 2;
    const y = ctx.canvas.height / 2;

    ctx.beginPath();
    ctx.arc(x, y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

module.exports = MovingObject;