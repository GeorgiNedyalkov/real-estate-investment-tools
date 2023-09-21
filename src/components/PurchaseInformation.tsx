import { useState } from "react";
import Button from "./Button";
import { PurchaseTerms } from "../types";

type PurchaseProps = {
    purchaseTerms: PurchaseTerms;
    onPurchaseTermsChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function PurchaseInformation({
    purchaseTerms,
    onPurchaseTermsChange,
}: PurchaseProps) {
    const [hasValueGrowth, setHasValueGrowth] = useState(false);

    function onAddValueGrowth() {
        setHasValueGrowth(!hasValueGrowth);
    }

    return (
        <div className="mb-10 flex justify-between w-6/12">
            <div>
                <h2 className="text-2xl font-bold mb-5">
                    Purchase Information
                </h2>
                <label>Purchase Price</label>
                <input
                    name="purchasePrice"
                    type="number"
                    className="border p-2 ml-2 mb-5"
                    value={purchaseTerms.purchasePrice}
                    onChange={onPurchaseTermsChange}
                />
                <br />

                <Button onClick={onAddValueGrowth}>
                    Optional: property value growth
                </Button>

                <br />
                {hasValueGrowth && (
                    <>
                        <label>Annual property value growth</label>
                        <input
                            name="annualValueGrowth"
                            type="number"
                            className="border p-2 ml-2 mb-5"
                            value={purchaseTerms.annualValueGrowth}
                            onChange={onPurchaseTermsChange}
                        />
                    </>
                )}
            </div>

            {/* Display results */}
            <div>
                <h4 className="mb-2 text-xl font-bold">Property Value</h4>
                <p className="text-xl font-semibold">
                    {purchaseTerms.purchasePrice.toLocaleString() + " $"}
                </p>
            </div>
        </div>
    );
}
