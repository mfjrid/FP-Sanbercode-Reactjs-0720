import React from "react";
import { Grid, Container } from "@material-ui/core";
import "../Theme/css/style.css";
import MasukBox from "../Components/MasukBox";

export default function Daftar() {
  return (
    <div className="login-page">
      <Container fixed style={{ margin: "50px" }}>
        <Grid container spacing={3}>
          <Grid item md={7} className="judul">
            <h1>FilMy.</h1>
            <p>
              Filmy membantu kamu memilih film terbaik untuk ditonton dengan
              menampilkan review-review film dari orang lain. Kamu juga bisa
              membuat review film yang telah kamu tonton.
            </p>
          </Grid>
          <Grid item md={1}></Grid>
          <Grid item md={4}>
            <MasukBox />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
