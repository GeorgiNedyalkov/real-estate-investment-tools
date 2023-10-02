import { LineChart, XAxis, YAxis, Line, Legend, Tooltip } from "recharts";
import { calculateForecastLineChart } from "../utils/forecast_calculator";
import { LoanTerms, PurchaseTerms } from "../types";

type Props = {
    purchaseTerms: PurchaseTerms;
    loanTerms: LoanTerms;
};

export default function ForecastLineChart({ purchaseTerms, loanTerms }: Props) {
    const data1 = calculateForecastLineChart(purchaseTerms, loanTerms);

    return (
        <LineChart
            width={750}
            height={500}
            data={data1}
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
