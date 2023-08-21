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
            <Line type="monotone" dataKey="return" stroke="#82ca9d" />
        </LineChart>
    );
}

const data = [
    {
        name: "Year 1",
        expenses: 400,
        rentalIncome: 240,
        return: 100,
    },
    {
        name: "Year 2",
        expenses: 400,
        rentalIncome: 138,
        return: 100,
    },
    {
        name: "Year 3",
        expenses: 400,
        rentalIncome: 900,
        return: 100,
    },
    {
        name: "Year 4",
        expenses: 400,
        rentalIncome: 308,
        return: 100,
    },
    {
        name: "Year 5",
        expenses: 400,
        rentalIncome: 480,
        return: 100,
    },
    {
        name: "Year 10",
        expenses: 400,
        rentalIncome: 380,
        return: 100,
    },
    {
        name: "Year 15",
        expenses: 400,
        rentalIncome: 430,
        return: 100,
    },
    {
        name: "Year 25",
        expenses: 400,
        rentalIncome: 430,
        return: 100,
    },
    {
        name: "Year 30",
        expenses: 400,
        rentalIncome: 430,
        return: 100,
    },
];
