import { useState } from "react";
import { calculateTotalExpenses } from "../utils/expenses.ts";
import { Expenses } from "../interfaces/IExpenses.tsx";

const EXPENSES_INITIAL_STATE: Expenses = {
    propertyTaxes: 0,
    insurance: 0,
    repairsAndMaintenance: 0,
    vacancy: 0,
    capitalExpenditures: 0,
    managementFees: 0,
    electricity: 0,
    gas: 0,
    water: 0,
    HOAfees: 0,
    garbage: 0,
    other: 0,
};

export default function ExpensesForm({
    rentalIncome,
}: {
    rentalIncome: number;
}) {
    const [expensesValues, setExepnsesValues] = useState(
        EXPENSES_INITIAL_STATE
    );
    const [totalExpenses, setTotalExpenses] = useState(0);

    const onExpensesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExepnsesValues({
            ...expensesValues,
            [e.target.name]: Number(e.target.value),
        });
    };

    const onExpensesFormSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        setTotalExpenses(calculateTotalExpenses(expensesValues, rentalIncome));
    };

    return (
        <div className="mb-10 my-20 flex justify-between w-6/12">
            <section>
                <h2 className="text-2xl font-bold mb-5">Expenses</h2>
                <p>Rental Income: {"$" + rentalIncome.toLocaleString()}</p>
                <form
                    onSubmit={onExpensesFormSubmit}
                    className="flex flex-col gap-2"
                >
                    <div className="w-96 flex items-center justify-between">
                        <label>Property Taxes</label>
                        <input
                            name="propertyTaxes"
                            type="number"
                            className="border p-2 ml-2"
                            value={expensesValues.propertyTaxes}
                            onChange={onExpensesChange}
                        />
                    </div>
                    <div className="w-97 flex items-center justify-between">
                        <label>Insurance</label>
                        <input
                            name="insurance"
                            type="number"
                            className="border p-2 ml-2"
                            value={expensesValues.insurance}
                            onChange={onExpensesChange}
                        />
                    </div>
                    <div className="w-97 flex items-center justify-between">
                        <label>Repairs and Maintenance</label>
                        <input
                            name="repairsAndMaintenance"
                            type="number"
                            className="border p-2 ml-2"
                            value={expensesValues.repairsAndMaintenance}
                            onChange={onExpensesChange}
                        />
                        <p>
                            {"$" +
                                (expensesValues.repairsAndMaintenance / 100) *
                                    rentalIncome}
                        </p>
                    </div>

                    <div className="w-97 flex items-center justify-between">
                        <label>Vacancy</label>
                        <input
                            name="vacancy"
                            type="number"
                            className="border p-2 ml-2"
                            value={expensesValues.vacancy}
                            onChange={onExpensesChange}
                        />
                        <p>
                            {"$" +
                                (expensesValues.vacancy / 100) * rentalIncome}
                        </p>
                    </div>
                    <div className="w-97 flex items-center justify-between">
                        <label>Capital Expenditures</label>
                        <input
                            name="capitalExpenditures"
                            type="number"
                            className="border p-2 ml-2"
                            value={expensesValues.capitalExpenditures}
                            onChange={onExpensesChange}
                        />
                        <p>
                            {"$" +
                                (expensesValues.capitalExpenditures / 100) *
                                    rentalIncome}
                        </p>
                    </div>

                    <div className="w-97 flex items-center justify-between">
                        <label>Management Fees</label>
                        <input
                            name="managementFees"
                            type="number"
                            className="border p-2 ml-2"
                            value={expensesValues.managementFees}
                            onChange={onExpensesChange}
                        />
                        <span>
                            {"$" +
                                (expensesValues.managementFees / 100) *
                                    rentalIncome}
                        </span>
                    </div>
                    <div className="w-97 flex items-center justify-between">
                        <label>Electricity</label>
                        <input
                            name="electricity"
                            type="number"
                            className="border p-2 ml-2"
                            value={expensesValues.electricity}
                            onChange={onExpensesChange}
                        />
                    </div>

                    <div className="w-97 flex items-center justify-between">
                        <label>Water</label>
                        <input
                            name="water"
                            type="number"
                            className="border p-2 ml-2"
                            value={expensesValues.water}
                            onChange={onExpensesChange}
                        />
                    </div>
                    <div className="w-97 flex items-center justify-between">
                        <label>HOA Fees</label>
                        <input
                            name="HOAfees"
                            type="number"
                            className="border p-2 ml-2"
                            value={expensesValues.HOAfees}
                            onChange={onExpensesChange}
                        />
                    </div>
                    <div className="w-97 flex items-center justify-between">
                        <label>Garbage</label>
                        <input
                            name="garbage"
                            type="number"
                            className="border p-2 ml-2"
                            value={expensesValues.garbage}
                            onChange={onExpensesChange}
                        />
                    </div>
                    <div className="w-97 flex items-center justify-between">
                        <label>Other</label>
                        <input
                            name="other"
                            type="number"
                            className="border p-2 ml-2"
                            value={expensesValues.other}
                            onChange={onExpensesChange}
                        />
                    </div>
                    <input
                        type="submit"
                        className="border hover:bg-slate-200 cursor-pointer p-2 mb-5"
                        value="Calculate Expenses"
                    />
                </form>
            </section>

            <div>
                <h4 className="mb-2 text-xl font-bold">Expenses</h4>
                <p className="text-xl font-semibold">
                    {"$" + totalExpenses?.toLocaleString()}
                </p>
            </div>
        </div>
    );
}
