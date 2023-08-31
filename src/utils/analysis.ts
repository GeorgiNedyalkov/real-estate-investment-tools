import { calculateExpenses } from "./expenses.ts";
import { calculateLoan } from "./loan_calculator.ts";
import { Expenses, LoanTerms } from "../interfaces/interfaces.ts";

export function analyzeProperty(
    purchasePrice: number,
    loanDetails: LoanTerms,
    monthlyRent: number,
    expenses: Expenses
) {
    // initialize constants
    const { downpayment, interestRate, loanYears } = loanDetails;
    const investmentAmount = (downpayment / 100) * purchasePrice;
    const monthlyMortgagePayment = calculateLoan(
        purchasePrice,
        downpayment,
        interestRate,
        loanYears
    );

    // calculate income
    const monthlyGrossIncome =
        monthlyRent - monthlyRent * (expenses.vacancy / 100);
    const grossIncome = monthlyGrossIncome * 12;

    // calculate expenses
    const monthlyExpenses = calculateExpenses(expenses, monthlyGrossIncome);
    const operatingExpenses =
        12 * (monthlyExpenses.fixed + monthlyExpenses.variable);

    // calculate net operating income
    const netOperatingIncome = grossIncome - operatingExpenses;
    // const expenseGrossIncomeRatio = (operatingExpenses / grossIncome) * 100;

    // calculate monthly mortgage payment
    const totalExpenses = operatingExpenses + monthlyMortgagePayment * 12;
    const mortgageExpenseRatio =
        (monthlyMortgagePayment /
            (operatingExpenses / 12 + monthlyMortgagePayment)) *
        100;

    const annualMortgagePayment = Math.round(monthlyMortgagePayment * 12);

    // calculate total cash flow and cash ROI
    const totalCashFlow = netOperatingIncome - monthlyMortgagePayment * 12;
    const cashROI = (totalCashFlow / investmentAmount) * 100;

    // calculate CAP rate and Pro Forma CAP rate
    const capitalizationRate = (netOperatingIncome / purchasePrice) * 100;

    return {
        grossIncome,
        totalExpenses,
        operatingExpenses,
        netOperatingIncome,
        monthlyCashFlow: totalCashFlow / 12,
        totalCashFlow,
        cashROI,
        investmentAmount,
        annualMortgagePayment,
        monthlyMortgagePayment,
        mortgageExpenseRatio,
        capitalizationRate,
    };
}

/*
    grossIncome: 11400,
    totalExpenses: 8633.487580916542,
    operatingExpenses: 3480,
    netOperatingIncome: 7920,
    monthlyCashFlow: 230.54270159028815,
    totalCashFlow: 2766.5124190834576,
    cashROI: 13.83256209541729,
    investmentAmount: 20000,
    monthlyMortgagePayment: 429.4572984097118,
    mortgageExpenseRatio: 59.691839857484815,
    capitalizationRate: 7.920000000000001
*/
