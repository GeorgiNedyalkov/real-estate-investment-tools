import { LineChart, XAxis, YAxis, Line, Legend, Tooltip } from "recharts";

export default function ReturnsLineChart() {
    return (
        <LineChart
            width={750}
            height={500}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="rentalIncome" stroke="#8884d8" />
            <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
        </LineChart>
    );
}

const data = [
    {
        name: "Year 1",
        expenses: 4000,
        rentalIncome: 2400,
    },
    {
        name: "Year 2",
        expenses: 4000,
        rentalIncome: 1398,
    },
    {
        name: "Year 3",
        expenses: 4000,
        rentalIncome: 9800,
    },
    {
        name: "Year 4",
        expenses: 400,
        rentalIncome: 3908,
    },
    {
        name: "Year 5",
        expenses: 4000,
        rentalIncome: 4800,
    },
    {
        name: "Year 10",
        expenses: 4000,
        rentalIncome: 3800,
    },
    {
        name: "Year 15",
        expenses: 4000,
        rentalIncome: 4300,
    },
    {
        name: "Year 25",
        rentalIncome: 4300,
        expenses: 4000,
    },
    {
        name: "Year 30",
        rentalIncome: 4300,
        expenses: 4000,
    },
];
