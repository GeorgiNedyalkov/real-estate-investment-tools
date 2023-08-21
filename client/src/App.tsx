import { useState } from "react";

import Header from "./components/Header";
import Results from "./components/Results";
import LoanForm from "./components/LoanForm";
import ExpensesForm from "./components/ExpensesForm";
import RentalIncome from "./components/RentalIncome";
import PurchaseInformation from "./components/PurchaseInformation";
import PropertyInformation from "./components/PropertyInformation";
import { Property } from "./interfaces/IProperty";
import { Expenses } from "./interfaces/IExpenses";
import { LoanTerms } from "./interfaces/ILoanTerms";
import { calculateLoan } from "./utils/loan_calculator.ts";

function App() {
    const [purchasePrice, setPurchasePrice] = useState(0);
    const [rentalIncome, setRentalIncome] = useState(0);
    const [showForm, setShowForm] = useState(true);
    const [showResults, setShowResults] = useState(true);
    const [propertyInformation, setPropertyInformation] = useState(
        INITIAL_PROPERTY_INFO
    );
    const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
    const [loanTerms, setLoanTerms] = useState(INITIAL_LOAN_TERMS);
    const [monthlyLoanPayment, setMonthlyLoanPayment] = useState("");

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
    propertyTaxes: 0,
    insurance: 0,
    repairsAndMaintenance: 0,
    vacancy: 0,
    capitalExpenditures: 0,
    managementFees: 0,
    electricity: 0,
    gas: 0,
    water: 0,
    HOAfees: 0,
    garbage: 0,
    other: 0,
};

const INITIAL_LOAN_TERMS: LoanTerms = {
    downpayment: 0,
    interestRate: 0,
    loanYears: 0,
};
