
import Expenses from "./component/Expenses";

const expenses = [
  {id:1,date:new Date(2023,7,15),title:"Insurance",price:100},
  {id:2,date: new Date(2023,3,25),title:"Book",price:10},
  { id: "3", date: new Date(2023, 10, 11), title: "Pen", price: 1 },
  { id: "4", date: new Date(2023, 1, 14), title: "Laptop", price: 200 },
];

function App() {

  return (
    <div>
      <h2>Let's get Started</h2>
      <Expenses expenses = {expenses}></Expenses>
        
    
    </div>
  );
}

export default App;

