import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#575fc4",
      main: "#353c8c",
      dark: "#1f245a",
      contrastText: "#fff",
    },
    secondary: {
      light: "#f9cf5c",
      main: "#dead27",
      dark: "#a27804",
      contrastText: "#000",
    },
  },
});

export default theme;
