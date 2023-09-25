import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button.tsx";
import Analysis from "./components/Analysis";
import LoanForm from "./components/LoanForm";
import ExpensesForm from "./components/Expenses/ExpensesForm.tsx";
import RentalIncomeForm from "./components/RentalIncomeForm.tsx";
import PurchaseInformationForm from "./components/PurchaseInformationForm.tsx";
import PropertyInformationForm from "./components/PropertyInformationForm.tsx";
import { Property, LoanTerms, PurchaseTerms, ReactChangeEvent } from "./types";
import { calculateLoan } from "./utils/loan_calculator.ts";
import {
    INITIAL_EXPENSES,
    INITIAL_PROPERTY_INFO,
    INITIAL_LOAN_TERMS,
    INITIAL_PURCHASE_TERMS,
} from "./data";

function App() {
    const [rentalIncome, setRentalIncome] = useState(1000);
    const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
    const [loanTerms, setLoanTerms] = useState(INITIAL_LOAN_TERMS);
    const [monthlyLoanPayment, setMonthlyLoanPayment] = useState(0);
    const [showForm, setShowForm] = useState(true);
    const [showResults, setShowResults] = useState(true);
    const [propertyInformation, setPropertyInformation] = useState<Property>(
        INITIAL_PROPERTY_INFO
    );
    const [purchaseTerms, setPurchaseTerms] = useState<PurchaseTerms>(
        INITIAL_PURCHASE_TERMS
    );

    const onPropertyChange = (e: ReactChangeEvent) => {
        setPropertyInformation({
            ...propertyInformation,
            [e.target.name]: e.target.value,
        });
    };

    const onLoanTermsChange = (e: ReactChangeEvent) => {
        setLoanTerms({
            ...loanTerms,
            [e.target.name]: e.target.value,
        });
    };

    const onPurchaseTermsChange = (e: ReactChangeEvent) => {
        setPurchaseTerms({
            ...purchaseTerms,
            [e.target.name]: Number(e.target.value),
        });
    };

    const onRentalIncomeChange = (e: ReactChangeEvent) => {
        setRentalIncome(Number(e.target.value));
    };

    const onExpensesChange = (e: ReactChangeEvent) => {
        setExpenses({
            ...expenses,
            [e.target.name]: Number(e.target.value),
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
                    <PropertyInformationForm
                        propertyInformation={propertyInformation}
                        onPropertyChange={onPropertyChange}
                    />
                    <PurchaseInformationForm
                        purchaseTerms={purchaseTerms}
                        onPurchaseTermsChange={onPurchaseTermsChange}
                    />
                    <LoanForm
                        purchasePrice={purchaseTerms.purchasePrice}
                        loanTerms={loanTerms}
                        onLoanTermsChange={onLoanTermsChange}
                        onCalculateMonthlyMortgage={onCalculateMonthlyMortgage}
                    />
                    <RentalIncomeForm
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
