import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = (props) => {
    console.log(props)
    let [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/api/users`)
            .then((res) => {
                setUsers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    return (
        <div>
            {users && users.map(eachUser => 
            <ul>
                <li>{eachUser.name}</li> 
                <b>{eachUser.email}</b>
            </ul>
            )}
        </div>
    );
};

export default Users;