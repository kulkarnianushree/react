import React,{useState} from "react";
import "./ExpenseForm.css";
const ExpenseForm = () =>{
    const [enteredTitle,setEnteredTitle] = useState("")
    const TitleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value)
    }
    const [enteredAmount,setEnteredAmount] = useState("")
    const AmountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value)
    }
    const [entereddate,setEntereddate] = useState("")
    const DateChangeHandler = (event) =>{
        setEntereddate(event.target.value)
    }
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={TitleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" onChange={AmountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input type="date" min="2023-01-01" max= "2024-12-31" id="date" onChange={DateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>

    )

}
export default ExpenseForm;