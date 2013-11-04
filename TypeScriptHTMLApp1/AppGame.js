define(["require", "exports", 'knockout'], function(require, exports, __ko__) {
    
    var ko = __ko__;
    var Game = (function () {
        function Game(cards) {
            var _this = this;
            this.cards = cards;
            this.turnCard = function (card) {
                _this.showCard(card);
                if (_this.numberOfCardsVisible() === 2) {
                    var selectedCards = _this.cards.filter(function (x) {
                        return x.isVisible();
                    });
                    if (selectedCards[0].color === selectedCards[1].color) {
                        selectedCards.forEach(function (x) {
                            return x.isTaken(true);
                        });
                        _this.hideAllCards();
                    } else {
                        setTimeout(function () {
                            _this.hideAllCards();
                        }, 5000);
                    }
                }
            };
            this.numberOfCardsVisible = function () {
                return _this.cards.filter(function (x) {
                    return x.isVisible();
                }).length;
            };
            this.hideAllCards = function () {
                _this.cards.forEach(function (x) {
                    return x.isVisible(false);
                });
            };
            this.gameOver = ko.computed(function () {
                return _this.cards.filter(function (x) {
                    return x.isTaken();
                }).length === _this.cards.length;
            });
            this.numberOfTurns = ko.observable(0);
            this.showCard = function (card) {
                if (_this.numberOfCardsVisible() < 2 && card.isVisible() === false) {
                    _this.numberOfTurns(_this.numberOfTurns() + 1);
                    card.isVisible(true);
                } else {
                    return;
                }
            };
        }
        return Game;
    })();
    exports.Game = Game;
});
//# sourceMappingURL=AppGame.js.map
