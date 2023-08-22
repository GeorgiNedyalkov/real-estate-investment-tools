import { Expenses } from "../interfaces/IExpenses";

export default function ExpensesTable({
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
