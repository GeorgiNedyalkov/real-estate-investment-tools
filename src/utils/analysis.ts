import { calculateExpenses } from "./expenses";
import { calculateLoan } from "./loan_calculator";
import { Expenses } from "../interfaces/IExpenses";
import { LoanTerms } from "../interfaces/ILoanTerms";

export function analyzeProperty(
    purchasePrice: number,
    loanDetails: LoanTerms,
    monthlyRent: number,
    expenses: Expenses
) {
    // initialize constants
    const { downpayment, interestRate, loanYears } = loanDetails;
    const investmentAmount = (downpayment / 100) * purchasePrice;

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
    const expenseGrossIncomeRatio = (operatingExpenses / grossIncome) * 100;

    // calculate monthly mortgage payment
    const monthlyMortgagePayment = calculateLoan(
        purchasePrice,
        downpayment,
        interestRate,
        loanYears
    );
    const totalExpenses = operatingExpenses + monthlyMortgagePayment * 12;
    const mortgageExpenseRatio =
        (monthlyMortgagePayment /
            (operatingExpenses / 12 + monthlyMortgagePayment)) *
        100;

    // calculate total cash flow and cash ROI
    const totalCashFlow = netOperatingIncome - monthlyMortgagePayment * 12;
    console.log({ totalCashFlow });
    const cashROI = (totalCashFlow / investmentAmount) * 100;

    return {
        monthlyCashFlow: totalCashFlow / 12,
        totalCashFlow,
        cashROI,
        grossIncome,
        investmentAmount,
        totalExpenses,
        netOperatingIncome,
        expenseGrossIncomeRatio,
        mortgageExpenseRatio,
        monthlyMortgagePayment,
    };
}
