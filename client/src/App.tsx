import { useState } from "react";

import Header from "./components/Header";
import LoanForm from "./components/LoanForm";
import PurchaseInformation from "./components/PurchaseInformation";
import RentalIncome from "./components/RentalIncome";
import Expenses from "./components/Expenses";
import PropertyInformation from "./components/PropertyInformation";
import Results from "./components/Results";

function App() {
    const [purchasePrice, setPurchasePrice] = useState(0);
    const [rentalIncome, setRentalIncome] = useState(0);
    const [showForm, setShowForm] = useState(false);

    const onPurchasePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPurchasePrice(+e.target.value);
    };

    const onRentalIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRentalIncome(+e.target.value);
    };

    return (
        <div className="bg-slate-100 ml-20 w-10/12 p-10">
            <Header />

            <Results rentalIncome={rentalIncome} />

            <button
                className="border p-2 font-bold mb-10"
                onClick={() => setShowForm(!showForm)}
            >
                Show Form
            </button>

            {showForm && (
                <>
                    <PropertyInformation />
                    <PurchaseInformation
                        purchasePrice={purchasePrice}
                        onPurchasePriceChange={onPurchasePriceChange}
                    />
                    <LoanForm purchasePrice={purchasePrice} />
                    <RentalIncome
                        rentalIncome={rentalIncome}
                        onRentalIncomeChange={onRentalIncomeChange}
                    />
                    <Expenses rentalIncome={rentalIncome} />
                </>
            )}
        </div>
    );
}

export default App;
