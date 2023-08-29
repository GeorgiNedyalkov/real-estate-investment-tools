import { Expenses, LoanTerms } from "../interfaces/interfaces";
import { analyzeProperty } from "../utils/analysis.ts";

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

    const analysis = analyzeProperty(
        purchasePrice,
        loanTerms,
        rentalIncome,
        expenses
    );

    function calculateResults() {
        return analyzeProperty(
            purchasePrice,
            loanTerms,
            rentalIncome,
            expenses
        );
    }

    return (
        <div className="mb-40">
            <h2 className="text-2xl font-bold mb-5">Returns</h2>
            <div className="mb-20 flex gap-10">
                <KPI
                    label="NOI"
                    statistic={
                        "$" + analysis.netOperatingIncome.toLocaleString()
                    }
                />
                <KPI
                    label="CoC ROI"
                    statistic={analysis.cashROI.toFixed(2) + " %"}
                />
                <KPI label="Pro Forma CAP" statistic={3.25 + "%"} />
                <KPI label="Purchase CAP" statistic={3.25 + "%"} />
            </div>

            <h2 className="text-2xl font-bold mb-5">50% Rule</h2>
            <div className="flex gap-10">
                <KPI
                    label="Total Monthly Income"
                    statistic={"$" + rentalIncome}
                />
                <KPI
                    label="50% for expenses"
                    statistic={"$" + expectedOperatingExpenses}
                />
                <KPI
                    label="Monthly P&I"
                    statistic={
                        "$" + (netOperatingIncome - expectedOperatingExpenses)
                    }
                />
                <KPI
                    label="50% rule cash flow"
                    statistic={"%" + netOperatingIncome}
                />
            </div>
            <button className="mt-10 border p-2" onClick={calculateResults}>
                Calculate Results
            </button>
        </div>
    );
}

function KPI({ label, statistic }: { label: string; statistic: string }) {
    return (
        <div className="w-40">
            <p>{label}</p>
            <h3 className="font-bold text-lg">{statistic}</h3>
        </div>
    );
}
