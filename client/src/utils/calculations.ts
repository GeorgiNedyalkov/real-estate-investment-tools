function calculatePurchaseExpenses(
    purchasePrice: number,
    closingCosts: number
): number {
    return purchasePrice + purchasePrice * (closingCosts / 100);
}

function calculateRentalIncome(monthlyRent: number, vacancy: number): number {
    return monthlyRent - monthlyRent * (vacancy / 100);
}

function calculateGrossMonthlyIncome(rent: number): number {
    return rent * 12;
}

const grossMonthlyIncome = calculateGrossMonthlyIncome(1000);
