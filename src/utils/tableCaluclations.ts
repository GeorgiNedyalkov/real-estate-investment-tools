import { calculateRemainingLoanBalance } from "./loan_calculator.ts";
import { RowData } from "../interfaces/interfaces.tsx";

export function calculateTableRows() {
    let initialPropertyValue = 100_000;
    const appreciationRate = 2 / 100;
    let initialEquity = 20_000;
    const initialCashFlow = -1027;
    const initialProfit = -5;
    const initialReturn = 5;

    // calculate remaining loan balance
    const monthlyMortgagePayment = 429;
    let initialLoanBalance = 80_000;
    const loanTerm = 30;
    const interestRate = 5;
    let paymentsMade = 12;

    const annualMortgagePayment = monthlyMortgagePayment * 12;

    const firstYearRemainingLoanBalance = calculateRemainingLoanBalance(
        initialLoanBalance,
        interestRate,
        loanTerm,
        paymentsMade
    );

    console.log(firstYearRemainingLoanBalance);

    // create initial values
    const propertyValue: RowData = {
        id: 1,
        metric: "Property Value",
        year0: initialPropertyValue,
    };
    const equity: RowData = {
        id: 2,
        metric: "Equity",
        year0: initialEquity,
    };

    const loanBalance: RowData = {
        id: 3,
        metric: "Loan Balance",
        year0: initialLoanBalance,
    };

    const cashFlow: RowData = {
        id: 4,
        metric: "Cash Flow",
        year0: initialCashFlow,
    };

    const mortgagePayment: RowData = {
        id: 5,
        metric: "Mortgage Payment",
        year0: monthlyMortgagePayment,
    };

    const profitIfSold: RowData = {
        id: 6,
        metric: "Profit if Sold",
        year0: initialProfit,
    };

    const annualizedReturn: RowData = {
        id: 7,
        metric: "Annualized Return",
        year0: initialReturn,
    };

    for (let i = 1; i <= 30; i++) {
        const currentYear: keyof RowData = "year" + i;

        initialEquity += annualMortgagePayment;
        initialPropertyValue += initialPropertyValue * appreciationRate;

        if (
            (i > 5 && i < 10) ||
            (i > 10 && i < 15) ||
            (i > 15 && i < 20) ||
            (i > 20 && i < 30)
        ) {
            continue;
        }

        equity[currentYear] = initialEquity;
        propertyValue[currentYear] = Math.round(initialPropertyValue);
        mortgagePayment[currentYear] = monthlyMortgagePayment;

        const remainingLoanBalance = calculateRemainingLoanBalance(
            initialLoanBalance,
            interestRate,
            loanTerm,
            paymentsMade
        );

        loanBalance[currentYear] = remainingLoanBalance;
        initialLoanBalance = remainingLoanBalance;
        paymentsMade += 12;
        cashFlow[currentYear] = 0;
        profitIfSold[currentYear] = 0;
        annualizedReturn[currentYear] = 0;
    }

    return [
        {
            ...propertyValue,
        },
        {
            ...equity,
        },
        {
            ...loanBalance,
        },
        {
            ...cashFlow,
        },
        {
            ...mortgagePayment,
        },
        {
            ...profitIfSold,
        },
        {
            ...annualizedReturn,
        },
    ];
}
