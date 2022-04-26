import { createTheme, alpha } from "@mui/material/styles";

const defaultTheme = createTheme({
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: [
      "'Open Sans'",
      "sans-serif",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "'Fira Sans'",
      "'Droid Sans'",
      "'Helvetica Neue'",
    ].join(","),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const lightTheme = customizeComponents({
  ...defaultTheme,
  palette: {
    background: { default: "#F7F8FA", paper: "#FFFFFF" },
    primary: {
      main: "#354f3b",
      light: "#6ABE45",
      dark: "#364D36",
      shade1: "#DAE6DA",
      shade2: "#EDF2ED",
      shade3: "#DAF2DA",
      shade4: "#DAF2DA",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#006600",
      light: "#6ABE45",
      dark: "#364D36",
      shade1: "#DAE6DA",
      shade2: "#EDF2ED",
      shade3: "#DAF2DA",
      shade4: "#DAF2DA",
      contrastText: "#ffffff",
    },
    success: {
      ...defaultTheme.palette.success,
      contrastText: "#ffffff",
    },
    warning: {
      ...defaultTheme.palette.warning,
      main: "#FFB82E",
      contrastText: "#ffffff",
    },
    info: {
      ...defaultTheme.palette.info,
      contrastText: "#ffffff",
    },
    error: {
      ...defaultTheme.palette.error,
      contrastText: "#ffffff",
    },
    text: {
      ...defaultTheme.palette.text,
      primary: "#364D36",
      muted: "#708070",
      light: "#FAFCFA",
      dark: "#364D36",
      disabled: "#C0DBC0",
    },
    // divider: "#e8e8e8",
  },
});

export default lightTheme;

/**
 *
 * @param {import("@mui/material").Theme} theme
 */
function customizeComponents(theme) {
  return createTheme({
    ...theme,
    components: {
      MuiButton: {
        defaultProps: {
          color: "primary",
          variant: "contained",
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: "outlined",
          // InputLabelProps: { shrink: true },
        },
        styleOverrides: {
          root: {
            "&.MuiFormControl-marginNormal": {
              marginTop: theme.spacing(),
              marginBottom: theme.spacing(),
            },

            "& .MuiFilledInput-root": {
              borderRadius: '8px',
            },

            // '& .MuiFormLabel-root': {
            //     position: 'static',
            //     transform: 'none',
            //     // transform: "translateY(-24px)",
            //     marginBottom: 4,
            //     '&:not(.Mui-focused):not(.Mui-error):not(.Mui-disabled)': {
            //         color: 'inherit',
            //     },
            // },

            // "& .MuiOutlinedInput-notchedOutline": {
            //   "& legend": { maxWidth: 0 },
            // },

            "& .MuiInputBase-root:not(.Mui-disabled)": {
              backgroundColor: theme.palette.primary.shade2,
              "&.Mui-error": {
                backgroundColor: alpha(theme.palette.error.main, 0.2),
              },
              // "& input.MuiInputBase-input.MuiOutlinedInput-input::placeholder": {
              //   opacity: 1,
              // },
              // "& .MuiInputBase-input": {
              //   zIndex: 2,
              // },
            },
          },
        },
      },
      MuiDialogTitle: {
        styleOverrides: {
          root: {
            color: theme.palette.primary.main,
          },
        },
      },
      MuiBackdrop: {
        styleOverrides: {
          root: {
            // backgroundColor: 'rgba(54, 77, 54, 0.25)',
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            borderBottom: "1px solid #e8e8e8",
            // marginBottom: 16,
          },
          indicator: {
            backgroundColor: theme.palette.secondary.main,
            height: 5,
            borderRadius: 1000,
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
    },
  });
}
