import React from "react";
import pill from "./pill.png";
import Home from "./Home.js";
import { Link, Router } from "react-router-dom";
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
      selectedDrug: { name, dosage, price, location, drug_interaction }
    } = this.props.location.state;
    return (
      <div>
        <h1>Drug information💊💊💊</h1>
        <div class="card">
          <div class="container">
            <h3>Drug name:{name}</h3>
            <h3>Dosage:{dosage}</h3>
            <h3>Price:{price}</h3>
            <h3>Location:{location}</h3>
            <h3>Drug Interaction:{drug_interaction}</h3>
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
