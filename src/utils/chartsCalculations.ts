export function calculateLineChartData(
    expenses: number,
    rentalIncome: number,
    annualIncomeGrowthPercentage: number,
    annualExpensesGrowthPercentage: number,
    cashInvested: number
) {
    const results = [];
    let years = 1;

    while (years <= 30) {
        const cashFlow = rentalIncome - expenses;

        const currentYear = {
            name: `Year ${years}`,
            cashFlow,
            expenses,
            rentalIncome,
            return: (cashFlow / cashInvested) * 100,
        };

        results.push(currentYear);

        years++;

        const rentalIncomeGrowthPercentage = annualIncomeGrowthPercentage / 100;
        const expensesGrowthPercentage = annualExpensesGrowthPercentage / 100;

        expenses += Math.round(expensesGrowthPercentage * expenses);
        rentalIncome += Math.round(rentalIncomeGrowthPercentage * rentalIncome);
    }

    return results;
}
