export interface PurchaseTerms {
    purchasePrice: number;
    closingCosts: number;
    rehab: number;
    annualValueGrowth: number;
}

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
    annualExpensesGrowth?: number;
    salesExpenses?: number;
}

export interface IExpensesBreakdown {
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

export interface LoanTerms {
    downpayment: number;
    interestRate: number;
    loanYears: number;
}

export interface Property {
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
    bedrooms?: number;
    bathrooms?: number;
    size?: number;
    yearBuilt?: number;
    description?: string;
}

export interface ColumnData {
    accessor: string;
    label: string;
}

export interface RowData {
    id: number;
    year0: number;
    year1?: number;
    year2?: number;
    year3?: number;
    year4?: number;
    year5?: number;
    year10?: number;
    year15?: number;
    year20?: number;
    year30?: number;
    [key: string]: number | string | undefined;
}

//==============================================================================
// Events
//==============================================================================

export type ReactChangeEvent = React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;
