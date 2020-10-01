import React, { Component } from "react";
import Header from "./Header";
import PageHeader from "./PageHeader";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";

export class AppMain extends Component {
  render() {
    return (
      <div className="app-main">
        <Header></Header>
        <PageHeader
          title="Page header"
          subTitle="page descriptstion"
          icon={<PeopleOutlineIcon fontSize="large" />}
        />
      </div>
    );
  }
}

export default AppMain;
