import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(data) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={data.data.date}></ExpenseDate>
      <h2>{data.data.title}</h2>
      <div className="expense-item__description">
        <div className="expense-item__price">${data.data.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
