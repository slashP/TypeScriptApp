/// <reference path="Scripts/typings/knockout/knockout.d.ts" />
import Game = require("AppGame");
import Card = require("Card");
import ko = require("knockout");

export class App {
    run = () => {
        var cards = new Array<Card.Card>();
        var colors = ["green", "red", "cyan", "lightblue", "yellow", "brown", "#f0f"];
        for (var i = 0; i < colors.length; i++) {
            cards.push(new Card.Card(colors[i]));
            cards.push(new Card.Card(colors[i]));
        }
        ko.applyBindings(new Game.Game(shuffle(cards)));

        function shuffle(o) { //v1.0
            for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        };
    };
}