console.log("Webpack is working!");

const MovingObject = require("./moving_object");
const Asteroid = require("./asteroid.js");

// Make constructor in window
window.MovingObject = MovingObject;
window.Asteroid = Asteroid;

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded");
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.height = 500;
  canvasEl.width = 700;

  const ctx = canvasEl.getContext("2d");

  const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 20,
    color: "black",
  });

  mo.draw(ctx);

  const as = new Asteroid({
    pos: [200, 400],
  });
  as.draw(ctx);
});
