import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseFrom(props) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  const titleChangeHandler = function (e) {
    setInputTitle(e.target.value);
  };

  const amountChangeHandler = function (e) {
    setInputAmount(e.target.value);
  };

  const dateChangeHandler = function (e) {
    setInputDate(e.target.value);
  };

  const submitHandler = function (e) {
    e.preventDefault();
    const expenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveData(expenseData);
    setInputTitle("");
    setInputAmount("");
    setInputDate("");

    props.onChangeStatus();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={inputTitle} onChange={titleChangeHandler} required="required"></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputAmount}
            onChange={amountChangeHandler}
            required="required"
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2033-12-31"
            value={inputDate}
            onChange={dateChangeHandler}
            required="required"
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onChangeStatus}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
