export interface Expenses {
    propertyTaxes: number;
    insurance: number;
    repairsAndMaintenance: number;
    vacancy: number;
    capitalExpenditures: number;
    managementFees: number;
    electricity: number;
    gas: number;
    water: number;
    HOAFees: number;
    garbage: number;
    other: number;
}

export interface ExpensesBreakdown {
    fixed: {
        HOAFees: number;
        electricity: number;
        garbage: number;
        insurance: number;
        other: number;
        propertyTaxes: number;
        water: number;
    };
    variable: {
        capitalExpenditures: number;
        managementFees: number;
        repairsAndMaintenance: number;
        vacancy: number;
    };
}

export interface VariableExpense {
    capitalExpenditures: number;
    managementFees: number;
    repairsAndMaintenance: number;
    vacancy: number;
}

export interface FixedExpense {
    HOAFees: number;
    electricity: number;
    garbage: number;
    insurance: number;
    other: number;
    propertyTaxes: number;
    water: number;
}
