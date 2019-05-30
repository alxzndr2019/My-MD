import React, { Component } from "react";
import "./Navbar.css";
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          {/*Logo*/}
          <a href="#" id="logo" to="/">
            My-MD
          </a>

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
              <a href="#">
                <b>Add Drug</b>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Navbar;
