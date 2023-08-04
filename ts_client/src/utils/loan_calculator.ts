export function calculateLoan(
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
// 593

// todo: add property taxes, homeowners insurance, HOA Fees and PMI
