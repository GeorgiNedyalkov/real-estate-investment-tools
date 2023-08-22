import Returns from "./Returns";
import ReturnsLineChart from "./ReturnsLineChart";
import ExpensesPieChart from "./ExpensesPieChart";
import ReportLineChart from "./ReportLineChart";
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

function ExpensesBreakdown({
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

function ExpensesTable({
    expenses,
    monthlyLoanPayment,
}: {
    expenses: Expenses;
    monthlyLoanPayment: string;
}) {
    return (
        <table>
            <thead>
                <tr>
                    <th className="p-2">Total Expenses</th>
                    <th className="p-2">Fixed Expenses</th>
                    <th className="p-2">Variable Expenses</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="px-2">
                        Mortgage $433 and {monthlyLoanPayment}
                    </td>
                    <td className="px-2">
                        Electricity ${expenses.electricity}
                    </td>
                    <td className="px-2">Vacancy ${expenses.vacancy}</td>
                </tr>
                <tr>
                    <td className="px-2">Taxes ${expenses.propertyTaxes}</td>
                    <td className="px-2">Gas ${expenses.gas}</td>
                    <td className="px-2">
                        Maintenance ${expenses.repairsAndMaintenance}
                    </td>
                </tr>
                <tr>
                    <td className="px-2">Insurance ${expenses.insurance}</td>
                    <td className="px-2">Water & Sewer ${expenses.water}</td>
                    <td className="px-2">
                        CapEx ${expenses.capitalExpenditures}
                    </td>
                </tr>
                <tr>
                    <td className="px-2">Variable Expeses $40</td>
                    <td className="px-2">HOA Fees ${expenses.HOAfees}</td>
                    <td className="px-2">Garbage ${expenses.garbage}</td>
                </tr>
                <tr>
                    <td className="px-2">Mortgage $433</td>
                    <td className="px-2">
                        Maintenance ${expenses.repairsAndMaintenance}
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
