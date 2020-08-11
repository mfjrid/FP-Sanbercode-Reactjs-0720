import React from "react";
import {
  Grid,
  FormGroup,
  FormControl,
  TextField,
  Button,
} from "@material-ui/core";

export default function DaftarBox() {
  return (
    <div>
      <Grid className="login-box">
        <h3 className="h3-padding">Silahkan Masuk</h3>
        <FormGroup>
          <FormControl>
            <TextField
              id="outlined-basic"
              className="form-fill"
              label="Username"
              variant="outlined"
              fullWidth={true}
              required
            />
            <TextField
              id="form-password"
              className="form-fill"
              label="Password"
              variant="outlined"
              fullWidth={true}
              type="password"
              required
            />
            <Button
              className="button btn-daftar"
              variant="contained"
              color="primary"
            >
              Masuk
            </Button>
          </FormControl>
          <p className="silahkan-masuk">
            Belum punya Akun? Silahkan <a href="/daftar">Daftar</a>
          </p>
        </FormGroup>
      </Grid>
    </div>
  );
}
