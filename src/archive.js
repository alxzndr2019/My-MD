import React from "react";
import PropTypes from "prop-types";
import deburr from "lodash/deburr";
import Autosuggest from "react-autosuggest";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link, Router } from "react-router-dom";
import { blue } from "@material-ui/core/colors";
import "./Home.css";
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

function renderInputComponent(inputProps) {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;

  return (
    <TextField
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input
        }
      }}
      {...other}
    />
  );
}
function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.name, query);
  const parts = parse(suggestion.name, matches);

  return (
    <MenuItem selected={isHighlighted} component="li">
      <div>
        {parts.map((part, index) =>
          part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </strong>
          )
        )}
      </div>
    </MenuItem>
  );
}

function getSuggestions(value) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : drugs.filter(drug => {
        const keep =
          count < 5 &&
          drug.name.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}
const styles = theme => ({
  root: {
    height: 250,
    flexGrow: 1
  },
  container: {
    position: "relative"
  },
  suggestionsContainerOpen: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  suggestion: {
    display: "block"
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  },
  divider: {
    height: theme.spacing.unit * 2
  }
});

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
  handleChange = (event, { newValue, method }) => {
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
  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { classes } = this.props;
    const { value, suggestions } = this.state;
    const autosuggestProps = {
      renderInputComponent,
      suggestions: suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      onSuggestionSelected: this.onSuggestionSelected,
      getSuggestionValue,
      renderSuggestion
    };

    return (
      <div className={classes.root}>
        {/* <div>
          {this.state.data.map(items => (
            <li key="">{items.names}</li>
          ))}
        </div> */}

        <Autosuggest
          {...autosuggestProps}
          inputProps={{
            classes,
            placeholder: "Search for drugs",
            value,
            onChange: this.handleChange("value")
          }}
          theme={{
            container: classes.container,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion
          }}
          renderSuggestionsContainer={options => (
            <Paper {...options.containerProps} square>
              {options.children}
            </Paper>
          )}
        />
        <div className={classes.divider} />
        <div>
          <Link
            to={{
              pathname: "/Druginfo",
              state: {
                selectedDrug: {
                  name: this.state.selectedDrug.name,
                  dosage: this.state.selectedDrug.dosage,
                  price: this.state.selectedDrug.price,
                  location: this.state.selectedDrug.location,
                  drug_interaction: this.state.selectedDrug.drug_interaction,
                  drug_image_url: this.state.selectedDrug.drug_image_url,
                  id: this.state.selectedDrug.id
                }
              }
            }}
          >
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.handleClick()}
            >
              Go Nuts<span>💊</span>
            </Button>
          </Link>
        </div>
        {/* <div className="Results">
          <h1>Search Results</h1>
          <h6>{this.state.results}</h6>
        </div> */}
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
