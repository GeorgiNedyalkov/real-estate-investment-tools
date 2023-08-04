type PurchaseProps = {
    purchasePrice: number;
    onPurchasePriceChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function PurchaseInformation({
    purchasePrice,
    onPurchasePriceChange,
}: PurchaseProps) {
    return (
        <div className="mb-10 flex justify-between w-6/12">
            <div>
                <h2 className="text-2xl font-bold mb-5">
                    Purchase Information
                </h2>
                <label>Purchase Price</label>
                <input
                    type="number"
                    className="border p-2 ml-2"
                    value={purchasePrice}
                    onChange={onPurchasePriceChange}
                />
            </div>
            <div>
                <h4 className="mb-2 text-xl font-bold">Purchase Price</h4>
                <p className="text-xl font-semibold">
                    {purchasePrice.toLocaleString() + " $"}
                </p>
            </div>
        </div>
    );
}