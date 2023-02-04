import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(data) {
  return (
    <div className="expense-item" id="data.data.id">
      <ExpenseDate date={data.data.date}></ExpenseDate>
      <h2>{data.data.title}</h2>
      <div className="expense-item__description">
        <div className="expense-item__price">${data.data.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
