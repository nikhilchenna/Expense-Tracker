import React from "react";
import ReactDOM from "react-dom/client"; // Use createRoot
import ExpenseTracker from "./App"; // Import App component
import "./App.css"; // Import CSS file

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ExpenseTracker />
  </React.StrictMode>
);
