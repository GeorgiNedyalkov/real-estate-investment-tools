import { useState } from "react";

import Header from "./components/Header";
import Results from "./components/Results";
import LoanForm from "./components/LoanForm";
import ExpensesForm from "./components/ExpensesForm";
import RentalIncome from "./components/RentalIncome";
import PurchaseInformation from "./components/PurchaseInformation";
import PropertyInformation from "./components/PropertyInformation";
import { Property } from "./interfaces/IProperty";

function App() {
    const [purchasePrice, setPurchasePrice] = useState(0);
    const [rentalIncome, setRentalIncome] = useState(0);
    const [showForm, setShowForm] = useState(true);
    const [showResults, setShowResults] = useState(true);
    const [propertyInformation, setPropertyInformation] = useState(
        INITIAL_PROPERTY_INFO
    );

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

            {showResults && <Results rentalIncome={rentalIncome} />}

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
                    <LoanForm purchasePrice={purchasePrice} />
                    <RentalIncome
                        rentalIncome={rentalIncome}
                        onRentalIncomeChange={onRentalIncomeChange}
                    />
                    <ExpensesForm rentalIncome={rentalIncome} />
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
