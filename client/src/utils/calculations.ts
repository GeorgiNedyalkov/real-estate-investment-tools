export function calculatePurchaseExpenses(
    purchasePrice: number,
    closingCosts: number
): number {
    return purchasePrice + purchasePrice * (closingCosts / 100);
}

export function calculateRentalIncome(
    monthlyRent: number,
    vacancy: number
): number {
    return monthlyRent - monthlyRent * (vacancy / 100);
}

export function calculateGrossMonthlyIncome(rent: number): number {
    return rent * 12;
}

export function calculateRentToPropertyValueRatio(
    rent: number,
    propertyValue: number
): number {
    return (rent / propertyValue) * 100;
}

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
            return: ((cashFlow / cashInvested) * 100).toFixed(2),
        };

        console.log(currentYear);

        results.push(currentYear);

        years++;

        const rentalIncomeGrowthPercentage = annualIncomeGrowthPercentage / 100;
        const expensesGrowthPercentage = annualExpensesGrowthPercentage / 100;

        expenses += Math.round(expensesGrowthPercentage * expenses);
        rentalIncome += Math.round(rentalIncomeGrowthPercentage * rentalIncome);
    }

    return results;
}
