import ReturnsTable from "./ReturnsTable";
import ReturnsLineChart from "./Returns/ReturnsLineChart";
import ExpensesBreakdown from "./Expenses/ExpensesBreakdown";
import ForecastLineChart from "./ForecastLineChart";
import ForecastTable from "./ForecastTable";
import { Expenses, LoanTerms, PurchaseTerms } from "../types";

type Props = {
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
}: Props) {
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
            <ReturnsTable
                purchasePrice={purchaseTerms.purchasePrice}
                rentalIncome={rentalIncome}
                loanTerms={loanTerms}
                expenses={expenses}
            />
            <div className="flex flex-col items-center gap-5">
                <ForecastLineChart />
                <ForecastTable />
            </div>
        </div>
    );
}
