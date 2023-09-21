import { PurchaseTerms, Property, Expenses, LoanTerms } from "../types";

export const INITIAL_PURCHASE_TERMS: PurchaseTerms = {
    purchasePrice: 100_000,
    closingCosts: 0,
    rehab: 0,
    annualValueGrowth: 1,
};

export const INITIAL_PROPERTY_INFO: Property = {
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    bedrooms: 0,
    bathrooms: 0,
    size: 0,
    yearBuilt: 0,
    description: "",
};

export const INITIAL_EXPENSES: Expenses = {
    propertyTaxes: 10,
    insurance: 10,
    repairsAndMaintenance: 5,
    vacancy: 5,
    capitalExpenditures: 5,
    managementFees: 5,
    electricity: 20,
    gas: 20,
    water: 20,
    HOAFees: 10,
    garbage: 10,
    other: 0,
    annualExpensesGrowth: 2,
    salesExpenses: 0,
};

export const INITIAL_LOAN_TERMS: LoanTerms = {
    downpayment: 20,
    interestRate: 5,
    loanYears: 30,
};
