import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2023");

  const filterHandler = function (selectYear) {
    setFilterYear(selectYear);
  };

  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onFilter={filterHandler}></ExpensesFilter>
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      {filteredExpenses.length === 0 ? (
        <p className="expenses__fallback">No expenses found.</p>
      ) : (
        filteredExpenses.map((el, index) => {
          return <ExpenseItem key={filteredExpenses[index].id} data={filteredExpenses[index]} />;
        })
      )}
      <div></div>
    </Card>
  );
}

export default Expenses;
