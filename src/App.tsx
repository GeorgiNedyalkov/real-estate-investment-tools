import { useState } from "react";

import Header from "./components/Header";
import Results from "./components/Results";
import LoanForm from "./components/LoanForm";
import ExpensesForm from "./components/ExpensesForm";
import RentalIncome from "./components/RentalIncome";
import PurchaseInformation from "./components/PurchaseInformation";
import PropertyInformation from "./components/PropertyInformation";
import { Property, Expenses, LoanTerms } from "./interfaces/interfaces";
import { calculateLoan } from "./utils/loan_calculator.ts";

function App() {
    const [purchasePrice, setPurchasePrice] = useState(100_000);
    const [rentalIncome, setRentalIncome] = useState(1000);
    const [showForm, setShowForm] = useState(true);
    const [showResults, setShowResults] = useState(true);
    const [propertyInformation, setPropertyInformation] = useState(
        INITIAL_PROPERTY_INFO
    );
    const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
    const [loanTerms, setLoanTerms] = useState(INITIAL_LOAN_TERMS);
    const [monthlyLoanPayment, setMonthlyLoanPayment] = useState(0);

    const onPurchasePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPurchasePrice(+e.target.value);
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
            purchasePrice,
            values.downpayment,
            values.interestRate,
            values.loanYears
        );

        setMonthlyLoanPayment(monthlyPayment);
    };

    return (
        <div className="bg-slate-100 ml-20 w-10/12 p-10">
            <Header />
            <button
                className="border p-2 font-bold mb-10"
                onClick={() => setShowForm(!showForm)}
            >
                Show Form
            </button>

            <button
                className="border p-2 font-bold mb-10"
                onClick={() => setShowResults(!showResults)}
            >
                Show Results
            </button>

            {showResults && (
                <Results
                    rentalIncome={rentalIncome}
                    expenses={expenses}
                    monthlyLoanPayment={monthlyLoanPayment}
                    purchasePrice={purchasePrice}
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
                        purchasePrice={purchasePrice}
                        onPurchasePriceChange={onPurchasePriceChange}
                    />
                    <LoanForm
                        purchasePrice={purchasePrice}
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
};

const INITIAL_LOAN_TERMS: LoanTerms = {
    downpayment: 20,
    interestRate: 5,
    loanYears: 30,
};
