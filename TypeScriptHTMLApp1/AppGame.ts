/// <reference path="Scripts/typings/knockout/knockout.d.ts" />
/// <reference path="Scripts/typings/knockout/knockout.amd.d.ts" />
/// <reference path="Scripts/typings/requirejs/require.d.ts" />
import Card = require('Card');
import ko = require('knockout');
    export class Game {
        constructor(public cards: Array<Card.Card>) { }
        turnCard = (card: Card.Card) => {
            this.showCard(card);
            if (this.numberOfCardsVisible() === 2) {
                var selectedCards = this.cards.filter(x => x.isVisible());
                if (selectedCards[0].color === selectedCards[1].color) {
                    selectedCards.forEach(x =>
                        x.isTaken(true)
                        );
                    this.hideAllCards();
                }
                else {
                    setTimeout(() => {
                        this.hideAllCards();
                    }, 5000);
                }
            }
        };
        numberOfCardsVisible = () => {
            return this.cards.filter(x => x.isVisible()).length;
        };
        hideAllCards = () => {
            this.cards.forEach(x =>
                x.isVisible(false)
            );
        };
        public gameOver = ko.computed(() => {
            return this.cards.filter(x => x.isTaken()).length === this.cards.length;
        });
        private numberOfTurns = ko.observable(0);
        showCard = (card: Card.Card) => {
            if (this.numberOfCardsVisible() < 2 && card.isVisible() === false) {
                this.numberOfTurns(this.numberOfTurns() + 1);
                card.isVisible(true);
            } else {
                return;
            }
        };
    }