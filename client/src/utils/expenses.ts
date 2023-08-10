interface Expenses {
    propertyTaxes: number;
    insurance: number;
    repairsAndMaintenance: number;
    vacancy: number;
    capitalExpenditures: number;
    managementFees: number;
    electricity: number;
    gas: number;
    water: number;
    HOAfees: number;
    garbage: number;
    other: number;
}

export function calculateExpenses(
    expenses: Expenses,
    monthlyRentalIncome: number
): number {
    let sum = 0;

    for (const key in expenses) {
        if (
            key === "repairsAndMaintenance" ||
            key === "vacancy" ||
            key === "capitalExpenditures" ||
            key === "managementFees"
        ) {
            sum += (expenses[key] / 100) * monthlyRentalIncome;
        } else {
            sum += expenses[key as keyof Expenses];
        }
    }

    return sum;
}
