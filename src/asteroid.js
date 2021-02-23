const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");

function Asteroid(obj) {
  Asteroid.COLOR = "green";
  Asteroid.RADIUS = 50;
  Asteroid.SPEED = 5;

  obj.color = Asteroid.COLOR;
  obj.radius = Asteroid.RADIUS;
  obj.vel = Util.randomVec(Asteroid.SPEED);

  MovingObject.call(this, obj);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
