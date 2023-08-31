import Returns from "./Returns";
import ReturnsLineChart from "./ReturnsLineChart";
import ReportLineChart from "./ReportLineChart";
import ExpensesBreakdown from "./Expenses/ExpensesBreakdown";
import ReportTable from "./ReportTable";
import { Expenses, LoanTerms } from "../interfaces/interfaces";

export default function Analysis({
    purchasePrice,
    rentalIncome,
    expenses,
    monthlyLoanPayment,
    loanTerms,
}: {
    purchasePrice: number;
    rentalIncome: number;
    expenses: Expenses;
    loanTerms: LoanTerms;
    monthlyLoanPayment: number;
}) {
    return (
        <div className="border flex flex-col items-center mx-auto gap-20">
            <section className="flex justify-around">
                <ReturnsLineChart
                    expenses={expenses}
                    rentalIncome={rentalIncome}
                />
            </section>
            <ExpensesBreakdown
                expenses={expenses}
                rentalIncome={rentalIncome}
                monthlyLoanPayment={monthlyLoanPayment}
            />
            <Returns
                purchasePrice={purchasePrice}
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
