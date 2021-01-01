import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

const CurrentUser = (props) => {

    var token = localStorage.token;
    var decoded = jwt_decode(token);
    console.log(props)
    let [currentUser, setCurrentUser] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/users/${decoded.user.id}`)
            .then((res) => {
                setCurrentUser(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    if(!localStorage.token) {
        return (
            <div>
            </div>
        )
    } else {
        return (
            <div>
                <b>{currentUser.name}</b> 
                <b>[ </b>
                <b>{currentUser.email}</b>
                <b> ]</b>
            </div>
            )
    }

    
};

export default CurrentUser;