import React, { useState, useEffect } from "react";
import axios from "axios";

const UserDetail = (props) => {
    console.log(props)
    let [user, setUser] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/api/users`)
            .then((res) => {
                setUser(res.data)
                console.log(user)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    return (
        <div>
            {user && user.map(eachUser => <li>{eachUser.name} </li>)}
        </div>
    );
};

export default UserDetail;