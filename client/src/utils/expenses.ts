interface Expenses {
    propertyTaxes: number;
    insurance: number;
    electricity: number;
    gas: number;
    water: number;
    HOAfees: number;
    garbage: number;
    other: number;
    repairsAndMaintenance: number;
    vacancy: number;
    capitalExpenditures: number;
    managementFees: number;
}

export function calculateExpenses(
    expenses: Expenses,
    monthlyRentalIncome: number
) {
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
            fixed += expenses[key as keyof Expenses];
        }
    }

    return {
        variable,
        fixed,
    };
}

export function calculateExpensesBreakdown(
    expenses: Expenses,
    monthlyRentalIncome: number
) {
    const fixed = {};
    const variable = {};

    for (const key in expenses) {
        if (
            key === "repairsAndMaintenance" ||
            key === "vacancy" ||
            key === "capitalExpenditures" ||
            key === "managementFees"
        ) {
            variable[key] = (expenses[key] / 100) * monthlyRentalIncome;
        } else {
            fixed[key] = expenses[key as keyof Expenses];
        }
    }

    return {
        variable,
        fixed,
    };
}

export function calculateTotalExpenses(
    expenses: Expenses,
    monthlyRentalIncome: number
) {
    const totalExpenses = calculateExpenses(expenses, monthlyRentalIncome);

    return totalExpenses.fixed + totalExpenses.variable;
}
