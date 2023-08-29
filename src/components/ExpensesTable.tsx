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
        <table className="w-[800px]">
            <thead>
                <tr className="text-left">
                    <th className="p-2">Total Expenses</th>
                    <th className="px-2">${allExpenses}</th>
                    <th className="p-2">Fixed Expenses</th>
                    <th className="px-2">${fixedExpenses}</th>
                    <th className="p-2">Variable Expenses</th>
                    <th className="px-2">${variableExpenses}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="flex items-center gap-2 px-2">
                        <Dot color={"bg-[#0088FE]"} />
                        Mortgage
                    </td>
                    <TableData>${Math.round(monthlyLoanPayment)}</TableData>
                    <TableData>Electricity</TableData>
                    <TableData>${expenses.electricity}</TableData>
                    <TableData>Vacancy</TableData>
                    <TableData>${expenses.vacancy}</TableData>
                </tr>
                <tr className="ml-2">
                    <td className="flex items-center gap-2 px-2">
                        <Dot color={"bg-[#00C49F]"} />
                        Taxes
                    </td>
                    <TableData>${expenses.propertyTaxes}</TableData>
                    <TableData>Gas</TableData>
                    <TableData>${expenses.gas} </TableData>
                    <TableData>Maintenance </TableData>
                    <TableData>${expenses.repairsAndMaintenance}</TableData>
                </tr>
                <tr>
                    <td className="flex items-center gap-2 px-2">
                        <Dot color="bg-[#FFBB28]" />
                        Insurance
                    </td>
                    <TableData>${expenses.insurance}</TableData>
                    <TableData>Water & Sewer </TableData>
                    <TableData>${expenses.water}</TableData>
                    <TableData>CapEx</TableData>
                    <TableData>${expenses.capitalExpenditures}</TableData>
                </tr>
                <tr>
                    <td className="flex items-center gap-2 px-2">
                        <Dot color="bg-[#FF8042]" />
                        Variable Expenses
                    </td>
                    <TableData>${variableExpenses}</TableData>
                    <TableData>HOA Fees </TableData>
                    <TableData>${expenses.HOAFees}</TableData>
                    <TableData>Garbage</TableData>
                    <TableData>${expenses.garbage}</TableData>
                </tr>
                <tr>
                    <td className="flex items-center gap-2 px-2">
                        <Dot color={"bg-[#4f42ff]"} />
                        Fixed Expeses
                    </td>
                    <TableData>${fixedExpenses}</TableData>
                    <TableData>Garbage </TableData>
                    <TableData>${expenses.garbage}</TableData>
                    <TableData>Maintenance</TableData>
                    <TableData>${expenses.repairsAndMaintenance}</TableData>
                </tr>
            </tbody>
        </table>
    );
}

const TableData = ({ children }: { children: React.ReactNode }) => {
    return <td className="px-4">{children}</td>;
};

const Dot = ({ color }: { color: string }) => {
    return <div className={`${color} w-3 h-3 rounded-full`}></div>;
};
