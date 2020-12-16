import React, { useState } from "react";
import axios from "axios";

const Login = () => {

    const [user, setUser] = useState()

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    console.log(user)




    const handleLogin = () => {
        axios
        .post("http://localhost:5000/api/auth/", user)
        .then((response) => { 
            localStorage.setItem("token", response.data.token)        
            alert("You're signed in bro!")
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleSignup = () => {
        axios
        .post("http://localhost:5000/api/users/", user)
        .then((response) => { 
            alert('You signed up - welcome!')
            handleLogin(user)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <input onChange={handleChange} type="text" placeholder="Enter Email" name="email" required/>
            <input onChange={handleChange} type="text" placeholder="Enter Password" name="password" required/>
            <button onClick={handleSignup}>Sign Up</button>
            <button onClick={handleLogin}>Log In</button>
        </div>
    );
};

export default Login;