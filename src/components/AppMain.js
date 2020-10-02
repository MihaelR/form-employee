import React, { Component } from "react";
import Header from "./Header";
import Employees from "./Employees";

export class AppMain extends Component {
  render() {
    return (
      <div className="app-main">
        <Header></Header>
        <Employees />
      </div>
    );
  }
}

export default AppMain;
