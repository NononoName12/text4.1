import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //const [userInput, setEnteredDate] = useState({
  //  enteredTitle: "",
  //  enteredAmount: "",
  //  enteredDate: " ",
  //});

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    /*setEnteredTitle({
      ...userInput,
      enteredTitle: event.target.value,
    });*/
    //setEnteredTitle((prev) => {
    //  return { ...prev, enteredTitle: event.target.value };
    //});
  };
  const amountChangHandler = (event) => {
    setEnteredAmount(event.target.value);
    //setEnteredAmount({
    //  ...userInput,
    //  enteredAmount: event.target.value,
    //});
  };
  const dateChangHandler = (event) => {
    setEnteredDate(event.target.value);
    //setEnteredDate({
    //  ...userInput,
    //  enteredDate: event.target.value,
    //});
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            value={enteredDate}
            onChange={dateChangHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
