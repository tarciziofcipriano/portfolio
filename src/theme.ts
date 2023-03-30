import { createTheme, PaletteMode } from "@mui/material";

export const theme = (mode: PaletteMode | undefined) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#5E72E4",
      },
      secondary: {
        main: "#FFFF",
      },
    },
    components: {
      MuiTextField: {
        defaultProps: {
          color: "secondary",
        },
      },
      MuiAppBar: {
        defaultProps: {
          color: mode === "light" ? "inherit" : "default",
          sx: {
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
          },
        },
      },
      MuiPaper: {
        defaultProps: {
          elevation: 3,
          sx: {
            borderRadius: 3,
          },
        },
      },
    },
  });
