import React from "react";
import { Link, Router } from "react-router-dom";
class Druginfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectDrug: {
        name: "",
        dosage: "",
        price: "",
        location: "",
        drug_interaction: "",
        drug_image_url: "",
        id: ""
      }
    };
  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>{this.props.dosage}</h1>
        <h1>{this.props.price}</h1>
        <h1>{this.props.location}</h1>
        <h1>{this.props.drug_interaction}</h1>
        <h1>{this.props.drug_image_url}</h1>
        <h1>{this.props.id}</h1>
      </div>
    );
  }
}
export default Druginfo;
