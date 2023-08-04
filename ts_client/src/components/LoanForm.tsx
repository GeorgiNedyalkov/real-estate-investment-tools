import { useState } from "react";
import { calculateLoan } from "../utils/loan_calculator.ts";

export default function LoanForm({ purchasePrice }: { purchasePrice: number }) {
    const [downpayment, setDownpayment] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [loanYears, setLoanYears] = useState(0);
    const [monthlyLoanPayment, setMonthlyLoanPayment] = useState("");

    const onDownpaymentChange = (e) => {
        e.preventDefault();
        setDownpayment(+e.target.value);
    };

    const onInterestRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInterestRate(+e.target.value);
    };

    const onLoanYearsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoanYears(+e.target.value);
    };

    const onFormSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (!downpayment || !interestRate || !loanYears) {
            return;
        }

        setMonthlyLoanPayment(
            calculateLoan(+purchasePrice, downpayment, interestRate, loanYears)
        );
    };

    const resetForm = () => {
        setMonthlyLoanPayment("");
    };

    return (
        <div className="w-6/12 my-20">
            <h2 className="text-2xl font-bold mb-5">Load Details</h2>

            <div className="flex justify-between">
                <form onSubmit={onFormSubmit} className="flex flex-col gap-5">
                    <div className="flex">
                        <label>Downpayment</label>
                        <button
                            className="border w-24 ml-2 mr-2 hover:bg-slate-200 focus:border-slate-500"
                            onClick={onDownpaymentChange}
                            value={0}
                        >
                            0%
                        </button>
                        <button
                            className="border w-24 mr-2 hover:bg-slate-200 focus:border-slate-500"
                            onClick={onDownpaymentChange}
                            value={10}
                        >
                            10%
                        </button>
                        <button
                            className="border w-24 mr-2 hover:bg-slate-200 focus:border-slate-500"
                            onClick={onDownpaymentChange}
                            value={20}
                        >
                            20%
                        </button>
                        <button
                            className="border w-24 mr-2 hover:bg-slate-200 focus:border-slate-500"
                            onClick={onDownpaymentChange}
                            value={25}
                        >
                            25%
                        </button>
                    </div>
                    <label>
                        Interest Rate
                        <input
                            className="border w-24 mx-2 p-2"
                            type="number"
                            value={interestRate}
                            onChange={onInterestRateChange}
                        />
                        %
                    </label>
                    <label>
                        Loan Term
                        <input
                            className="border w-24 mx-2 p-2"
                            type="number"
                            value={loanYears}
                            onChange={onLoanYearsChange}
                        />
                        years
                    </label>
                    <input
                        className="border hover:bg-slate-200 cursor-pointer w-32 font-bold p-2"
                        type="submit"
                        value="Calculate Loan"
                    />
                </form>

                <div>
                    <h4 className="mb-2 text-xl font-bold">Mothly Payment</h4>
                    <p className="text-xl font-semibold">
                        {monthlyLoanPayment} $
                    </p>
                </div>
            </div>

            <button
                onClick={resetForm}
                className="p-2 my-2 w-24 cursor-pointer hover:font-bold"
            >
                Reset
            </button>
        </div>
    );
}
