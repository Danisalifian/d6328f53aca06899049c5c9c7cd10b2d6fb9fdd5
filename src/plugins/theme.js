import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#fff",
      main: "#fff",
      dark: "#fff",
    },
    secondary: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: ['"Open Sans"'].join(","),
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": ['"Open Sans"'],
      },
    },
  },
});

export default theme;
