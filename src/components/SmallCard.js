import React, { Component } from "react";
import "./SmallCard.css";

class SmallCard extends Component {
  render() {
    return (
      <div>
        <div className="card m-5">
          <div>
            <div className="icon">
              <img
                src="http://engtechnos.com/All/Products/React/bella/static/media/edit-tools.5c294d60.svg"
                alt="UI/UX Design"
              ></img>
            </div>
            <h3>UI DESIGN</h3>
            <p>
              Exercitation consequat et do fugiat ipsum consequat culpa culpa
              quis eiusmod pariatur commodo.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SmallCard;
