import { useState, useEffect } from "react";
import ExpensesPieChart from "./ExpensesPieChart";
import ExpensesTable from "./ExpensesTable";
import { Expenses } from "../interfaces/IExpenses";
import { calculateExpensesBreakdown } from "../utils/expenses.ts";
import {
    ExpensesBreakdown,
    VariableExpense,
    FixedExpense,
} from "../interfaces/IExpenses";

export default function ExpensesBreakdown({
    expenses,
    monthlyLoanPayment,
    rentalIncome,
}: {
    expenses: Expenses;
    rentalIncome: number;
    monthlyLoanPayment: number;
}) {
    const [expensesBreakdown, setExpensesBreakdown] =
        useState<ExpensesBreakdown>(INITIAL_EXPENSES_BREAKDOWN);

    function calculateTotalExpenses(expenses: ExpensesBreakdown) {
        const { variable, fixed } = expenses;

        let variableExpenses = 0;
        let fixedExpenses = 0;

        for (const expense in variable) {
            variableExpenses += variable[expense as keyof VariableExpense];
        }

        for (const expense in fixed) {
            fixedExpenses += fixed[expense as keyof FixedExpense];
        }

        return {
            fixedExpenses,
            variableExpenses,
        };
    }

    const totalExpenses = calculateTotalExpenses(expensesBreakdown);

    useEffect(() => {
        const breakdown = calculateExpensesBreakdown(expenses, rentalIncome);
        setExpensesBreakdown(breakdown);
    }, [expenses, rentalIncome]);
    return (
        <>
            <h2 className="font-bold text-2xl">Monthly Expense Breakdown</h2>
            <div className="border flex items-center">
                <ExpensesPieChart
                    fixedExpenses={totalExpenses.fixedExpenses}
                    variableExpenses={totalExpenses.variableExpenses}
                    taxes={expensesBreakdown.fixed.propertyTaxes}
                    insurance={expensesBreakdown.fixed.insurance}
                    monthlyLoanPayment={monthlyLoanPayment}
                />
                <ExpensesTable
                    expenses={expenses}
                    fixedExpenses={totalExpenses.fixedExpenses}
                    variableExpenses={totalExpenses.variableExpenses}
                    monthlyLoanPayment={monthlyLoanPayment}
                />
            </div>
        </>
    );
}

const INITIAL_EXPENSES_BREAKDOWN = {
    fixed: {
        HOAFees: 0,
        electricity: 0,
        garbage: 0,
        insurance: 0,
        other: 0,
        propertyTaxes: 0,
        water: 0,
    },
    variable: {
        capitalExpenditures: 0,
        managementFees: 0,
        repairsAndMaintenance: 0,
        vacancy: 0,
    },
};
