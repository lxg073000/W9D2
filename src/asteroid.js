const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");

function Asteroid(options) {
  Asteroid.COLOR = "blue";
  Asteroid.RADIUS = 50;
  Asteroid.SPEED = 5;

  options.pos = options.game.randomPosition();
  options.color = Asteroid.COLOR;
  options.radius = Asteroid.RADIUS;
  options.vel = Util.randomVec(Asteroid.SPEED);

  MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
