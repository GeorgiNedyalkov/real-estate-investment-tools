import { useState } from "react";

const EXPENSES_INITIAL_STATE = {
    propertyTaxes: 0,
    insurance: 0,
    vacancy: 0,
    capitalExpenditures: 0,
    managementFees: 0,
    electricity: 0,
    water: 0,
    HOAfees: 0,
    garbage: 0,
    other: 0,
};

export default function Expenses() {
    const [expensesValues, setExepnsesValues] = useState(
        EXPENSES_INITIAL_STATE
    );

    const onExpensesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExepnsesValues({
            ...expensesValues,
            [e.target.name]: Number(e.target.value),
        });
    };

    const onExpensesFormSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const totalExpenses = Object.values(expensesValues).reduce(
            (acc, value) => Number(acc) + Number(value),
            0
        );

        console.log(totalExpenses);
    };

    return (
        <>
            <h2 className="text-2xl font-bold mb-5">Expenses</h2>
            <form
                onSubmit={onExpensesFormSubmit}
                className="flex flex-col gap-10"
            >
                <div>
                    <label>Property Taxes</label>
                    <input
                        name="propertyTaxes"
                        type="number"
                        className="border p-2 ml-2"
                        value={expensesValues.propertyTaxes}
                        onChange={onExpensesChange}
                    />
                </div>
                <div>
                    <label>Insurance</label>
                    <input
                        name="insurance"
                        type="number"
                        className="border p-2 ml-2"
                        value={expensesValues.insurance}
                        onChange={onExpensesChange}
                    />
                </div>
                <div>
                    <label>Vacancy</label>
                    <input
                        name="vacancy"
                        type="number"
                        className="border p-2 ml-2"
                        value={expensesValues.vacancy}
                        onChange={onExpensesChange}
                    />
                </div>
                <div>
                    <label>Capital Expenditures</label>
                    <input
                        name="capitalExpenditures"
                        type="number"
                        className="border p-2 ml-2"
                        value={expensesValues.capitalExpenditures}
                        onChange={onExpensesChange}
                    />
                </div>

                <div>
                    <label>Management Fees</label>
                    <input
                        name="managementFees"
                        type="number"
                        className="border p-2 ml-2"
                        value={expensesValues.managementFees}
                        onChange={onExpensesChange}
                    />
                </div>
                <div>
                    <label>Electricity</label>
                    <input
                        name="electricity"
                        type="number"
                        className="border p-2 ml-2"
                        value={expensesValues.electricity}
                        onChange={onExpensesChange}
                    />
                </div>

                <div>
                    <label>Water</label>
                    <input
                        name="water"
                        type="number"
                        className="border p-2 ml-2"
                        value={expensesValues.water}
                        onChange={onExpensesChange}
                    />
                </div>
                <div>
                    <label>HOA Fees</label>
                    <input
                        name="HOAfees"
                        type="number"
                        className="border p-2 ml-2"
                        value={expensesValues.HOAfees}
                        onChange={onExpensesChange}
                    />
                </div>
                <div>
                    <label>Garbage</label>
                    <input
                        name="garbage"
                        type="number"
                        className="border p-2 ml-2"
                        value={expensesValues.garbage}
                        onChange={onExpensesChange}
                    />
                </div>
                <div>
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
                    className="border p-2 w-40"
                    value="Calculate Expenses"
                />
            </form>
        </>
    );
}