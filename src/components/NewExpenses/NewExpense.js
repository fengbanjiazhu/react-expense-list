import React from "react";
import "./NewExpense.css";
import ExpenseFrom from "./ExpenseFrom";

export default function NewExpense(props) {
  const saveData = function (data) {
    const expenseData = {
      id: Math.random().toString(),
      ...data,
    };
    // console.log(props);
    props.onAddExpense(expenseData);
    // console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseFrom onSaveData={saveData}></ExpenseFrom>
    </div>
  );
}
