import React,{useState} from "react";
import UserList from "./components/UserList";
import UserListDispaly from "./components/UserListDisplay";

function App() {
  const[userList , setUserList] = useState([])
  const AddListHandler = (userlist) =>{
    setUserList((prevUserList) => {
      return [...prevUserList, userlist];
    });
    

      

  }
  return (
    <div>
      <UserList onAddList = {AddListHandler} />
      <UserListDispaly UserList = {userList}></UserListDispaly>
      
    </div>
  );
}

export default App;
