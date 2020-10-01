import React, { Component } from "react";
import { Paper, Card, Typography } from "@material-ui/core";

function PageHeader(props) {
  const { title, subTitle, icon } = props;

  return (
    <Paper elevation={0} square>
      <div className="page-header">
        <Card
          style={{
            color: "#3c44b1",
            borderRadius: "15px",
          }}
          className="header-icon"
        >
          {icon}
        </Card>

        <div>
          <Typography className="page-title" variant="h6" component="div">
            {title}
          </Typography>
          <Typography
            className="page-subtitle"
            variant="subtitle2"
            component="div"
          >
            {subTitle}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}

export default PageHeader;
