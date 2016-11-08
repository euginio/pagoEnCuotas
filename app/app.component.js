"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.originalCost = 1200;
        this.cashDiscountPercentage = 10;
        this.cardSurchargePercentage = 10;
        this.feeCount = 12;
        this.fixedTermAnualPercentage = 20;
        this.fixedTermMonthlyGains = [];
    }
    AppComponent.prototype.calculate = function () {
        var exceededtWithCard = (this.originalCost * this.cardSurchargePercentage / 100);
        var savingInCash = this.originalCost * this.cashDiscountPercentage / 100;
        this.cardCost = this.originalCost + exceededtWithCard;
        this.cashCost = this.originalCost - savingInCash;
        this.feeCost = this.cardCost / this.feeCount;
        var availableCash = this.originalCost;
        var monthlyFixedTermPercentage = this.fixedTermAnualPercentage / 12;
        for (var i = 1; i <= this.feeCount; i++) {
            var computedGains = availableCash * monthlyFixedTermPercentage / 100;
            this.fixedTermMonthlyGains[i] = { investedAmount: availableCash, computedGains: computedGains };
            availableCash = availableCash + computedGains - this.feeCost;
        }
        this.availableCashAtDeadline = availableCash;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/componentTemplate.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map