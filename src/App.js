import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const example = [
  {
    id: "0000001",
    title: "Book",
    amount: 10,
    date: new Date(2023, 2, 7),
  },
];
const initData = JSON.parse(localStorage.getItem("expensesList"))?.map((el) => {
  el.date = new Date(el.date);
  return el;
});

const INIT_EXPENSES = initData || example;

function App() {
  const [expenses, setExpenses] = useState(INIT_EXPENSES);

  const saveData = function (data) {
    localStorage.setItem("expensesList", JSON.stringify(data));
  };

  const addExpenseHandler = function (data) {
    const newExpense = { ...data };
    setExpenses((prevExpenses) => {
      const expense = [newExpense, ...prevExpenses];
      saveData(expense);
      return expense;
    });
    // );
  };

  const delExpenseHandler = function (data) {
    setExpenses(() => {
      const expense = [...data];
      saveData(expense);
      return expense;
    });
  };

  return (
    <div className="App">
      {/* <h2>Hi</h2> */}
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses onChangeExpense={delExpenseHandler} data={expenses}></Expenses>
    </div>
  );
}

export default App;
