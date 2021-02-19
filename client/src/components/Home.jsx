import React, { Component } from "react";
import axios from "axios";
import Posts from "./Posts"
import Login from "./Login"

export default class Home extends Component {
  async callMyBackend() {
    // this is an example call to our backend
    let responseFromBackend = await axios.get("http://arcane-journey-00357.herokuapp.com/api/users");
    console.log(responseFromBackend);
  }
  
  render() {
    return (
      <div className="home">
        <div>
        < Login />
        </div>
        <br></br>
        <div>
        < Posts />
        </div>
      </div>
    );
  }
}