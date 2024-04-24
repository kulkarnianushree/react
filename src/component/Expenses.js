import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  console.log(props.expenses)
  return (
    <div className="expenses">
      {props.expenses.map((expense, index) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          price={expense.price}
        />
      ))}
    </div>
  );
}

export default Expenses;
