import React, { useState } from "react";
import './UserList.css'; // Importing CSS file

const UserList = (props) => {
    const [entername, setEnterName] = useState('');
    const [enterage, setEnterAge] = useState('');
    const [error, setError] = useState('');

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (!entername.trim()) {
            setError('Please Write name of the User');
            return;
        }
        if (parseInt(enterage) <= 0) {
            setError('Please Enter the age greater than 0');
            return;
        }
        const UserData = {
            'username': entername,
            'age': enterage
            
        };

        props.onAddList(UserData);
        setEnterName('');
        setEnterAge('');
        
    };
    const buttonhandler = () =>{
        setError('')
    }

    return (
        <form onSubmit={formSubmitHandler}>
            {error && 
            <div className="extra">
                <p>Error Occured</p>
                {error}
                <button onClick={buttonhandler}>Okay</button>
            </div>}
            <div className="user-list">
                <div className="input">
                    <label htmlFor="name">User Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={entername}
                        onChange={(e) => setEnterName(e.target.value)} />
                </div>
                <div className="input">

                    <label htmlFor="age">Age (Years):</label>
                    <input
                        type="number"
                        id="age"
                        value={enterage}
                        onChange={(e) => setEnterAge(e.target.value)} />
                </div>
                <div className="btn">
                    <button type="submit">Add User</button>
                </div>
            </div>
        </form>

    );
};

export default UserList;
