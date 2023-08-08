interface Expenses {
    propertyTaxes: number;
    insurance: number;
    vacancy: number;
    capitalExpenditures: number;
    managementFees: number;
    electricity: number;
    water: number;
    HOAfees: number;
    garbage: number;
    other: number;
}

function calculatePurchaseExpenses(
    purchasePrice: number,
    closingCosts: number
): number {
    return purchasePrice + purchasePrice * (closingCosts / 100);
}

function calculateRentalIncome(monthlyRent: number, vacancy: number): number {
    return monthlyRent - monthlyRent * (vacancy / 100);
}

function calculateGrossMonthlyIncome(rent: number): number {
    return rent * 12;
}

function calculateLoan(
    purchasePrice: number,
    downpayment: number,
    annualInterestRate: number,
    years: number
) {
    const principal = purchasePrice - (downpayment / 100) * purchasePrice;

    const monthlyInterestRate = annualInterestRate / 12 / 100;

    const loanTerm = years * 12;

    const monthlyPayment =
        principal *
        ((monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTerm)) /
            (Math.pow(1 + monthlyInterestRate, loanTerm) - 1));

    return monthlyPayment.toFixed(0);
}

function calculateExpenses(expenses: Expenses): number {
    return Object.values(expenses).reduce(
        (acc, value) => Number(acc) + Number(value),
        0
    );
}

const totalExpenses = {
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

const grossMonthlyIncome = calculateGrossMonthlyIncome(1000);

console.log({ grossMonthlyIncome });

const netOperatingIncome =
    grossMonthlyIncome - calculateExpenses(totalExpenses);

console.log({ netOperatingIncome });
