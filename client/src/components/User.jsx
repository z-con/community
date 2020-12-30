import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

var token = localStorage.token;
var decoded = jwt_decode(token);
console.log(decoded.user.id)


const User = (props) => {
    console.log(props)
    let [user, setUser] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/api/users/${decoded.user.id}`)
            .then((res) => {
                setUser(res.data)
                console.log(user)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    console.log(user)

    return (
        <div>
            <ul>
                <li>{user.name}</li> 
                <b>{user.email}</b>
            </ul>
        </div>
    );
};

export default User;