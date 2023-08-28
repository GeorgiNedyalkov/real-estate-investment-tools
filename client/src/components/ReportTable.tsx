import { useEffect, useState } from "react";
import { calculateRemainingLoanBalance } from "../utils/loan_calculator.ts";

interface ColumnData {
    accessor: string;
    label: string;
}

interface RowData {
    id: number;
    year0: number;
    year1?: number;
    year2?: number;
    year3?: number;
    year4?: number;
    year5?: number;
    year10?: number;
    year15?: number;
    year20?: number;
    year30?: number;
    [key: string]: number | string | undefined;
}

export default function ReportTable() {
    const [rows, setRows] = useState(INITIAL_ROWS);

    function calculateTableRows() {
        let initialPropertyValue = 100_000;
        const appreciationRate = 2 / 100;
        let initialEquity = 20_000;
        const initialCashFlow = -1027;
        const initialProfit = -5;
        const initialReturn = 5;

        // calculate remaining loan balance
        const monthlyMortgagePayment = 429;
        let initialLoanBalance = 80_000;
        const loanTerm = 30;
        const interestRate = 5;
        let paymentsMade = 12;

        const annualMortgagePayment = monthlyMortgagePayment * 12;

        const firstYearRemainingLoanBalance = calculateRemainingLoanBalance(
            initialLoanBalance,
            interestRate,
            loanTerm,
            paymentsMade
        );

        console.log(firstYearRemainingLoanBalance);

        // create initial values
        const propertyValue: RowData = {
            id: 1,
            metric: "Property Value",
            year0: initialPropertyValue,
        };
        const equity: RowData = {
            id: 2,
            metric: "Equity",
            year0: initialEquity,
        };

        const loanBalance: RowData = {
            id: 3,
            metric: "Loan Balance",
            year0: initialLoanBalance,
        };

        const cashFlow: RowData = {
            id: 4,
            metric: "Cash Flow",
            year0: initialCashFlow,
        };

        const mortgagePayment: RowData = {
            id: 5,
            metric: "Mortgage Payment",
            year0: monthlyMortgagePayment,
        };

        const profitIfSold: RowData = {
            id: 6,
            metric: "Profit if Sold",
            year0: initialProfit,
        };

        const annualizedReturn: RowData = {
            id: 7,
            metric: "Annualized Return",
            year0: initialReturn,
        };

        for (let i = 1; i <= 30; i++) {
            const currentYear: keyof RowData = "year" + i;

            initialEquity += annualMortgagePayment;
            initialPropertyValue += initialPropertyValue * appreciationRate;

            if (
                (i > 5 && i < 10) ||
                (i > 10 && i < 15) ||
                (i > 15 && i < 20) ||
                (i > 20 && i < 30)
            ) {
                continue;
            }

            equity[currentYear] = initialEquity;
            propertyValue[currentYear] = Math.round(initialPropertyValue);
            mortgagePayment[currentYear] = monthlyMortgagePayment;

            const remainingLoanBalance = calculateRemainingLoanBalance(
                initialLoanBalance,
                interestRate,
                loanTerm,
                paymentsMade
            );

            loanBalance[currentYear] = remainingLoanBalance;
            initialLoanBalance = remainingLoanBalance;
            paymentsMade += 12;
            cashFlow[currentYear] = 0;
            profitIfSold[currentYear] = 0;
            annualizedReturn[currentYear] = 0;
        }

        return [
            {
                ...propertyValue,
            },
            {
                ...equity,
            },
            {
                ...loanBalance,
            },
            {
                ...cashFlow,
            },
            {
                ...mortgagePayment,
            },
            {
                ...profitIfSold,
            },
            {
                ...annualizedReturn,
            },
        ];
    }

    useEffect(() => {
        setRows(calculateTableRows());
    }, []);

    return (
        <table className="border-separate border-spacing-x-10 space-y-2 mb-20">
            <thead>
                <tr>
                    {columns.map((column) => (
                        <td
                            className="font-semibold text-right"
                            key={column.accessor}
                        >
                            {column.label}
                        </td>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row) => (
                    <tr key={row.id}>
                        {columns.map((column) => (
                            <td
                                className="first:text-left text-right"
                                key={column.accessor}
                            >
                                {row[
                                    column.accessor as keyof RowData
                                ]?.toLocaleString()}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

const INITIAL_ROWS: RowData[] = [
    {
        id: 1,
        metric: "Property Value",
        year0: 128_000,
        year1: 131_000,
        year2: 134_000,
        year3: 136_000,
        year4: 139_000,
        year5: 142_000,
        year10: 157_000,
        year15: 173_000,
        year20: 191_000,
        year30: 233_000,
    },
    {
        id: 2,
        metric: "Equity",
        year0: 26_000,
        year1: 30_000,
        year2: 35_000,
        year3: 40_000,
        year4: 45_000,
        year5: 50_000,
        year10: 78_000,
        year15: 110_000,
        year20: 146_000,
        year30: 233_000,
    },
    {
        id: 3,
        metric: "Loan Balance",
        year0: 102_736,
        year1: 100_291,
        year2: 98_360,
        year3: 96_103,
        year4: 93_756,
        year5: 91_338,
        year10: 78_099,
        year15: 62_720,
        year20: 33_458,
        year30: 0,
    },
    {
        id: 4,
        metric: "Cash Flow",
        year0: -1_027,
        year1: -944,
        year2: -859,
        year3: -772,
        year4: -683,
        year5: -593,
        year10: -114,
        year15: 414,
        year20: 998,
        year30: 2_355,
    },
    {
        id: 5,
        metric: "Mortgage Payment",
        year0: 433,
        year1: 433,
        year2: 433,
        year3: 433,
        year4: 433,
        year5: 433,
        year10: 433,
        year15: 433,
        year20: 433,
        year30: 433,
    },
    {
        id: 6,
        metric: "Profit if sold",
        year0: -6,
        year1: -1,
        year2: 3,
        year3: 7,
        year4: 11,
        year5: 16,
        year10: 42,
        year15: 75,
        year20: 115,
        year30: 219,
    },
    {
        id: 7,
        metric: "Annualized Return",
        year0: -100,
        year1: -4.1,
        year2: 4.32,
        year3: 6.98,
        year4: 8.13,
        year5: 8.69,
        year10: 9.05,
        year15: 8.59,
        year20: 8.08,
        year30: 7.23,
    },
];

const columns: ColumnData[] = [
    { accessor: "metric", label: "" },
    { accessor: "year0", label: "-" },
    { accessor: "year1", label: "Year 1" },
    { accessor: "year2", label: "Year 2" },
    { accessor: "year3", label: "Year 3" },
    { accessor: "year4", label: "Year 4" },
    { accessor: "year5", label: "Year 5" },
    { accessor: "year10", label: "Year 10" },
    { accessor: "year15", label: "Year 15" },
    { accessor: "year20", label: "Year 20" },
    { accessor: "year30", label: "Year 30" },
];
