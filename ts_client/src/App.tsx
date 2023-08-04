import { useState } from "react";

import Header from "./components/Header";
import LoanForm from "./components/LoanForm";
import PurchaseInformation from "./components/PurchaseInformation";

function App() {
    const [purchasePrice, setPurchasePrice] = useState(0);

    const onPurchasePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPurchasePrice(+e.target.value);
    };

    return (
        <div className="bg-slate-100 ml-20 w-10/12 p-10">
            <Header />
            <PurchaseInformation
                purchasePrice={purchasePrice}
                onPurchasePriceChange={onPurchasePriceChange}
            />
            <LoanForm purchasePrice={purchasePrice} />
        </div>
    );
}

export default App;
