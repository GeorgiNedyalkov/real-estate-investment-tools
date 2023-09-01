import { useState } from "react";
import { calculateTotalExpenses } from "../../utils/expenses.ts";
import { Expenses } from "../../interfaces/interfaces.tsx";

export default function ExpensesForm({
    rentalIncome,
    expenses,
    onExpensesChange,
}: {
    rentalIncome: number;
    expenses: Expenses;
    onExpensesChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [optionalExepses, setOptionalExpenses] = useState(true);

    const onExpensesFormSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        setTotalExpenses(calculateTotalExpenses(expenses, rentalIncome));
    };

    const onToggleOptionalExpenses = () => {
        setOptionalExpenses(!optionalExepses);
    };

    return (
        <div className="mb-10 my-20 flex justify-between w-6/12">
            <section>
                <h2 className="text-2xl font-bold mb-5">Expenses</h2>
                <form onSubmit={onExpensesFormSubmit}>
                    <div className="grid grid-cols-3 gap-5">
                        <label>Property Taxes</label>
                        <input
                            name="propertyTaxes"
                            type="number"
                            className="border p-2"
                            value={expenses.propertyTaxes}
                            onChange={onExpensesChange}
                        />
                        <p>/ month</p>
                        <label>Insurance</label>
                        <input
                            name="insurance"
                            type="number"
                            className="border p-2"
                            value={expenses.insurance}
                            onChange={onExpensesChange}
                        />
                        <p>/ month</p>
                        <label>Repairs and Maintenance</label>
                        <input
                            name="repairsAndMaintenance"
                            type="number"
                            className="border p-2"
                            value={expenses.repairsAndMaintenance}
                            onChange={onExpensesChange}
                        />
                        <p>
                            $
                            {(expenses.repairsAndMaintenance / 100) *
                                rentalIncome}
                            / month
                        </p>
                        <label>Vacancy</label>
                        <input
                            name="vacancy"
                            type="number"
                            className="border p-2"
                            value={expenses.vacancy}
                            onChange={onExpensesChange}
                        />
                        <p>
                            {"$" + (expenses.vacancy / 100) * rentalIncome} /
                            month
                        </p>
                        <label>Capital Expenditures</label>
                        <input
                            name="capitalExpenditures"
                            type="number"
                            className="border p-2"
                            value={expenses.capitalExpenditures}
                            onChange={onExpensesChange}
                        />
                        <p>
                            $
                            {(expenses.capitalExpenditures / 100) *
                                rentalIncome}
                            / month
                        </p>
                        <label>Management Fees</label>
                        <input
                            name="managementFees"
                            type="number"
                            className="border p-2"
                            value={expenses.managementFees}
                            onChange={onExpensesChange}
                        />
                        <p>
                            ${(expenses.managementFees / 100) * rentalIncome}/
                            month
                        </p>
                        <label>Electricity</label>
                        <input
                            name="electricity"
                            type="number"
                            className="border p-2"
                            value={expenses.electricity}
                            onChange={onExpensesChange}
                        />
                        <p></p>
                        <label>Water</label>
                        <input
                            name="water"
                            type="number"
                            className="border p-2"
                            value={expenses.water}
                            onChange={onExpensesChange}
                        />
                        <p></p>
                        <label>HOA Fees</label>
                        <input
                            name="HOAFees"
                            type="number"
                            className="border p-2"
                            value={expenses.HOAFees}
                            onChange={onExpensesChange}
                        />
                        <p></p>
                        <label>Garbage</label>
                        <input
                            name="garbage"
                            type="number"
                            className="border p-2"
                            value={expenses.garbage}
                            onChange={onExpensesChange}
                        />
                        <p></p>
                        <label>Other</label>
                        <input
                            name="other"
                            type="number"
                            className="border p-2"
                            value={expenses.other}
                            onChange={onExpensesChange}
                        />
                    </div>
                    <button
                        onClick={onToggleOptionalExpenses}
                        className="border my-5 p-2 bg-slate-100 hover:bg-slate-200"
                    >
                        <b>Optional: </b>
                        <span>expense growth, sales expense</span>
                    </button>
                    {optionalExepses && (
                        <div className="grid grid-cols-3 gap-5">
                            <label>Annual expenses growth</label>
                            <input
                                name="annualExpensesGrowth"
                                type="number"
                                className="border p-2"
                                value={expenses.annualExpensesGrowth}
                                onChange={onExpensesChange}
                            />
                            <p></p>
                            <label>Sales expenses</label>
                            <input
                                name="salesExpenses"
                                type="number"
                                className="border p-2"
                                value={expenses.salesExpenses}
                                onChange={onExpensesChange}
                            />
                        </div>
                    )}
                </form>
            </section>

            <section>
                <h4 className="mb-2 text-xl font-bold">Expenses</h4>
                <p className="text-xl font-semibold">
                    $ {totalExpenses?.toLocaleString()}
                </p>
            </section>
        </div>
    );
}
