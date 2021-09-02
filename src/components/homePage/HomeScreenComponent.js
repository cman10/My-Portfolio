import React, { Component } from "react";
import "./HomeScreenComponent.css";

class HomeScreenComponent extends Component {
  render() {
    return (
      <div className="text-center">
        <h3 className="align-start">I am</h3>
        <h1 className="headerName">Manik Chhabra</h1>
        <div className="typewriter">
          <span>FrontEnd Developer</span>
        </div>
        <p className="goals">
          Frontend developer with 3 years of experience in web application
          development and programming.
        </p>
        <div className="links">
          <a
            href="https://drive.google.com/u/1/uc?id=1PIqYaqAF9waUc-Ff4dYmmb5WeJI9ipZ2&export=download"
            download=""
            class="download"
          >
            Download CV{" "}
          </a>
          <a class="contact" href="mailto:manikchhabra10@gmail.com">
            Contact Me{" "}
          </a>
        </div>
      </div>
    );
  }
}

export default HomeScreenComponent;
