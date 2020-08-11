import React from "react";
import "../Theme/css/style.css";
import { Grid } from "@material-ui/core";
import Sidebar from "../Components/Sidebar";
import Main from "../Components/Main";

export default function Home() {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item md={3} className="sidebar">
          <Sidebar />
        </Grid>
        <Grid item md={9} className="main">
          <Main />
        </Grid>
      </Grid>
    </div>
  );
}
