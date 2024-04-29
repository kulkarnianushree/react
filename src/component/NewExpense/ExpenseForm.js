import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const [enteredAmount,setEnteredAmount] = useState("")
  const AmountChangeHandler = (event) =>{
    setEnteredAmount(event.target.value)
  };
  const [entereddate,setEntereddate] = useState("")
  const DateChangeHandler = (event) =>{
    setEntereddate(event.target.value)
  };

  const formSubmitHandler = (event) =>{
    event.preventDefault();
    const ExpenseData = {
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date (entereddate)
    }
    console.log(ExpenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEntereddate('')

  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" value={enteredTitle} id="title" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input type="number" value={enteredAmount} id="amount" onChange={AmountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input type="date" value={entereddate} id="date" min="2023-01-01" max="2024-12-31" onChange={DateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;