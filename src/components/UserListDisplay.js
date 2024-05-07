import React from "react";
import './UserListDisplay.css'

const UserListDisplay = (props) => {
    return (
        <div className="users"> 
            {props.UserList.map((user) => {
                return (
                    <ul>
                        <li key={user.id}>
                            {user.username} ({user.age + 'Years Old'})
                        </li>
                    </ul>
                    
                );
            })}
        </div>
    );
};

export default UserListDisplay;
