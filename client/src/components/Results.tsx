import Returns from "./Returns";
import ReturnsLineChart from "./ReturnsLineChart";
import ReportLineChart from "./ReportLineChart";
import ExpensesBreakdown from "./ExpensesBreakdown";
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
        <>
            <p>Rental Income {rentalIncome}</p>
            <div className="flex justify-around">
                {/* Returns */}
                <ReturnsLineChart
                    expenses={expenses}
                    rentalIncome={rentalIncome}
                />
            </div>
            {/* Expenses */}
            <ExpensesBreakdown
                expenses={expenses}
                monthlyLoanPayment={monthlyLoanPayment}
            />
            <Returns
                purchasePrice={purchasePrice}
                rentalIncome={rentalIncome}
                loanTerms={loanTerms}
                expenses={expenses}
            />
            <ReportLineChart />
        </>
    );
}
