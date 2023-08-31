import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function ExpensesPieChart({
    fixedExpenses,
    variableExpenses,
    taxes,
    insurance,
    monthlyLoanPayment,
}: {
    monthlyLoanPayment: number;
    fixedExpenses: number;
    variableExpenses: number;
    taxes: number;
    insurance: number;
}) {
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#4f42ff"];

    const data = [
        {
            name: "Mortgage",
            value: Math.round(monthlyLoanPayment),
        },
        {
            name: "Taxes",
            value: taxes,
        },
        {
            name: "Insurance",
            value: insurance,
        },
        {
            name: "Variable Expenses",
            value: variableExpenses,
        },
        {
            name: "Fixed Expenses",
            value: fixedExpenses,
        },
    ];

    return (
        <PieChart width={300} height={300}>
            <Pie
                data={data}
                dataKey="value"
                cx={150}
                cy={150}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
            >
                {data.map((entry, index) => (
                    <Cell
                        name={entry.name}
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        aria-label="2"
                    />
                ))}
            </Pie>
            <Tooltip />
        </PieChart>
    );
}
