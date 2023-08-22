type ReturnsBreakdownProps = {
    name: string;
    cashFlow: number;
    expenses: number;
    rentalIncome: number;
    return: number;
};

export default function ReturnsBreakdown({
    selectedYear,
}: {
    selectedYear: ReturnsBreakdownProps;
}) {
    return (
        <div className="flex flex-col gap-5">
            <div>
                <p className="font-semibold">Mothly Cash Flow</p>
                <h3 className="text-xl font-bold">
                    ${selectedYear.cashFlow} / month
                </h3>
            </div>
            <div className="flex gap-5">
                <div>
                    <p className="font-semibold">Income</p>
                    <h4 className="text-xl font-bold text-green-500">
                        ${selectedYear.rentalIncome}/month
                    </h4>
                </div>
                <div>
                    <p className="font-semibold">Expenses</p>
                    <h4 className="text-xl font-bold text-red-500">
                        ${selectedYear.expenses}/month{" "}
                    </h4>
                </div>
            </div>
            <div>
                <p className="font-semibold">CoC ROI</p>
                <h4 className="text-xl font-bold">${selectedYear.return}% </h4>
            </div>
        </div>
    );
}
