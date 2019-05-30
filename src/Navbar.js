import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          {/*Logo*/}
          <Link to="/">
            <a href="#" id="logo" to="/">
              My-MD
            </a>
          </Link>
          {/* The Links*/}
          <ul>
            <li>
              <a href="#">
                <b>About</b>
              </a>
            </li>
            <li>
              <a href="#">
                <b>Blog</b>
              </a>
            </li>
            <li>
              <Link to="/AddDrug">
                <a href="#">
                  <b>Add Drug</b>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Navbar;
