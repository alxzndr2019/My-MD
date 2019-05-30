import React, { Component } from "react";
import "./Adddrug.css";
import axios from "axios";

class Adddrug extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      dosage: "",
      price: "",
      location: "",
      drug_interaction: "",
      drug_image_url: "",
      loading: false,
      message: ""
    };
  }
  dataChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }
  postData(ev) {
    ev.preventDefault();
    const name = this.state.name;
    const dosage = this.state.dosage;
    const price = this.state.price;
    const location = this.state.location;
    const drug_interaction = this.state.drug_interaction;
    const drug_image_url = this.state.drug_image_url;

    this.setState({
      loading: true
    });
    const data = {
      name,
      dosage,
      price,
      location,
      drug_interaction,
      drug_image_url
    };
    axios
      .post("http://localhost:8080/api/druginfos", data)
      .then(response => {
        console.log(response);
        this.setState({
          loading: false,
          message: response.data
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          loading: false
        });
      });
  }
  loadOrShowMsg() {
    if (this.state.loading) {
      return <p>Loading</p>;
    } else {
      return <p>{this.state.message}</p>;
    }
  }
  routeChange() {
    let path = "/";
    this.props.history.push(path);
  }

  render() {
    return (
      <div class="form">
        <form onSubmit={this.postData.bind(this)}>
          <h1>Drug Infomation</h1>

          <input
            name="name"
            class="f"
            type="text"
            id="input"
            placeholder="Drug Name"
            onChange={this.dataChange.bind(this)}
          />
          <br />

          <br />

          <input
            name="dosage"
            class="f"
            type="text"
            id="dose"
            placeholder="Dosage"
            onChange={this.dataChange.bind(this)}
          />
          <br />

          <br />

          <input
            name="price"
            class="f"
            type="text"
            id="input"
            placeholder="Price"
            onChange={this.dataChange.bind(this)}
          />
          <br />

          <br />

          <input
            name="location"
            class="f"
            type="text"
            id="input"
            placeholder="Location"
            onChange={this.dataChange.bind(this)}
          />
          <br />

          <br />

          <input
            name="drug_interaction"
            class="f"
            type="text"
            id="interact"
            placeholder="Drug Interaction"
            onChange={this.dataChange.bind(this)}
          />
          <br />

          <br />
          <input
            name="drug_image_url"
            class="f"
            type="text"
            id="input"
            placeholder="Drug Image url"
            onChange={this.dataChange.bind(this)}
          />
          <br />

          <br />

          <input
            type="submit"
            className="add-btn"
            value="Save and Continue"
            onClick={this.routeChange}
          />
        </form>
        {this.loadOrShowMsg()}
      </div>
    );
  }
}
export default Adddrug;
