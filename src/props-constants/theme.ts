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
      fontFamily: "Epilogue",
    },
    h2: {
      fontSize: "22px",
      fontFamily: "Epilogue",
    },
    h6: {
      fontSize: "40px",
      fontWeight: "bold",
      lineHeight: "116%",
      fontFamily: "Epilogue",
    },
    body1: {
      fontSize: "18px",
      fontWeight: "regular",
      fontFamily: "Roboto",
    },
  },
})

export default theme
