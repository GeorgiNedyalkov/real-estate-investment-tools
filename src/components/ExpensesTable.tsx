import { Expenses } from "../interfaces/interfaces";

export default function ExpensesTable({
    expenses,
    monthlyLoanPayment,
    fixedExpenses,
    variableExpenses,
}: {
    expenses: Expenses;
    monthlyLoanPayment: number;
    fixedExpenses: number;
    variableExpenses: number;
}) {
    const allExpenses = Math.round(
        fixedExpenses +
            variableExpenses +
            monthlyLoanPayment +
            expenses.propertyTaxes +
            expenses.insurance
    );

    return (
        <table className="border">
            <thead>
                <tr>
                    <th className="p-2">Total Expenses $ {allExpenses}</th>
                    <th className="p-2">Fixed Expenses ${fixedExpenses}</th>
                    <th className="p-2">
                        Variable Expenses ${variableExpenses}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <TableData>
                        <Dot color={"bg-[#0088FE]"} />
                        Mortgage ${Math.round(monthlyLoanPayment)}
                    </TableData>

                    <td className="px-2">
                        Electricity ${expenses.electricity}
                    </td>
                    <td className="px-2">Vacancy ${expenses.vacancy}</td>
                </tr>
                <tr>
                    <TableData>
                        <Dot color={"bg-[#00C49F]"} />
                        Taxes ${expenses.propertyTaxes}
                    </TableData>
                    <td className="px-2">
                        Gas <span>${expenses.gas}</span>
                    </td>
                    <td className="px-2">
                        Maintenance ${expenses.repairsAndMaintenance}
                    </td>
                </tr>
                <tr>
                    <TableData>
                        <Dot color="bg-[#FFBB28]" />
                        Insurance ${expenses.insurance}
                    </TableData>
                    <td className="px-2">Water & Sewer ${expenses.water}</td>
                    <td className="px-2">
                        CapEx ${expenses.capitalExpenditures}
                    </td>
                </tr>
                <tr>
                    <TableData>
                        <Dot color="bg-[#FF8042]" />
                        Variable Expenses {variableExpenses}
                    </TableData>
                    <td className="px-2">HOA Fees ${expenses.HOAFees}</td>
                    <td className="px-2">Garbage ${expenses.garbage}</td>
                </tr>
                <tr>
                    <TableData>
                        <Dot color={"bg-[#4f42ff]"} />
                        Fixed Expeses {fixedExpenses}
                    </TableData>
                    <td className="px-2">Garbage ${expenses.garbage}</td>
                    <td className="px-2">
                        Maintenance ${expenses.repairsAndMaintenance}
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

const TableData = ({ children }: { children: React.ReactNode }) => {
    return <td className="px-2 flex items-center gap-1">{children}</td>;
};

const Dot = ({ color }: { color: string }) => {
    return <div className={`${color} w-3 h-3 rounded-full`}></div>;
};
