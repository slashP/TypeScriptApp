define(["require", "exports", "AppGame", "Card", "knockout"], function(require, exports, __Game__, __Card__, __ko__) {
    /// <reference path="Scripts/typings/knockout/knockout.d.ts" />
    var Game = __Game__;
    var Card = __Card__;
    var ko = __ko__;

    var App = (function () {
        function App() {
            this.run = function () {
                var cards = new Array();
                var colors = ["green", "red", "cyan", "lightblue", "yellow", "brown", "#f0f"];
                for (var i = 0; i < colors.length; i++) {
                    cards.push(new Card.Card(colors[i]));
                    cards.push(new Card.Card(colors[i]));
                }
                ko.applyBindings(new Game.Game(shuffle(cards)));

                function shuffle(o) {
                    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x)
                        ;
                    return o;
                }
                ;
            };
        }
        return App;
    })();
    exports.App = App;
});
//# sourceMappingURL=app.js.map
