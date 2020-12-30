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

    const handleLogout = () => {
        localStorage.setItem("token", "")
        this.setState({});
        alert("Successfully logged out")
    }

    console.log(user)

    const handleLogin = () => {
        axios
        .post("http://localhost:5000/api/auth/", user)
        .then((response) => { 
            localStorage.setItem("token", response.data.token)
            this.setState({});
            alert("You're signed in bro!")
        })
        .catch((err) => {
            console.log(err)
            alert("Something went wrong - please check your email and password and try again")
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

    if (!localStorage.token) {
        return (
            <div>
                <div>
                    <input onChange={handleChange} type="text" placeholder="Enter Email" name="email" required/>
                    <input onChange={handleChange} type="text" placeholder="Enter Password" name="password" required/>
                    <button onClick={handleSignup}>Sign Up</button>
                    <button onClick={handleLogin}>Log In</button>
                </div>
            </div>
        );
    } else {
        return <button onClick={handleLogout}>Log Out</button>
    }
};

export default Login;