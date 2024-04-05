import { Children, useState } from "react";
import "./App.css";
import ExpenseList from "./components/expense-tracker/components/ExpenseList";
import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./components/expense-tracker/components/ExpenseForm";
import categories from "./components/expense-tracker/categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "abc", amount: 50, category: "Utilities" },
    { id: 2, description: "bcd", amount: 150, category: "Entertainment" },
    { id: 3, description: "cda", amount: 250, category: "Utilities" },
    { id: 4, description: "def", amount: 350, category: "Utilities" },
  ]);

  const handleOnDelete = (id: number) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const handleOnSelectCategory = (category: string) =>
    setSelectedCategory(category);

  const visibleExpense = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm></ExpenseForm>
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={handleOnSelectCategory}
        ></ExpenseFilter>
      </div>
      <ExpenseList expenses={visibleExpense} onDelete={handleOnDelete} />
    </div>
  );
}

export default App;
