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
