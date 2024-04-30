import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../../UI/Card";
import React,{useState} from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023')
  const changeFilterHandler = (selectedYear)=>{
    setFilteredYear(selectedYear)
  }
  const filteredExpenses = props.expenses.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear
  })
  
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={changeFilterHandler}></ExpenseFilter>
      {filteredExpenses.map((expense, index) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          price={expense.price}
        />
      ))}
    </Card>
  );
}

export default Expenses;
