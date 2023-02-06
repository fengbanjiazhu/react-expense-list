import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseFrom from "./ExpenseFrom";

export default function NewExpense(props) {
  const [addingStatus, setAddingStatus] = useState(false);

  const saveData = function (data) {
    const expenseData = {
      id: Math.random().toString(),
      ...data,
    };
    props.onAddExpense(expenseData);
  };

  const addingStatusHandler = function () {
    setAddingStatus(!addingStatus);
  };

  return (
    <div className="new-expense">
      {addingStatus ? (
        <ExpenseFrom onSaveData={saveData} onChangeStatus={addingStatusHandler}></ExpenseFrom>
      ) : (
        <button onClick={addingStatusHandler}>Add New Expense</button>
      )}
    </div>
  );
}
