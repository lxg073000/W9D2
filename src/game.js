const Asteroid = require("./asteroid");

function Game() {
    this.asteroids = [];
    this.addAsteroids();
}

Game.DIM_X = 1500;
Game.DIM_Y = 1000;
Game.NUM_ASTEROIDS = 20;

Game.prototype.addAsteroids = function() {
    // make NUM_ASTEROIDS amount of asteroid instances
    // put them into an asteroids array
    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
        this.asteroids.push( new Asteroid({pos: this.randomPosition()}) );
    }
}

Game.prototype.randomPosition = function() {
    const x = Math.floor(Math.random() * Game.DIM_X);
    const y = Math.floor(Math.random() * Game.DIM_Y);

    return [x, y];
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.asteroids.forEach( as => {
        as.draw(ctx);
    });
}

Game.prototype.moveObjects = function() {
    this.asteroids.forEach(as => {
        as.move();
    });
}

module.exports = Game;