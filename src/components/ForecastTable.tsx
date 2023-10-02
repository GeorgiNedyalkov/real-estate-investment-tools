import { useEffect, useState } from "react";
import { RowData, ColumnData, LoanTerms, PurchaseTerms } from "../types";
import { INITIAL_ROWS } from "../data";
import { calculateTableRows } from "../utils/forecast_calculator.ts";

type Props = {
    loanTerms: LoanTerms;
    purchaseTerms: PurchaseTerms;
};

export default function ForecastTable({ loanTerms, purchaseTerms }: Props) {
    const [rows, setRows] = useState(INITIAL_ROWS);

    useEffect(() => {
        setRows(calculateTableRows(purchaseTerms, loanTerms));
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
