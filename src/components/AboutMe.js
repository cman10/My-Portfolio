import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import BottomNavBar from "./NavBar/BottomnavBar";
import NavigationComponent from "./NavBar/NavBar";
import "./AboutMe.css";
import SmallCard from "./SmallCard";

class AboutMe extends Component {
  render() {
    return (
      <div>
        <NavigationComponent />
        <div className="p-2">
          <h1>About Me</h1>
          <p>
            A self-motivated Frontend developer with 3 years of experience in
            web application development and programming. I enjoy learning new
            concepts and technologies and currently I am looking for an
            opportunity to challenge and enhance my skills while contributing
            with best of my efforts to the growth of organization.
          </p>
        </div>
        <h1>Things I know</h1>
        <SmallCard />
        <SmallCard />
        <BottomNavBar />
      </div>
    );
  }
}

export default AboutMe;
