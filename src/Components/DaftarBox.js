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
        <h3>Buat Akun Kamu</h3>
        <p className="sub-h3">Silahkan isi formulir dibawah.</p>
        <FormGroup>
          <FormControl>
            <TextField
              size="medium"
              id="nama-lengkap"
              className="form-fill"
              label="Nama Lengkap"
              variant="outlined"
              fullWidth={true}
            />
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
              Daftar
            </Button>
          </FormControl>
          <p className="silahkan-masuk">
            Sudah punya Akun? Silahkan <a href="/masuk">Masuk</a>
          </p>
        </FormGroup>
      </Grid>
    </div>
  );
}
