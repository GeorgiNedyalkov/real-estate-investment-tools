import ExpensesPieChart from "./ExpensesPieChart";
import ExpensesTable from "./ExpensesTable";
import { Expenses } from "../interfaces/IExpenses";

export default function ExpensesBreakdown({
    expenses,
    monthlyLoanPayment,
}: {
    expenses: Expenses;
    monthlyLoanPayment: string;
}) {
    return (
        <>
            <h2 className="font-bold text-2xl">Monthly Expense Breakdown</h2>
            <div className="flex items-center">
                <ExpensesPieChart expenses={expenses} />
                <ExpensesTable
                    expenses={expenses}
                    monthlyLoanPayment={monthlyLoanPayment}
                />
            </div>
        </>
    );
}
