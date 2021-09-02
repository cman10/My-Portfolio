import React, { Component } from "react";
import BottomNavBar from "./NavBar/BottomnavBar";
import NavigationComponent from "./NavBar/NavBar";
import "./AboutMe.css";
import SmallCard from "./SmallCard";
import Form from "../FormComponent";
import FormComponent from "../FormComponent";

class LoginComponent extends Component {
  render() {
    return (
      <div>
        <NavigationComponent />
        <form>
          <div className="m-3">
            <label htmlFor="name">Email</label>
            <input type="text" id="email" />
          </div>
          <div className="m-3">
            <label htmlFor="name">Password</label>
            <input type="password" id="email" />
          </div>
        </form>
        <BottomNavBar />
      </div>
    );
  }
}

export default LoginComponent;
