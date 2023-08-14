import { PieChart, Pie, Cell } from "recharts";

export default function ExpensesPieChart() {
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    return (
        <PieChart width={800} height={400}>
            <Pie
                data={data}
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        aria-label="1"
                    />
                ))}
            </Pie>
        </PieChart>
    );
}

const data = [
    {
        name: "Mortgage",
        value: 433,
    },
    {
        name: "Taxes",
        value: 16,
    },
    {
        name: "Insurance",
        value: 16,
    },
    {
        name: "Variable Expenses",
        value: 40,
    },
    {
        name: "Fixed Expenses",
        value: 30,
    },
];
