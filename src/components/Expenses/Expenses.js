import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2023");

  const filterHandler = function (selectYear) {
    setFilterYear(selectYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onFilter={filterHandler}></ExpensesFilter>
      <ExpenseItem data={props.data[0]} />
      <ExpenseItem data={props.data[1]} />
      <ExpenseItem data={props.data[2]} />
      <ExpenseItem data={props.data[3]} />

      <div></div>
    </Card>
  );
}

export default Expenses;
