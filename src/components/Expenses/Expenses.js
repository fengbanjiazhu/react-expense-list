import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("");

  const filterHandler = function (selectYear) {
    setFilterYear(selectYear);
  };

  const filteredExpenses = props.data.filter((expense) => {
    if (filterYear === "") return expense;
    return expense.date.getFullYear().toString() === filterYear;
  });

  const changeData = function (id) {
    let data = props.data;
    let delIndex = data.findIndex((el) => el.id === id);
    data.splice(delIndex, 1);
    props.onChangeExpense(data);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onFilter={filterHandler}></ExpensesFilter>
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      {filteredExpenses.length === 0 ? (
        <p className="expenses__fallback">No expenses found.</p>
      ) : (
        filteredExpenses.map((el, index) => {
          return <ExpenseItem onDelData={changeData} key={filteredExpenses[index].id} data={filteredExpenses[index]} />;
        })
      )}
      <div></div>
    </Card>
  );
}

export default Expenses;
