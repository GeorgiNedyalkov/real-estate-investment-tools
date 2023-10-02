import {
    calculateRemainingLoanBalance,
    calculateRemainingLoanBalanceUpdated,
    calculateMonthlyMortgagePaymentUpdated,
} from "./loan_calculator.ts";
import { LoanTerms, PurchaseTerms, RowData } from "../types/index.tsx";

export function calculateForecastLineChart(
    purchaseTerms: PurchaseTerms,
    loanTerms: LoanTerms
) {
    // add closing costs to property value
    let propertyValue = purchaseTerms.purchasePrice;
    const appreciationRate = purchaseTerms.annualValueGrowth;

    const initialLoanTerms = {
        propertyValue: propertyValue,
        interestRate: 5,
        downpayment: 20,
    };

    const remainingLoanBalance =
        calculateRemainingLoanBalance(initialLoanTerms);

    console.log(remainingLoanBalance);

    const years = [];

    const year0 = {
        name: "Year 0",
        propertyValue: propertyValue,
        equity: 26_000,
        loanBalance: remainingLoanBalance,
    };

    years.push(year0);

    for (let i = 1; i <= 30; i++) {
        const newPropertyValue = Math.round(
            (propertyValue += propertyValue * (appreciationRate / 100))
        );

        const newYear = {
            name: `Year ${i}`,
            propertyValue: newPropertyValue,
            equity: 30_000,
            loanBalance: remainingLoanBalance,
        };

        if (
            (i > 5 && i < 10) ||
            (i > 10 && i < 15) ||
            (i > 15 && i < 20) ||
            (i > 20 && i < 30)
        ) {
            continue;
        }

        years.push(newYear);
    }

    return years;
}

export function calculateTableRows(
    purchaseTerms: PurchaseTerms,
    loanTerms: LoanTerms
) {
    const { downpayment, interestRate, loanYears } = loanTerms;
    const { annualValueGrowth, purchasePrice } = purchaseTerms;

    let propertyValue = purchasePrice;
    const appreciationRate = annualValueGrowth / 100;
    const principal = propertyValue - propertyValue * (downpayment / 100);
    const equity = purchasePrice * downpayment;
    const initialCashFlow = -1027;
    const initialProfit = -5;
    const initialReturn = 5;

    const monthlyMortgagePayment = calculateMonthlyMortgagePaymentUpdated(
        principal,
        interestRate,
        loanYears
    );

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
        year0: principal,
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

    let remainingLoanBalance = principal;

    for (let i = 1; i <= 30; i++) {
        const currentYear: keyof RowData = "year" + i;

        propertyValue += propertyValue * appreciationRate;
        propertyValueRow[currentYear] = Math.round(propertyValue);

        remainingLoanBalance = calculateRemainingLoanBalanceUpdated(
            remainingLoanBalance,
            interestRate,
            monthlyMortgagePayment
        );

        const newEquity = Math.round(principal - remainingLoanBalance);

        if (
            (i > 5 && i < 10) ||
            (i > 10 && i < 15) ||
            (i > 15 && i < 20) ||
            (i > 20 && i < 30)
        ) {
            continue;
        }

        equityRow[currentYear] = newEquity.toLocaleString();
        loanBalanceRow[currentYear] = remainingLoanBalance
            .toFixed(0)
            .toLocaleString();
        mortgagePaymentRow[currentYear] = monthlyMortgagePayment;

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
