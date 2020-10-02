import React, { Component, useState, useEffect, useForm } from "react";
import { Grid, TextField } from "@material-ui/core";
import UseForm from "./UseForm";

export default function EmployeesForm() {
  const initialValues = {
    id: 0,
    fullName: "",
    email: "",
    mobile: "",
    city: "",
    gender: "male",
    departmentId: "",
    hireDate: new Date(),
    isPermanent: false,
  };

  const { values, setValues, handleInputChange } = useForm(initialValues);

  return (
    <form className="employees-form">
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            label="Full name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            name="email"
            label="email"
            value={values.email}
          />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </form>
  );
}
