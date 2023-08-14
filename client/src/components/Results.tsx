import Returns from "./Returns";
import ReturnsLineChart from "./ReturnsLineChart";
import ExpensesPieChart from "./ExpensesPieChart";
import ReportLineChart from "./ReportLineChart";

export default function Results({ rentalIncome }: { rentalIncome: number }) {
    return (
        <>
            <h2>Results</h2>
            <ReturnsLineChart />
            <ExpensesBreakdown />
            <Returns rentalIncome={rentalIncome} />
            <ReportLineChart />
        </>
    );
}

function ExpensesBreakdown() {
    return (
        <>
            <h2 className="font-bold text-2xl">Monthly Expense Breakdown</h2>
            <div className="flex items-center">
                <ExpensesPieChart />
                <ExpensesTable />
            </div>
        </>
    );
}

function ExpensesTable() {
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
                    <td className="px-2">Mortgage $433</td>
                    <td className="px-2">Electricity $10</td>
                    <td className="px-2">Vacancy $14</td>
                </tr>
                <tr>
                    <td className="px-2">Taxes $16</td>
                    <td className="px-2">Gas $10</td>
                    <td className="px-2">Maintenance $4</td>
                </tr>
                <tr>
                    <td className="px-2">Insurance $433</td>
                    <td className="px-2">Water & Sewer $10</td>
                    <td className="px-2">CapEx $22</td>
                </tr>
                <tr>
                    <td className="px-2">Variable Expeses $40</td>
                    <td className="px-2">HOA Fees $0</td>
                    <td className="px-2">Management Fees $0</td>
                </tr>
                <tr>
                    <td className="px-2">Mortgage $433</td>
                    <td className="px-2">Maintenen$10</td>
                    <td className="px-2">Vacancy $13</td>
                </tr>
            </tbody>
        </table>
    );
}
