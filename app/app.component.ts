import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app/componentTemplate.html'
})
export class AppComponent {

    originalCost: number = 1200;
    cashDiscountPercentage: number = 10;
    cardSurchargePercentage: number = 10;
    feeCount: number = 12;
    fixedTermAnualPercentage: number = 20;

    feeCost: number;
    cashCost: number;
    cardCost: number;

    fixedTermMonthlyGains: any[] = [];
    availableCashAtDeadline: number;

    calculate() {
        var exceededtWithCard = (this.originalCost * this.cardSurchargePercentage / 100);
        var savingInCash = this.originalCost * this.cashDiscountPercentage / 100;

        this.cardCost = this.originalCost + exceededtWithCard;
        this.cashCost = this.originalCost - savingInCash;

        this.feeCost = this.cardCost / this.feeCount;

        var availableCash = this.originalCost;
        var monthlyFixedTermPercentage = this.fixedTermAnualPercentage / 12;
        for (let i = 1; i <= this.feeCount; i++) {
            var computedGains = availableCash * monthlyFixedTermPercentage / 100;
            this.fixedTermMonthlyGains[i] = { investedAmount: availableCash, computedGains: computedGains };
            availableCash = availableCash + computedGains - this.feeCost;
        }
        this.availableCashAtDeadline = availableCash;
    }
}
