console.log("Webpack is working!");

const MovingObject = require("./moving_object");
const GameView = require("./game_view")
// const Asteroid = require("./asteroid.js");
const Game = require("./game.js");


// Make constructor in window
// window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded");
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.height = 1000;
  canvasEl.width = 1500;

  const ctx = canvasEl.getContext("2d");

  const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 20,
    color: "black",
  });

//   mo.draw(ctx);

  const game =  new Game();

  const gm = new GameView(game, ctx);

  gm.start();
  
});
