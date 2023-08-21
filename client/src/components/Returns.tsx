import { Expenses } from "../interfaces/IExpenses";
import { LoanTerms } from "../interfaces/ILoanTerms";
import { analyzeProperty } from "../utils/analysis";

export default function Returns({
    rentalIncome,
    purchasePrice,
    loanTerms,
    expenses,
}: {
    rentalIncome: number;
    purchasePrice: number;
    loanTerms: LoanTerms;
    expenses: Expenses;
}) {
    const expectedOperatingExpenses = rentalIncome * 0.5;
    const vacancy = 0.03;
    const netOperatingIncome = rentalIncome - rentalIncome * vacancy;

    function calculateResults() {
        analyzeProperty(purchasePrice, loanTerms, rentalIncome, expenses);
        console.log({ purchasePrice, loanTerms, rentalIncome, expenses });
    }
    return (
        <div className="mb-40">
            <button className="border p-2" onClick={calculateResults}>
                Calculate Results
            </button>
            <h2 className="text-2xl font-bold mb-5">Returns</h2>
            <div className="mb-20 flex gap-10">
                <div className="w-40">
                    <p>NOI</p>
                    <h3 className="font-bold text-lg">$4,170</h3>
                </div>
                <div className="w-40">
                    <p>CoC ROI</p>
                    <h3 className="font-bold text-lg">-3.35%</h3>
                </div>
                <div className="w-40">
                    <p>Pro forma cap</p>
                    <h3 className="font-bold text-lg">3.25%</h3>
                </div>
                <div className="w-40">
                    <p>Purchase cap</p>
                    <h3 className="font-bold text-lg">3.25%</h3>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-5">50% Rule</h2>

            <div className="flex gap-10">
                <div className="w-40">
                    <p>Total Montlhy Income</p>
                    <h3 className="font-bold text-lg">${rentalIncome}</h3>
                </div>
                <div className="w-40">
                    <p>50% for expenses</p>
                    <h3 className="font-bold text-lg">
                        ${expectedOperatingExpenses}
                    </h3>
                </div>

                <div className="w-40">
                    <p>Monthly P&I</p>
                    <h3 className="font-bold text-lg">${netOperatingIncome}</h3>
                </div>
                <div className="w-40">
                    <p>50% rule cash flow</p>
                    <h3 className="font-bold text-lg">
                        ${netOperatingIncome - expectedOperatingExpenses}
                    </h3>
                </div>
            </div>
        </div>
    );
}
