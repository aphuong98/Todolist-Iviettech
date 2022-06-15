import React, { Component } from "react";
import "./style.css";
export default class Header extends Component {
 
  render() {
    return <h2>{this.props.title}</h2>;
  }
}
