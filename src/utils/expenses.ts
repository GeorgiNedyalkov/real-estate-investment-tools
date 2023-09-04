import {
    Expenses,
    FixedExpense,
    VariableExpense,
} from "../interfaces/interfaces.ts";

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
            fixed += expenses[key as keyof Expenses]!;
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
    const fixed: FixedExpense = {
        HOAFees: 0,
        electricity: 0,
        garbage: 0,
        insurance: 0,
        other: 0,
        propertyTaxes: 0,
        water: 0,
    };

    const variable: VariableExpense = {
        capitalExpenditures: 0,
        managementFees: 0,
        repairsAndMaintenance: 0,
        vacancy: 0,
    };

    for (const key in expenses) {
        if (
            key === "repairsAndMaintenance" ||
            key === "vacancy" ||
            key === "capitalExpenditures" ||
            key === "managementFees"
        ) {
            variable[key] = (expenses[key] / 100) * monthlyRentalIncome;
        } else if (
            key === "HOAFees" ||
            key === "electricity" ||
            key === "garbage" ||
            key === "insurance" ||
            key === "other" ||
            key === "propertyTaxes" ||
            key === "water"
        ) {
            fixed[key] = expenses[key];
        }
    }

    return {
        fixed,
        variable,
    };
}

export function calculateTotalExpenses(
    expenses: Expenses,
    monthlyRentalIncome: number
) {
    const totalExpenses = calculateExpenses(expenses, monthlyRentalIncome);

    return totalExpenses.fixed + totalExpenses.variable;
}
