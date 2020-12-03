import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
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
