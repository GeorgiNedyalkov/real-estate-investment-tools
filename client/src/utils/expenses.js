function calculateExpenses(expenses, monthlyRentalIncome) {
    var sum = 0;
    for (var key in expenses) {
        console.log(key);
        if (key === "repairsAndMaintenance" ||
            key === "vacancy" ||
            key === "capitalExpenditures" ||
            key === "managementFees") {
            sum += (expenses[key] / 100) * monthlyRentalIncome;
        }
        else {
            sum += expenses[key];
        }
    }
    return sum;
    // const repairsAndMaintenanceCost =
    //     (expenses.repairsAndMaintenance / 100) * monthlyRentalIncome;
    // const vacancyCost = (expenses.vacancy / 100) * monthlyRentalIncome;
    // const capitalExpenditureCost =
    //     (expenses.capitalExpenditures / 100) * monthlyRentalIncome;
    // const managementFeesCost =
    //     (expenses.capitalExpenditures / 100) * monthlyRentalIncome;
    // const totalExpenses =
    //     expenses.propertyTaxes +
    //     expenses.insurance +
    //     repairsAndMaintenanceCost +
    //     vacancyCost +
    //     capitalExpenditureCost +
    //     managementFeesCost +
    //     expenses.electricity +
    //     expenses.gas +
    //     expenses.water +
    //     expenses.HOAfees +
    //     expenses.garbage +
    //     expenses.other;
    // return totalExpenses;
}
var totalExpenses = {
    propertyTaxes: 10,
    insurance: 10,
    repairsAndMaintenance: 20,
    vacancy: 10,
    capitalExpenditures: 10,
    managementFees: 10,
    electricity: 10,
    gas: 10,
    water: 10,
    HOAfees: 10,
    garbage: 10,
    other: 10,
};
console.log(calculateExpenses(totalExpenses, 1000));
