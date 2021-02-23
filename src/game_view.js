function GameView(game, ctx) {
    this.game = game;
    this.ctx = ctx;
}

GameView.prototype.start = function() {
    let callback = function() {
        this.game.moveObjects();
        this.game.draw(this.ctx);
    }
    callback = callback.bind(this);
    setInterval( callback, 20);
}

module.exports = GameView;