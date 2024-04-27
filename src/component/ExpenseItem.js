import React,{useState} from "react"
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";


function ExpenseItem(props) {
  const [title,setTitle] = useState(props.title);
  function buttonClickHandler(event){
    setTitle("New Title")

  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
        <button onClick="buttonClickHandler">Clicked</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
