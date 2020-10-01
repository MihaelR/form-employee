import { Badge, Grid, IconButton, InputBase, Toolbar } from "@material-ui/core";
import React, { Component } from "react";
import { AppBar } from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SearchIcon from "@material-ui/icons/Search";

export class Header extends Component {
  render() {
    return (
      <AppBar className="app-bar" position="static">
        <Toolbar>
          <Grid container className="container">
            <Grid
              item
              md={4}
              xs={3}
              style={{
                border: "1px solid #fff",
                textAlign: "left",
                justifyContent: "center",
              }}
            >
              <InputBase
                className="input-base"
                style={{
                  paddingTop: "6px",
                  opacity: "0.7",
                }}
                placeholder="Search Topics"
                startAdornment={
                  <SearchIcon fontSize="small" className="search-icon" />
                }
              />
            </Grid>
            <Grid item sm></Grid>
            <Grid item md={4} xs={3}>
              <IconButton>
                <Badge badgeContent={4} color="secondary">
                  <NotificationsNoneIcon />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={2} color="secondary">
                  <ChatBubbleOutlineIcon />
                </Badge>
              </IconButton>
              <IconButton>
                <ExitToAppIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
