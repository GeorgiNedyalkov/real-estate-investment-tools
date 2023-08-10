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

// const totalExpenses = {
//     propertyTaxes: 10,
//     insurance: 10,
//     repairsAndMaintenance: 20,
//     vacancy: 10,
//     capitalExpenditures: 10,
//     managementFees: 10,
//     electricity: 10,
//     gas: 10,
//     water: 10,
//     HOAfees: 10,
//     garbage: 10,
//     other: 10,
// };

// console.log(calculateExpenses(totalExpenses, 1000));
