import React from "react";
import AppProtected from "../common/AppProtected";
import { StyledEngineProvider } from "@mui/material";
import AppThemeProvider from "../components/ThemeProvider";

import "../style/index.css";

function App() {
  return (
    <main>
      <title>Home Page</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <StyledEngineProvider injectFirst>
        <AppThemeProvider>
          <AppProtected />
        </AppThemeProvider>
      </StyledEngineProvider>
    </main>
  );
}

export default App;
