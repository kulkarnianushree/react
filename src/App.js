import React,{useState} from "react";
import Expenses from "./component/Expenses/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {id:1,date:new Date(2023,7,15),title:"Insurance",price:100},
  {id:2,date: new Date(2024,3,25),title:"Book",price:10},
  { id: "3", date: new Date(2025, 10, 11), title: "Pen", price: 1 },
  { id: "4", date: new Date(2024, 1, 14), title: "Laptop", price: 200 },
]
function App() {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense)=>{
   setExpenses((prevExpense)=>{
    return [expense,...prevExpense]
   })
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} / >
      <Expenses expenses = {expenses}></Expenses>
      

    
    </div>
  );
}

export default App;

