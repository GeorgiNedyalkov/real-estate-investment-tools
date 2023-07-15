export const calcExpenses = (expenses) => {
  return expenses.reduce((prev, next) => prev + next, 0);
};
