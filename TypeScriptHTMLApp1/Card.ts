/// <reference path="Scripts/typings/knockout/knockout.d.ts" />
/// <reference path="Scripts/typings/knockout/knockout.amd.d.ts" />
import ko = require('knockout');
export class Card {
    public isVisible = ko.observable(false);
    public isTaken = ko.observable(false);
    isShown = ko.computed(() => {
        return this.isVisible() || this.isTaken();
    });
    public backgroundColor = ko.computed(() => {
        return this.isShown() ? this.color : "grey";
    });
    constructor(public color: string) { }
}