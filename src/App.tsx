import { Children, useState } from "react";
import "./App.css";
import ExpenseList from "./components/expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "abc", amount: 50, category: "Utilities" },
    { id: 2, description: "bcd", amount: 150, category: "Entertainment" },
    { id: 3, description: "cda", amount: 250, category: "Utilities" },
    { id: 4, description: "def", amount: 350, category: "Utilities" },
  ]);

  const handleOnDelete = (id: number) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  return (
    <div>
      <ExpenseList expenses={expenses} onDelete={handleOnDelete} />
    </div>
  );
}

export default App;
