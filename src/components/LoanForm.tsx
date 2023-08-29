import { useState } from "react";
import { calculateLoan } from "../utils/loan_calculator.ts";
import { LoanTerms } from "../interfaces/ILoanTerms.tsx";

export default function LoanForm({
    purchasePrice,
    loanTerms,
    onLoanTermsChange,
    onCalculateMonthlyMortgage,
}: {
    purchasePrice: number;
    loanTerms: LoanTerms;
    onLoanTermsChange: React.ChangeEventHandler<
        HTMLInputElement | HTMLSelectElement
    >;
    onCalculateMonthlyMortgage: (values: LoanTerms) => void;
}) {
    const [monthlyLoanPayment, setMonthlyLoanPayment] = useState(0);

    const onFormSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (
            !loanTerms.downpayment ||
            !loanTerms.interestRate ||
            !loanTerms.loanYears
        ) {
            return;
        }

        onCalculateMonthlyMortgage(loanTerms);

        setMonthlyLoanPayment(
            calculateLoan(
                Number(purchasePrice),
                loanTerms.downpayment,
                loanTerms.interestRate,
                loanTerms.loanYears
            )
        );
    };

    return (
        <div className="w-6/12 my-20">
            <h2 className="text-2xl font-bold mb-5">Loan Details</h2>

            <div className="flex justify-between">
                <form onSubmit={onFormSubmit} className="flex flex-col gap-5">
                    <div className="flex">
                        <label>Downpayment</label>
                        <select
                            id="downpayment"
                            name="downpayment"
                            className="border w-24 ml-2 mr-2 hover:bg-slate-200 focus:border-slate-500"
                            value={loanTerms.downpayment}
                            onChange={onLoanTermsChange}
                        >
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="25">25</option>
                            <option value="30">30</option>
                        </select>
                        %
                    </div>
                    <label>
                        Interest Rate
                        <input
                            name="interestRate"
                            className="border w-24 mx-2 p-2"
                            type="number"
                            value={loanTerms.interestRate}
                            onChange={onLoanTermsChange}
                        />
                        %
                    </label>
                    <label>
                        Loan Term
                        <input
                            name="loanYears"
                            className="border w-24 mx-2 p-2"
                            type="number"
                            value={loanTerms.loanYears}
                            onChange={onLoanTermsChange}
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
        </div>
    );
}
