import React from "react";
import pill from "./pill.png";
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
    // const {
    //   name,

    //   dosage,

    //   price,

    //   location,

    //   drug_interaction,

    //   drug_image_url
    // } = this.props.selectedDrugData;
    return (
      <div>
        <h1>Drug information💊💊💊</h1>
        <div class="card">
          <div class="container">
            <h3>Drug name:</h3>
            <h3>Dosage:</h3>
            <h3>Price:</h3>
            <h3>Location:</h3>
            <h3>Drug Interaction:</h3>
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
