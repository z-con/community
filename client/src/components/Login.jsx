import React, { useState } from "react";
import axios from "axios";
import CurrentUser from "./CurrentUser"

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
        window.location.reload();
        setUser(user => [user])
    }

    const handleLogin = () => {
        axios
        .post("https://arcane-journey-00357.herokuapp.com/api/auth/", user)
        .then((response) => { 
            localStorage.setItem("token", response.data.token)
            window.location.reload();
            setUser(user => [user])            
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleSignup = () => {
        axios
        .post("https://arcane-journey-00357.herokuapp.com/api/users/", user)
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
                <div className="login">
                <b>SOM Community</b>
                
                    <div>
                        <input onChange={handleChange} type="text" placeholder="Enter Email" name="email" required/>
                        <input onChange={handleChange} type="text" placeholder="Enter Password" name="password" required/>
                    	<button onClick={handleSignup}>Sign Up</button>
                    	<button onClick={handleLogin}>Log In</button>
                    </div>
                </div>
            </div>
        );
    } else {
        return(
            <div className="logout">
                <b>SOM Community</b>
                < CurrentUser/>
                <button onClick={handleLogout}>Log Out</button>
            </div>
        )
    }
};

export default Login;