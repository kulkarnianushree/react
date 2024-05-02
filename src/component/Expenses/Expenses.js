import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../../UI/Card";
import React, { useState } from "react";
import ExpenseChart from "./ExpenseChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <p>No expenses found</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense, index) => (
      <ExpenseItem
        key={expense.id}
        date={expense.date}
        title={expense.title}
        price={expense.price}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={changeFilterHandler} />
      {filteredExpenses.length === 1 && (
        <p>Only one expense found. Please add more</p>
      )}
      <ExpenseChart chartData={filteredExpenses}/>
      {expenseContent}
    </Card>
  );
};

export default Expenses;
