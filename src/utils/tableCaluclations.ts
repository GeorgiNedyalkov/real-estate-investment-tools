import { calculateRemainingLoanBalance } from "./loan_calculator.ts";
import { RowData } from "../interfaces/interfaces.tsx";

export function calculateTableRows() {
    let propertyValue = 100_000;
    const appreciationRate = 2 / 100;
    let equity = 20_000;
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

    // const firstYearRemainingLoanBalance = calculateRemainingLoanBalance(
    //     initialLoanBalance,
    //     interestRate,
    //     loanTerm,
    //     paymentsMade
    // );

    // create initial values
    const propertyValueRow: RowData = {
        id: 1,
        metric: "Property Value",
        year0: propertyValue,
    };
    const equityRow: RowData = {
        id: 2,
        metric: "Equity",
        year0: equity,
    };

    const loanBalanceRow: RowData = {
        id: 3,
        metric: "Loan Balance",
        year0: initialLoanBalance,
    };

    const cashFlowRow: RowData = {
        id: 4,
        metric: "Cash Flow",
        year0: initialCashFlow,
    };

    const mortgagePaymentRow: RowData = {
        id: 5,
        metric: "Mortgage Payment",
        year0: monthlyMortgagePayment,
    };

    const profitIfSoldRow: RowData = {
        id: 6,
        metric: "Profit if Sold",
        year0: initialProfit,
    };

    const annualizedReturnRow: RowData = {
        id: 7,
        metric: "Annualized Return",
        year0: initialReturn,
    };

    for (let i = 1; i <= 30; i++) {
        const currentYear: keyof RowData = "year" + i;

        equity += annualMortgagePayment;
        propertyValue += propertyValue * appreciationRate;

        if (
            (i > 5 && i < 10) ||
            (i > 10 && i < 15) ||
            (i > 15 && i < 20) ||
            (i > 20 && i < 30)
        ) {
            continue;
        }

        equityRow[currentYear] = equity;
        propertyValueRow[currentYear] = Math.round(propertyValue);

        // Mortgage Payment: need to calculate equity accrued
        mortgagePaymentRow[currentYear] = monthlyMortgagePayment;

        const remainingLoanBalance = calculateRemainingLoanBalance(
            initialLoanBalance,
            interestRate,
            loanTerm,
            paymentsMade
        );

        loanBalanceRow[currentYear] = remainingLoanBalance;
        initialLoanBalance = remainingLoanBalance;
        paymentsMade += 12;

        cashFlowRow[currentYear] = 0;
        profitIfSoldRow[currentYear] = 0;
        annualizedReturnRow[currentYear] = 0;
    }

    return [
        {
            ...propertyValueRow,
        },
        {
            ...equityRow,
        },
        {
            ...loanBalanceRow,
        },
        {
            ...cashFlowRow,
        },
        {
            ...mortgagePaymentRow,
        },
        {
            ...profitIfSoldRow,
        },
        {
            ...annualizedReturnRow,
        },
    ];
}
