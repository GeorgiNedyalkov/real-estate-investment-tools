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

export function calculateEquityAccrued(
    principal: number,
    annualInterestRate: number,
    loanTermInMonths: number
): number {
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const totalPayments = loanTermInMonths;

    let outstandingPrincipal = principal;
    let equityAccrued = 0;

    for (let month = 1; month <= totalPayments; month++) {
        const payment =
            (monthlyInterestRate * principal) /
            (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));
        const interestPayment = outstandingPrincipal * monthlyInterestRate;
        const principalPayment = payment - interestPayment;

        equityAccrued += principalPayment;
        outstandingPrincipal -= principalPayment;
    }

    return equityAccrued;
}

export function calculateMonthlyMortgagePayment(loanTerms) {
    const { propertyValue, downpayment, interestRate, years } = loanTerms;
    const principal = propertyValue - (downpayment / 100) * propertyValue;
    const monthlyInterestRate = interestRate / 12 / 100;
    const loanTerm = years * 12;

    return Math.round(
        principal *
            ((monthlyInterestRate *
                Math.pow(1 + monthlyInterestRate, loanTerm)) /
                (Math.pow(1 + monthlyInterestRate, loanTerm) - 1))
    );
}

export function calculateRemainingLoanBalance(loanTerms) {
    const { propertyValue, downpayment, interestRate } = loanTerms;

    let principal = propertyValue - propertyValue * (downpayment / 100);
    const monthlyMortgagePayment = calculateMonthlyMortgagePayment(loanTerms);

    console.log(monthlyMortgagePayment);

    let remainingLoanBalance = principal;

    for (let i = 1; i <= 12; i++) {
        const monthlyIterestPayment = calculateMonthlyInterestPayment(
            principal,
            interestRate,
            12
        );
        console.log(monthlyIterestPayment);

        const monthlyPrincipalPayment =
            monthlyMortgagePayment - monthlyIterestPayment;

        remainingLoanBalance = principal - monthlyPrincipalPayment;

        principal -= monthlyPrincipalPayment;
    }

    return Number(remainingLoanBalance.toFixed(3));
}

function calculateMonthlyInterestPayment(
    principal: number,
    interestRate: number,
    numberOfPayments: number
) {
    return principal * (interestRate / 100 / numberOfPayments);
}

export function calculateMonthlyMortgagePaymentUpdated(
    principal: number,
    interestRate: number,
    years: number
) {
    const monthlyInterestRate = interestRate / 12 / 100;
    const loanTerm = years * 12;

    return Math.round(
        principal *
            ((monthlyInterestRate *
                Math.pow(1 + monthlyInterestRate, loanTerm)) /
                (Math.pow(1 + monthlyInterestRate, loanTerm) - 1))
    );
}

export function calculateRemainingLoanBalanceUpdated(
    principal: number,
    interestRate: number,
    monthlyMortgagePayment: number
) {
    let remainingLoanBalance = principal;

    for (let i = 1; i <= 12; i++) {
        const monthlyIterestPayment = calculateMonthlyInterestPayment(
            principal,
            interestRate,
            12
        );

        const monthlyPrincipalPayment =
            monthlyMortgagePayment - monthlyIterestPayment;

        remainingLoanBalance = principal - monthlyPrincipalPayment;

        principal -= monthlyPrincipalPayment;
    }

    return Number(remainingLoanBalance.toFixed(3));
}
