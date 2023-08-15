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

function analyzeProperty(monthlyRent, vacancy, expenses) {
    // initialize constants
    const purchasePrice = 100000;
    const downpayment = 20;
    const annualInterestRate = 5;
    const years = 30;
    const investmentAmount = 20000;

    // calculate income
    const monthlyGrossIncome = monthlyRent - monthlyRent * (vacancy / 100);
    const grossIncome = monthlyGrossIncome * 12;

    // calculate expenses
    const monthlyExpenses = calculateExpenses(expenses, monthlyGrossIncome);
    const totalExpenses =
        12 * (monthlyExpenses.fixed + monthlyExpenses.variable);

    // calculate Net Operating Income
    const netOperatingIncome = grossIncome - totalExpenses;
    const expenseGrossIncomeRatio = (totalExpenses / grossIncome) * 100;

    // calculate monthly morgage payment
    const monthlyMortgagePayment = calculateLoan(
        purchasePrice,
        downpayment,
        annualInterestRate,
        years
    );

    const totalCashFlow = netOperatingIncome - monthlyMortgagePayment * 12;
    const cashROI = (totalCashFlow / investmentAmount) * 100;

    console.log({
        totalCashFlow,
        cashROI,
        grossIncome,
        totalExpenses,
        netOperatingIncome,
        expenseGrossIncomeRatio,
        monthlyMortgagePayment,
    });
}

analyzeProperty(1000, 5, expenses);

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
