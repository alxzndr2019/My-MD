import React, { Component } from "react";
import PropTypes, { element } from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Downshift from "downshift";
import TextField from "@material-ui/core/TextField";
import deburr from "lodash/deburr";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
//import Chip from "@material-ui/core/Chip";
import "./Home.css";
const suggestions = [
  { label: "Panadol" },
  { label: "Paracetamol" },
  { label: "Cortizon" },
  { label: "Tetracyclyine" },
  { label: "Doxycycline" },
  { label: "Aboniki balm" },
  { label: "Luxoderm" },
  { label: "Hydrocortizone" },
  { label: "Flagen" },
  { label: "Adderall" },
  { label: "Amoxicillin" },
  { label: "Viagra" },
  { label: "Oxycodone" },
  { label: "Prednicatol" },
  { label: "Tramadol" },
  { label: "Lyrica" },
  { label: "Metoprolol" },
  { label: "Meloxicam" },
  { label: "Losartan" },
  { label: "Lexapro" },
  { label: "Lisinoapril" },
  { label: "Ibuprofen" },
  { label: "Ativan" },
  { label: "Codeine" },
  { label: "Citalopram" },
  { label: "Metformin" },
  { label: "Metoprolol" },
  { label: "Zoloft" },
  { label: "Wellbutrin" },
  { label: "Trazodone" },
  { label: "Prednisone" },
  { label: "Cymbalta" },
  { label: "Cyclobenzaprine" },
  { label: "Ibuprofen" }
];

function renderInput(inputProps) {
  const { selectedItem, InputProps, classes, ref, ...other } = inputProps;

  return (
    <TextField
      InputProps={{
        inputRef: ref,
        selectedItem,
        classes: {
          root: classes.inputRoot,
          input: classes.inputInput
        },
        ...InputProps
      }}
      {...other}
    />
  );
}

function renderSuggestion({
  suggestion,
  index,
  itemProps,
  highlightedIndex,
  selectedItem
}) {
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem || "").indexOf(suggestion.label) > -1;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400
      }}
    >
      {suggestion.label}
    </MenuItem>
  );
}
renderSuggestion.propTypes = {
  highlightedIndex: PropTypes.number,
  index: PropTypes.number,
  itemProps: PropTypes.object,
  selectedItem: PropTypes.string,
  suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired
};

function getSuggestions(value) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;
  console.log(value);

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 &&
          suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }
        return keep;
      });
}

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      // result: [],
      selectedItem: []
    };
  }

  handleKeyDown = event => {
    const { inputValue, selectedItem } = this.state;
    if (
      selectedItem.length &&
      !inputValue.length &&
      event.key === "Backspace"
    ) {
      this.setState({
        selectedItem: selectedItem.slice(0, selectedItem.length - 1)
      });
    }
  };
  handleInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };
  handleChange = item => {
    let { selectedItem } = this.state;

    if (selectedItem.indexOf(item) === -1) {
      selectedItem = [...selectedItem, item];
    }
    this.setState({
      inputValue: ""
    });
  };

  handleDelete = item => () => {
    this.setState(state => {
      const selectedItem = [...state.selectedItem];
      selectedItem.splice(selectedItem.indexOf(item), 1);
      return { selectedItem };
    });
  };

  // handleInput = e => {
  //   this.setState({
  //     query: e.target.value
  //   });
  // };

  handleSubmit = () => {
    let errorMessage = {};
    if (!this.state.inputValue) {
      errorMessage.message = "Enter Input value";
    }

    return errorMessage;
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
  render() {
    // let { result, query, inputValue, selectedItem } = this.state;
    const { classes } = this.props;

    // let renderItems = () => {};
    // console.log(result);

    return (
      <div className="homerun">
        <div id="herotext">
          <h1>Best Drug Search Engine</h1>
          <h6>For Everyone...</h6>
        </div>

        <Downshift id="downshift-simple"
        // selectedItem={selectedItem}
        >
          {({
            getInputProps,
            getItemProps,
            getMenuProps,
            highlightedIndex,
            inputValue,
            isOpen,
            selectedItem
          }) => (
            <div className={classes.container}>
              {renderInput({
                fullWidth: true,
                classes,
                InputProps: getInputProps({
                  placeholder: "Search a for Drug"
                })
              })}
              <div {...getMenuProps()}>
                {isOpen ? (
                  <Paper className={classes.paper} square>
                    {getSuggestions(inputValue).map((suggestion, index) =>
                      renderSuggestion({
                        suggestion,
                        index,
                        itemProps: getItemProps({ item: suggestion.label }),
                        highlightedIndex,
                        selectedItem

                      })
                    )}
                  </Paper>
                ) : null}
              </div>
            </div>
          )}
        </Downshift>

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
      </div>
    );
  }
}

// {/* // <div className="container">
// //   <div id="Herotext">
// //     <h1>Best Drug Search Engine</h1>
// //     <h6>For every one....</h6>
// //   </div>
// //   <div id="searchbar">
// //     <form className={classes.container} noValidate autoComplete="off"> */}
// //       {/* <input
//         type="text"
//         className="search-box"
//         placeholder="Search for drugs..."
//         value={this.state.query}
//         onChange={text => this.handleInput(text)}
//       /> */}

//       <TextField
//         id="standard-name"
//         label="Name"
//         className={classes.textField}
//         value={this.state.query}
//         onChange={text => this.handleInput(text)}
//         // margin="normal"
//       />
//     </form>

//     <Button
//       variant="contained"
//       color="primary"
//       className={classes.button}
//       onClick={() => this.handleSubmit()}
//     >
//       Searchcvvc  /.m,m
//     </Button>
//   </div>
//   {renderItems}
//   <div>
//     {result.map((items, i) => {
//     {query == items.name ? <div>{items.name}</div> : <div>?</div>}
//     })}
//   </div>
//  </div>

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 2000
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1,
    position: "relative"
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  root: {
    flexGrow: 1,
    height: 250
  },
  paper: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`
  },
  inputRoot: {
    flexWrap: "wrap"
  },
  inputInput: {
    width: "auto",
    flexGrow: 1
  },
  divider: {
    height: theme.spacing.unit * 2
  }
});

export default withStyles(styles)(Home);
