import { Expenses, LoanTerms } from "../interfaces/interfaces";
import { analyzeProperty } from "../utils/analysis.ts";

type ReturnProps = {
    rentalIncome: number;
    purchasePrice: number;
    loanTerms: LoanTerms;
    expenses: Expenses;
};

export default function Returns({
    rentalIncome,
    purchasePrice,
    loanTerms,
    expenses,
}: ReturnProps) {
    const expectedOperatingExpenses = rentalIncome * 0.5;
    const vacancy = 0.03;
    const netOperatingIncome = rentalIncome - rentalIncome * vacancy;

    const analysis = analyzeProperty(
        purchasePrice,
        loanTerms,
        rentalIncome,
        expenses
    );

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
                <KPI
                    label="Pro Forma CAP"
                    statistic={analysis.capitalizationRate.toFixed(2) + " %"}
                />
                <KPI
                    label="Purchase CAP"
                    statistic={analysis.capitalizationRate.toFixed(2) + " %"}
                />
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
                    statistic={"$" + netOperatingIncome / 2}
                />
            </div>
        </div>
    );
}

const KPI = ({ label, statistic }: { label: string; statistic: string }) => {
    return (
        <div className="w-40">
            <p>{label}</p>
            <h3 className="font-bold text-lg">{statistic}</h3>
        </div>
    );
};
