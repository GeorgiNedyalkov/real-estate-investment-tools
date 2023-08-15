export function calculateExpenses(expenses, monthlyRentalIncome) {
    var sum = 0;
    for (var key in expenses) {
        if (
            key === "repairsAndMaintenance" ||
            key === "vacancy" ||
            key === "capitalExpenditures" ||
            key === "managementFees"
        ) {
            sum += (expenses[key] / 100) * monthlyRentalIncome;
        } else {
            sum += expenses[key];
        }
    }
    return sum;
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
// console.log(calculateExpenses(totalExpenses, 1000));
