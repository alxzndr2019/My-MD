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
import "./Home.css";
// const suggestions = [
//   { label: "Panadol" },
//   { label: "Paracetamol" },
//   { label: "Cortizon" },
//   { label: "Tetracyclyine" },
//   { label: "Doxycycline" },
//   { label: "Aboniki balm" },
//   { label: "Luxoderm" },
//   { label: "Hydrocortizone" },
//   { label: "Flagen" },
//   { label: "Adderall" },
//   { label: "Amoxicillin" },
//   { label: "Viagra" },
//   { label: "Oxycodone" },
//   { label: "Prednicatol" },
//   { label: "Tramadol" },
//   { label: "Lyrica" },
//   { label: "Metoprolol" },
//   { label: "Meloxicam" },
//   { label: "Losartan" },
//   { label: "Lexapro" },
//   { label: "Lisinoapril" },
//   { label: "Ibuprofen" },
//   { label: "Ativan" },
//   { label: "Codeine" },
//   { label: "Citalopram" },
//   { label: "Metformin" },
//   { label: "Metoprolol" },
//   { label: "Zoloft" },
//   { label: "Wellbutrin" },
//   { label: "Trazodone" },
//   { label: "Prednisone" },
//   { label: "Cymbalta" },
//   { label: "Cyclobenzaprine" },
//   { label: "Ibuprofen" }
// ];

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
  const matches = match(suggestion.name, this.state.single);
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
    : this.state.data.map(suggestion => {
        const keep =
          count < 5 &&
          suggestion.name.slice(0, inputLength).toLowerCase() === inputValue;

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
  state = {
    single: "",
    suggestions: [],
    data: [],
    loading: true
  };
  // componentWillMount() {
  //   const url = "http://localhost:8080/api/druginfos";
  //   fetch(url, {
  //     method: "GET"
  //   })
  //     .then(results => {
  //       return results.json();
  //     })
  //     .then(data => {
  //       this.setState({ result: data });

  //     });

  // }
  async componentDidMount() {
    const url = "http://localhost:8080/api/druginfos";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data: data });
    console.log(data);
    console.log(this.state.data);
  }
  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      data: getSuggestions(value)
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      data: []
    });
  };

  handleChange = name => (event, { newValue }) => {
    this.setState({
      [name]: newValue
    });
    console.log({ newValue });
  };
  // checkAccu = () => {
  //   if (suggestions.filter(e => e.label === this.state.single).length > 0) {
  //     this.setState({
  //       typo: "Not in our data base"
  //     });
  //   }
  // };
  // handleSubmit = () => {
  //   if (suggestions.filter(e => e.label === this.state.single).length > 0) {
  //     alert(`${this.state.single} is in our database`);
  //   } else {
  //     alert(`${this.state.single} is not in our database`);
  //   }
  //   this.setState({
  //     Results: this.state.single
  //   });
  //   console.log(this.state.single);
  // };

  render() {
    const { classes } = this.props;

    const autosuggestProps = {
      renderInputComponent,
      suggestions: this.state.data,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
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
            value: this.state.single,
            onChange: this.handleChange("single")
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
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => this.handleSubmit()}
          >
            Search
          </Button>
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
