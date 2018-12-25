import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#210E4A"
    },
    secondary: {
      main: "#4F90FF"
    },
    custom: {
      accent: "#11BEB3",
      facebookBlue: "#3b5998"
    }
  },
  overrides: {
    MuiButton: {
      contained: {
        borderRadius: 50
      }
    }
  }
});
