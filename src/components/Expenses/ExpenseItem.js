import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const deleteExpenses = function (e) {
    props.onDelData(props.data.id);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.data.date}></ExpenseDate>
      <h2>{props.data.title}</h2>
      <div className="expense-item__description">
        <div className="expense-item__price">${props.data.amount}</div>
      </div>
      <button className="expense-item__deleBtn" onClick={deleteExpenses}>
        Delete
      </button>
    </Card>
  );
}

export default ExpenseItem;
