import { useState } from "react";
import "./App.css"; // Import CSS

/* 
  Expense Tracker - Developed by Nikhil C 
  Technologies: React, HTML, CSS
*/

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  // Function to add an expense
  const addExpense = () => {
    if (name && amount) {
      setExpenses([...expenses, { id: Date.now(), name, amount: parseFloat(amount) }]);
      setName("");
      setAmount("");
    }
  };

  // Function to delete an expense
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  // Format amount in Indian Rupees
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    }).format(value);
  };

  const totalExpense = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className="container">
      <h2>Expense Tracker</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Expense Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={addExpense}>Add Expense</button>
      </div>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.name}: {formatCurrency(expense.amount)}
            <button className="remove-btn" onClick={() => deleteExpense(expense.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: {formatCurrency(totalExpense)}</h3>

      {/* Footer */}
      <footer className="footer">Developed by Nikhil C</footer>
    </div>
  );
}
