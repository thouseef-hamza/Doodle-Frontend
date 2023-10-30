import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#F5F6FB",
      main: "#7E56D8",
      dark: "#A47DFD",
      contrastText: "#fff",
    },
    secondary: {
      light: "#7E899B",
      main: "#1F2D5A",
      dark: "#1F2D5A",
      contrastText: "#000",
    },
    text: {
      primary: "#1F2D5A",
      secondary: "#7E899B",
    },
  },
});
