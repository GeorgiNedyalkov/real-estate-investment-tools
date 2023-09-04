import { useState } from "react";

import Header from "./components/Header";
import Button from "./components/Button.tsx";
import Analysis from "./components/Analysis";
import LoanForm from "./components/LoanForm";
import ExpensesForm from "./components/Expenses/ExpensesForm.tsx";
import RentalIncome from "./components/RentalIncome";
import PurchaseInformation from "./components/PurchaseInformation";
import PropertyInformation from "./components/PropertyInformation";
import {
    Property,
    Expenses,
    LoanTerms,
    PurchaseTerms,
} from "./interfaces/interfaces";
import { calculateLoan } from "./utils/loan_calculator.ts";

function App() {
    const [propertyInformation, setPropertyInformation] = useState<Property>(
        INITIAL_PROPERTY_INFO
    );
    const [purchaseTerms, setPurchaseTerms] = useState<PurchaseTerms>(
        INITIAL_PURCHASE_TERMS
    );
    const [rentalIncome, setRentalIncome] = useState(1000);
    const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
    const [loanTerms, setLoanTerms] = useState(INITIAL_LOAN_TERMS);
    const [monthlyLoanPayment, setMonthlyLoanPayment] = useState(0);
    const [showForm, setShowForm] = useState(true);
    const [showResults, setShowResults] = useState(true);

    const onPurchaseTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPurchaseTerms({
            ...purchaseTerms,
            [e.target.name]: Number(e.target.value),
        });
    };

    const onRentalIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRentalIncome(+e.target.value);
    };

    const onPropertyChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setPropertyInformation({
            ...propertyInformation,
            [e.target.name]: e.target.value,
        });
    };

    const onExpensesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExpenses({
            ...expenses,
            [e.target.name]: Number(e.target.value),
        });
    };

    const onLoanTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoanTerms({
            ...loanTerms,
            [e.target.name]: e.target.value,
        });
    };

    const onCalculateMonthlyMortgage = (values: LoanTerms) => {
        const monthlyPayment = calculateLoan(
            purchaseTerms.purchasePrice,
            values.downpayment,
            values.interestRate,
            values.loanYears
        );

        setMonthlyLoanPayment(monthlyPayment);
    };

    const toggleShowForm = () => setShowForm(!showForm);
    const toggleShowResults = () => setShowResults(!showResults);

    return (
        <div className="bg-slate-100 ml-20 w-10/12 p-10">
            <Header />
            <Button onClick={toggleShowForm}>Show Form</Button>
            <Button onClick={toggleShowResults}>Show Results</Button>

            {showResults && (
                <Analysis
                    rentalIncome={rentalIncome}
                    expenses={expenses}
                    monthlyLoanPayment={monthlyLoanPayment}
                    purchaseTerms={purchaseTerms}
                    loanTerms={loanTerms}
                />
            )}

            {showForm && (
                <>
                    <PropertyInformation
                        propertyInformation={propertyInformation}
                        onPropertyChange={onPropertyChange}
                    />
                    <PurchaseInformation
                        purchaseTerms={purchaseTerms}
                        onPurchaseTermsChange={onPurchaseTermsChange}
                    />
                    <LoanForm
                        purchasePrice={purchaseTerms.purchasePrice}
                        loanTerms={loanTerms}
                        onLoanTermsChange={onLoanTermsChange}
                        onCalculateMonthlyMortgage={onCalculateMonthlyMortgage}
                    />
                    <RentalIncome
                        rentalIncome={rentalIncome}
                        onRentalIncomeChange={onRentalIncomeChange}
                    />
                    <ExpensesForm
                        expenses={expenses}
                        rentalIncome={rentalIncome}
                        onExpensesChange={onExpensesChange}
                    />
                </>
            )}
        </div>
    );
}

export default App;

const INITIAL_PURCHASE_TERMS: PurchaseTerms = {
    purchasePrice: 100_000,
    closingCosts: 0,
    rehab: 0,
    annualValueGrowth: 1,
};

const INITIAL_PROPERTY_INFO: Property = {
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

const INITIAL_EXPENSES: Expenses = {
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

const INITIAL_LOAN_TERMS: LoanTerms = {
    downpayment: 20,
    interestRate: 5,
    loanYears: 30,
};
