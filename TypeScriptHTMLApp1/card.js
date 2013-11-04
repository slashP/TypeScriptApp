define(["require", "exports", 'knockout'], function(require, exports, __ko__) {
    /// <reference path="Scripts/typings/knockout/knockout.d.ts" />
    /// <reference path="Scripts/typings/knockout/knockout.amd.d.ts" />
    var ko = __ko__;
    var Card = (function () {
        function Card(color) {
            var _this = this;
            this.color = color;
            this.isVisible = ko.observable(false);
            this.isTaken = ko.observable(false);
            this.isShown = ko.computed(function () {
                return _this.isVisible() || _this.isTaken();
            });
            this.backgroundColor = ko.computed(function () {
                return _this.isShown() ? _this.color : "grey";
            });
        }
        return Card;
    })();
    exports.Card = Card;
});
//# sourceMappingURL=Card.js.map
