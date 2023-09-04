import Returns from "./Returns";
import ReturnsLineChart from "./Returns/ReturnsLineChart";
import ReportLineChart from "./ReportLineChart";
import ExpensesBreakdown from "./Expenses/ExpensesBreakdown";
import ReportTable from "./ReportTable";
import { Expenses, LoanTerms, PurchaseTerms } from "../interfaces/interfaces";

type AnalysisProps = {
    purchaseTerms: PurchaseTerms;
    loanTerms: LoanTerms;
    expenses: Expenses;
    rentalIncome: number;
    monthlyLoanPayment: number;
};

export default function Analysis({
    purchaseTerms,
    loanTerms,
    expenses,
    rentalIncome,
    monthlyLoanPayment,
}: AnalysisProps) {
    return (
        <div className="border flex flex-col items-center mx-auto gap-20">
            <section className="flex justify-around">
                <ReturnsLineChart
                    expenses={expenses}
                    purchaseTerms={purchaseTerms}
                    monthlyLoanPayment={monthlyLoanPayment}
                    loanTerms={loanTerms}
                    rentalIncome={rentalIncome}
                />
            </section>
            <ExpensesBreakdown
                expenses={expenses}
                rentalIncome={rentalIncome}
                monthlyLoanPayment={monthlyLoanPayment}
            />
            <Returns
                purchasePrice={purchaseTerms.purchasePrice}
                rentalIncome={rentalIncome}
                loanTerms={loanTerms}
                expenses={expenses}
            />
            <div className="flex flex-col items-center gap-5">
                <ReportLineChart />
                <ReportTable />
            </div>
        </div>
    );
}
