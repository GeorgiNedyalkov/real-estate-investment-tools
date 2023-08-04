type RentalIncomeProps = {
    rentalIncome: number;
    onRentalIncomeChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function RentalIncome({
    rentalIncome,
    onRentalIncomeChange,
}: RentalIncomeProps) {
    return (
        <div className="mb-10 my-20 flex justify-between w-6/12">
            <div>
                <h2 className="text-2xl font-bold mb-5">Rental Income</h2>
                <label>Rental Income</label>
                <input
                    type="number"
                    className="border p-2 ml-2"
                    value={rentalIncome}
                    onChange={onRentalIncomeChange}
                />
            </div>
            <div>
                <h4 className="mb-2 text-xl font-bold">Rental Income</h4>
                <p className="text-xl font-semibold">
                    {rentalIncome?.toLocaleString() + " $"}
                </p>
            </div>
        </div>
    );
}
