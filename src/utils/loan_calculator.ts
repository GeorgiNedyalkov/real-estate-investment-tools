export function calculateLoan(
    purchasePrice: number,
    downpayment: number,
    interestRate: number,
    years: number
) {
    const principal = purchasePrice - (downpayment / 100) * purchasePrice;

    const monthlyInterestRate = interestRate / 12 / 100;

    const loanTerm = years * 12;

    const monthlyPayment =
        principal *
        ((monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTerm)) /
            (Math.pow(1 + monthlyInterestRate, loanTerm) - 1));

    return monthlyPayment;
}
// 593

// todo: add property taxes, homeowners insurance, HOA Fees and PMI

export function calculateRemainingLoanBalance(
    principal: number,
    interestRate: number,
    loanTerm: number,
    paymentsMade: number
): number {
    const numberOfPayments = loanTerm * 12;
    const monthlyInterestRate = interestRate / 12 / 100;

    return (
        principal *
        ((Math.pow(1 + monthlyInterestRate, numberOfPayments) -
            Math.pow(1 + monthlyInterestRate, paymentsMade)) /
            (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1))
    );
}
