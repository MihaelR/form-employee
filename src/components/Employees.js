import { ImportExport } from "@material-ui/icons";
import React, { Component } from "react";
import EmployeesForm from "./EmployeesForm";
import PageHeader from "./PageHeader";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import { Paper } from "@material-ui/core";

export class Employees extends Component {
  render() {
    return (
      <div>
        <PageHeader
          title="New Employee"
          subTitle="Form design with validation"
          icon={<PeopleOutlineIcon fontSize="large" />}
        />
        <Paper className="employees-paper">
          <EmployeesForm />
        </Paper>
      </div>
    );
  }
}

export default Employees;
