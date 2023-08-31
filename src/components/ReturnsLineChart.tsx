import { useState, useEffect } from "react";
import { LineChart, XAxis, YAxis, Line, Legend, Tooltip } from "recharts";
import { CategoricalChartState } from "recharts/types/chart/generateCategoricalChart";
import ReturnsBreakdown from "./ReturnsBreakdown";
import { calculateLineChartData } from "../utils/chartsCalculations.ts";
import { calculateTotalExpenses } from "../utils/expenses.ts";
import { Expenses } from "../interfaces/interfaces.tsx";

export default function ReturnsLineChart({
    expenses,
    rentalIncome,
}: {
    expenses: Expenses;
    rentalIncome: number;
}) {
    const [selectedYear, setSelectedYear] = useState(INITIAL_SELECTED_YEAR);
    const totalExpenses = calculateTotalExpenses(expenses, rentalIncome);
    // these need to be passed from a parent component down
    const incomeAnnualGrowthPercentage = 1;
    const expensesAnnyalGrowthPercentage = 1;
    const cashInvested = 30_711;

    const data1 = calculateLineChartData(
        totalExpenses,
        rentalIncome,
        incomeAnnualGrowthPercentage,
        expensesAnnyalGrowthPercentage,
        cashInvested
    );

    const onLineChartClick = (e: CategoricalChartState) => {
        const dataEntry = e.activePayload![0].payload;
        setSelectedYear(dataEntry);
    };

    useEffect(() => {
        setSelectedYear(data1[0]);
    }, []);

    return (
        <div className="flex gap-[200px]">
            <LineChart
                width={750}
                height={500}
                data={data1}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                onClick={onLineChartClick}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="year" stroke="#8884d8" />
                <Line type="monotone" dataKey="rentalIncome" stroke="#8884d8" />
                <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
                <Line type="monotone" dataKey="return" stroke="#ca8282" />
            </LineChart>
            <ReturnsBreakdown selectedYear={selectedYear} />
        </div>
    );
}

const INITIAL_SELECTED_YEAR = {
    name: "",
    cashFlow: 0,
    expenses: 0,
    rentalIncome: 0,
    return: 0,
};
