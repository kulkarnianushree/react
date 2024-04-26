import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";


function ExpenseItem(props) {
  function buttonClickhandler(event){
    console.log("button clicked")

  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
        <button onClick={buttonClickhandler}>Change title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
