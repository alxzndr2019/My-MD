import React from "react";
import "./Home.css";
import Druginfo from "./Druginfo.js";
import Autosuggest from "react-autosuggest";
import PropTypes, { element } from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link, Router } from "react-router-dom";
import { blue } from "@material-ui/core/colors";
const drugs = [
  {
    name: "Paracetamol capsules",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 1
  },
  {
    name: "Panadol",
    dosage: "4 pills",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 2
  },
  {
    name: "Methylated spirit",
    dosage: "Apply once",
    price: "200₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 3
  },
  {
    name: "Hydrocortizon",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 4
  },
  {
    name: "Aboniki Balm",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 5
  },
  {
    name: "Tetracycline",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 6
  },
  {
    name: "Doxycycline",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 7
  },
  {
    name: "Tutolin",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 8
  },
  {
    name: "Tylenol",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 9
  },
  {
    name: "Abelcet",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 10
  },
  {
    name: "Abilify",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 11
  },
  {
    name: "Abraxane",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 12
  },
  {
    name: "Abreva",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 13
  },
  {
    name: "Absorica",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 14
  },
  {
    name: "Abstral",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 15
  },
  {
    name: "Acanya",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 16
  },
  {
    name: "Accolate",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 17
  },
  {
    name: "AccuNeb",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 18
  },
  {
    name: "Accupril",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 19
  },
  {
    name: "Bacitracin Injection",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 20
  },
  {
    name: "Bacitracin Ointment",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 21
  },
  {
    name: "Bacitracin Zin and Polymyxin B sulfate",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 22
  },
  {
    name: "Baclofen",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 23
  },
  {
    name: "Bactrim/Bactrim DS",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 24
  },
  {
    name: "Bactroban",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 25
  },
  {
    name: "Cabergoline",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 26
  },
  {
    name: "Cabometyx",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 27
  },
  {
    name: "Caduet",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 28
  },
  {
    name: "Cafcit",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 29
  },
  {
    name: "Dacogen",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 30
  },
  {
    name: "Danazol",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 31
  },
  {
    name: "Haldol",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 32
  },
  {
    name: "Fabrazyme",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 33
  },
  {
    name: "Famvir",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    id: 34
  }
];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("^" + escapedValue, "i");

  return drugs.filter(drug => regex.test(drug.name));
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return <span>{suggestion.name}</span>;
}

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      suggestions: [],
      filteredData: [],
      selectedDrug: {
        name: "",
        dosage: "",
        price: "",
        location: "",
        drug_interaction: "",
        drug_image_url: "",
        id: ""
      }
    };
    this.getDrug = this.getDrug.bind(this);
  }
  getDrug(drug) {
    this.setState({ selectedDrug: drug });
  }
  // componentWillMount() {
  //   this.getData();
  // }
  // getData = e => {
  //   fetch(`http://localhost:8080/api/druginfos`)
  //     .then(response => response.json())
  //     .then(data => {
  //       const { query } = this.state;
  //       const filteredData = data.filter(element => {
  //         // return element.name.toLowerCase().includes(query.toLowerCase());
  //         if (
  //           element.name.toLowerCase().slice(0, this.state.query.length) ===
  //           this.state.query
  //         ) {
  //           return element;
  //         } else {
  //           element.name = "";
  //           return element;
  //         }
  //       });
  //       if (!this.state.query.length >= 1) {
  //         filteredData = [];
  //       }
  //       this.setState({
  //         // data,
  //         filteredData
  //       });
  //     });
  // };
  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };
  onSuggestionSelected = (
    event,
    { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
  ) => {
    this.setState({
      selectedDrug: {
        name: suggestion.name,
        dosage: suggestion.dosage,
        price: suggestion.price,
        location: suggestion.location,
        drug_interaction: suggestion.drug_interaction,
        drug_image_url: suggestion.drug_image_url,
        id: suggestion.id
      }
    });
  };
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  on;
  render() {
    const { classes } = this.props;
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Select Drugs",
      value,
      onChange: this.onChange
    };

    return (
      <div>
        <div id="herotext">
          <h1>Best Drug Search💊😊</h1>
          <h6>For Everyone...</h6>
        </div>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          onSuggestionSelected={this.onSuggestionSelected}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
        <div>
          <Link to="/Druginfo">
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick
            >
              Go Nuts💊
            </Button>
          </Link>
          <div class="card1">
            <div class="container1">
              <h4>
                <b>Drug Information💊</b>
              </h4>
              <p>
                <b>Name</b>: {this.state.selectedDrug.name}
              </p>
              <p>
                <b>Dosage</b>: {this.state.selectedDrug.dosage}
              </p>
              <p>
                <b>Price</b>: {this.state.selectedDrug.price}
              </p>
              <p>
                <b>Location</b>: {this.state.selectedDrug.location}
              </p>
              <p>
                <b>Drug interaction</b>:
                {this.state.selectedDrug.drug_interaction}
              </p>
              <p>
                <b>Drug Image</b>:{this.state.selectedDrug.drug_image_url}
              </p>
            </div>
          </div>
          {/* <div>
            <Card className={classes.card}>
              <h6>Name:{this.state.selectedDrug.name}</h6>
              <h6>Dosage:{this.state.selectedDrug.dosage}</h6>
              <h6>Price:{this.state.selectedDrug.price}</h6>
              <h6>Location:{this.state.selectedDrug.location}</h6>
              <h6>
                Drug interaction:{this.state.selectedDrug.drug_interaction}
              </h6>
              <h6>IMG:{this.state.selectedDrug.drug_image_url}</h6>
              <h6>ID:{this.state.selectedDrug.id}</h6>
            </Card>
          </div> */}
        </div>
      </div>
    );
  }
}
Home.propTypes = {
  classes: PropTypes.object.isRequired
};
const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  card: {
    minWidth: 75,
    color: blue
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});
export default withStyles(styles)(Home);
