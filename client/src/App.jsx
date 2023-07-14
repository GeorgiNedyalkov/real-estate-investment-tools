import { useState } from "react";

function App() {
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold">
        Real Esate Investment Tools
      </h1>
    </div>
  );
}

export default App;

export function PurchaseForm() {
  const [purchasePrice, setPurchasePice] = useState(0);
  const [closingCosts, setClosingCosts] = useState(0);

  return (
    <form>
      <div>
        <label>
          Purchase price
          <input
            value={purchasePrice}
            onChange={(e) => setPurchasePice(e.target.value)}
            type="text"
          />
        </label>
      </div>
      <div>
        <label>
          Purchase Closing Costs
          <input
            type="text"
            value={closingCosts}
            onChange={(e) => setClosingCosts(e.target.value)}
          />
        </label>
      </div>
    </form>
  );
}
