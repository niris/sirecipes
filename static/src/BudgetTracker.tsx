import { useState } from "react";

function BudgetTracker() {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState(0);

  return (
    <div>
      <h1>Budget Tracker</h1>
      <div>
        <label>Budget</label>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Expenses</label>
        <input
          type="number"
          value={expenses}
          onChange={(e) => setExpenses(Number(e.target.value))}
        />
      </div>
      <div>
        <h2>Remaining: {budget - expenses}</h2>
      </div>
    </div>
  );
}

export default BudgetTracker;
