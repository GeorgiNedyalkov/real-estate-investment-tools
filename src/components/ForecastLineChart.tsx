import { LineChart, XAxis, YAxis, Line, Legend, Tooltip } from "recharts";

export default function ForecastLineChart() {
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
            <Line type="monotone" dataKey="propertyValue" stroke="#807af0" />
            <Line type="monotone" dataKey="equity" stroke="#82ca9d" />
            <Line type="monotone" dataKey="loanBalance" stroke="#c8ca82" />
        </LineChart>
    );
}

const data = [
    {
        name: "Year 0",
        propertyValue: 128_000,
        equity: 26_000,
        loanBalance: 102_736,
    },
    {
        name: "Year 1",
        propertyValue: 131_000,
        equity: 30_000,
        loanBalance: 100_591,
    },
    {
        name: "Year 2",
        propertyValue: 134_000,
        equity: 35_000,
        loanBalance: 98_380,
    },
    {
        name: "Year 3",
        propertyValue: 136_000,
        equity: 40_000,
        loanBalance: 96_103,
    },
    {
        name: "Year 4",
        propertyValue: 139_000,
        equity: 45_000,
        loanBalance: 93_756,
    },
    {
        name: "Year 5",
        propertyValue: 142_000,
        equity: 50_000,
        loanBalance: 91_338,
    },
    {
        name: "Year 10",
        propertyValue: 157_000,
        equity: 78_000,
        loanBalance: 78_099,
    },
    {
        name: "Year 15",
        propertyValue: 173_000,
        equity: 110_000,
        loanBalance: 62_720,
    },
    {
        name: "Year 20",
        propertyValue: 191_000,
        equity: 146_000,
        loanBalance: 44_486,
    },
    {
        name: "Year 30",
        propertyValue: 233_000,
        equity: 233_000,
        loanBalance: 0,
    },
];
