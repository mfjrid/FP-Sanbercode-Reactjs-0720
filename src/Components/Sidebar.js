import React from "react";
import { Button } from "@material-ui/core";

export default function Sidebar() {
  return (
    <div id="sidebar">
      <h1 style={{ marginBottom: "80px" }}>FilMy.</h1>
      <Button
        className="button btn-dashboard"
        variant="contained"
        fullWidth={true}
      >
        Dashboard
      </Button>
      <Button
        className="button btn-dashboard"
        variant="contained"
        fullWidth={true}
      >
        Tambah Movie
      </Button>
      <Button
        className="button btn-dashboard"
        variant="contained"
        fullWidth={true}
      >
        Edit Movie
      </Button>
      <Button
        className="button btn-dashboard"
        variant="contained"
        fullWidth={true}
      >
        Ubah Password
      </Button>
    </div>
  );
}
