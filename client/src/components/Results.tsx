import Returns from "./Returns";
import ReturnsLineChart from "./ReturnsLineChart";
import ReportLineChart from "./ReportLineChart";
import ExpensesBreakdown from "./ExpensesBreakdown";
import ReportTable from "./ReportTable";
import { Expenses } from "../interfaces/IExpenses";
import { LoanTerms } from "../interfaces/ILoanTerms";

export default function Results({
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
    monthlyLoanPayment: string;
}) {
    return (
        <div className="w-10/12 border flex flex-col items-center mx-auto gap-20">
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
