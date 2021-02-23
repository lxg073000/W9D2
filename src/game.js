const Asteroid = require("./asteroid");

function Game() {
  this.asteroids = [];
  this.addAsteroids();
}

Game.DIM_X = 1500;
Game.DIM_Y = 1000;
Game.NUM_ASTEROIDS = 4;

Game.prototype.addAsteroids = function () {
  // make NUM_ASTEROIDS amount of asteroid instances
  // put them into an asteroids array
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    this.asteroids.push(new Asteroid({ game: this }));
  }
};

Game.prototype.randomPosition = function () {
  const x = Math.floor(Math.random() * Game.DIM_X);
  const y = Math.floor(Math.random() * Game.DIM_Y);
  console.log([x, y]);
  return [x, y];
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  this.asteroids.forEach((as) => {
    as.draw(ctx);
  });
};

Game.prototype.moveObjects = function () {
  this.asteroids.forEach((as) => {
    as.move();
  });
};

Game.prototype.wrap = function (pos) {
  let x = pos[0];
  let y = pos[1];
  if (x < 0) {
    x = Game.DIM_X + x;
  } else if (x > Game.DIM_X) {
    x = x - Game.DIM_X;
  }
  if (y < 0) {
    y = Game.DIM_Y + y;
  } else if (y > Game.DIM_Y) {
    y = y - Game.DIM_Y;
  }
  return [x, y];
};

module.exports = Game;
