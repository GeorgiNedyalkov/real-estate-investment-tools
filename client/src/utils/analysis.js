const expenses = {
    propertyTaxes: 10,
    insurance: 10,
    electricity: 10,
    gas: 10,
    water: 10,
    HOAfees: 0,
    garbage: 0,
    other: 0,
    repairsAndMaintenance: 5,
    vacancy: 5,
    capitalExpenditures: 5,
    managementFees: 5,
};

const loanDetails = {
    downpayment: 20,
    annualInterestRate: 5,
    years: 30,
};

const purchasePrice = 100000;

function analyzeProperty(
    purchasePrice,
    loanDetails,
    monthlyRent,
    vacancy,
    expenses
) {
    // initialize constants
    const { downpayment, annualInterestRate, years } = loanDetails;
    const investmentAmount = (downpayment / 100) * purchasePrice;

    // calculate income
    const monthlyGrossIncome = monthlyRent - monthlyRent * (vacancy / 100);
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
        annualInterestRate,
        years
    );

    const totalExpenses = operatingExpenses + monthlyMortgagePayment * 12;
    const mortgageExpenseRatio =
        (monthlyMortgagePayment /
            (operatingExpenses / 12 + monthlyMortgagePayment)) *
        100;

    // calculate total cash flow and cash ROI
    const totalCashFlow = netOperatingIncome - monthlyMortgagePayment * 12;
    const cashROI = (totalCashFlow / investmentAmount) * 100;

    console.log({
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
    });
}

analyzeProperty(purchasePrice, loanDetails, 1000, 5, expenses);

function calculateExpenses(expenses, monthlyRentalIncome) {
    let fixed = 0;
    let variable = 0;

    for (const key in expenses) {
        if (
            key === "repairsAndMaintenance" ||
            key === "vacancy" ||
            key === "capitalExpenditures" ||
            key === "managementFees"
        ) {
            variable += (expenses[key] / 100) * monthlyRentalIncome;
        } else {
            fixed += expenses[key];
        }
    }

    return {
        variable,
        fixed,
    };
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
