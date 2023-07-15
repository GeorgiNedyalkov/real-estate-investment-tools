import { useState } from "react";
import { calcExpenses } from "./lib/expenses";
import "./App.css";

const INITIAL_EXPENSES = {
  taxes: 0,
  insurance: 0,
  management: 0,
  repairs: 0,
  advertising: 0,
  utilities: 0,
};

function App() {
  const [expensesForm, setExpensesForm] = useState(INITIAL_EXPENSES);

  const onChangeHandler = (e) => {
    setExpensesForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: Number(e.target.value),
    }));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const allExpenses = calcExpenses(expensesForm);
    console.log(allExpenses);
  };

  return (
    <div className="App">
      <div className="container">
        <h2>Calculate NOI</h2>
        <p>
          Input your information to calculat the Net Operating Income of a
          property
        </p>

        <h3>Expenses</h3>
        <form onSubmit={formSubmitHandler}>
          <div>
            <label htmlFor="taxes">Taxes </label>
            <input
              values={expensesForm.taxes}
              onChange={onChangeHandler}
              type="number"
              name="taxes"
              id="taxes"
            />
          </div>
          <div>
            <label htmlFor="insurance">Insurance </label>
            <input
              values={expensesForm.insurance}
              onChange={onChangeHandler}
              type="number"
              name="insurance"
              id="insurance"
            />
          </div>
          <div>
            <label htmlFor="management">Management Fees </label>
            <input
              values={expensesForm.management}
              onChange={onChangeHandler}
              type="number"
              name="management"
              id="management"
            />
            <p>Usually 10% of collected rent</p>
          </div>
          <div>
            <label htmlFor="repairs">Repairs cost </label>
            <input
              values={expensesForm.repairs}
              onChange={onChangeHandler}
              type="number"
              name="repairs"
              id="repairs"
            />
            <p>Usually from 0.5% to 1% of the actual property value</p>
          </div>
          <div>
            <label htmlFor="advertising">Advertising </label>
            <input
              values={expensesForm.advertising}
              onChange={onChangeHandler}
              type="number"
              name="advertising"
              id="advertising"
            />
          </div>
          <div>
            <label htmlFor="utilities">Utility cost </label>
            <input
              values={expensesForm.utilities}
              onChange={onChangeHandler}
              type="number"
              name="utilities"
              id="utilities"
            />
          </div>
          <div>
            <input type="submit" value="Calculate Expenses" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
