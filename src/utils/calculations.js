function calculatePurchaseExpenses(purchasePrice, closingCosts) {
    return purchasePrice + purchasePrice * (closingCosts / 100);
}

function calculateRentalIncome(monthlyRent, vacancy) {
    return monthlyRent - monthlyRent * (vacancy / 100);
}

function calculateGrossMonthlyIncome(rent) {
    return rent * 12;
}

function calculateLoan(purchasePrice, downpayment, annualInterestRate, years) {
    var principal = purchasePrice - (downpayment / 100) * purchasePrice;
    var monthlyInterestRate = annualInterestRate / 12 / 100;
    var loanTerm = years * 12;
    var monthlyPayment =
        principal *
        ((monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTerm)) /
            (Math.pow(1 + monthlyInterestRate, loanTerm) - 1));
    return monthlyPayment;
}

function calculateExpenses(expenses) {
    return Object.values(expenses).reduce(function (acc, value) {
        return Number(acc) + Number(value);
    }, 0);
}
var totalExpenses = {
    propertyTaxes: 10,
    insurance: 10,
    vacancy: 10,
    capitalExpenditures: 10,
    managementFees: 10,
    electricity: 10,
    water: 10,
    HOAfees: 10,
    garbage: 10,
    other: 10,
};
var grossMonthlyIncome = calculateGrossMonthlyIncome(1000);
console.log({ grossMonthlyIncome: grossMonthlyIncome });
var netOperatingIncome = grossMonthlyIncome - calculateExpenses(totalExpenses);
console.log({ netOperatingIncome: netOperatingIncome });
