import React from "react";
import pill from "./pill.png";
import Home from "./Home.js";
import { Router } from "react-router-dom";
import "./Druginfo.css";

class Druginfo extends React.Component {
  constructor(props) {
    super(props);
    // const {
    //   name,
    //   dosage,
    //   price,
    //   location,
    //   drug_interaction,
    //   drug_image_url
    // } = this.props.selectedDrug
  }

  render() {
    const {
      selectedDrug: {
        name,
        dosage,
        price,
        location,
        drug_interaction,
        side_effects
      }
    } = this.props.location.state;
    return (
      <div>
        <h1>Drug information💊💊💊</h1>
        <div class="card">
          <div class="container">
            <h3>Name of Drug</h3>
            <p>{name}</p>
            <h3>Dosage</h3>
            <p>{dosage}</p>
            <h3>Price</h3>
            <p>{price}</p>
            <h3>Location</h3>
            <p>{location}</p>
            <h3>Drug-Interaction</h3>
            <div className="interact">
              <p>{drug_interaction}</p>
            </div>

            <h3>Side-Effects</h3>
            <div className="sideeffect">
              <li>{side_effects}</li>
            </div>
            <div className="drugimage">
              <img src={pill} alt="drug goes here" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Druginfo;
