import {createTheme} from "@mui/material/styles"

// Create an MUI theme instance.
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          textDecoration: "none",
        },
      },
    },
    MuiLink: {
      defaultProps: {underline: "none"},
      styleOverrides: {
        root: {
          cursor: "pointer",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "24px",
          color: "white",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#00B3B3",
    },
  },
  typography: {
    h1: {
      fontSize: "68px",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "22px",
    },
    h6: {
      fontSize: "40px",
      fontWeight: "bold",
    },
    body1: {
      fontSize: "18px",
      fontWeight: "regular",
    },
  },
})

export default theme
