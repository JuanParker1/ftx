import React from "react";
import AppProtected from "../common/AppProtected";
import AppThemeProvider from "../components/ThemeProvider";


function App() {
  return (
    <main>
      <title>Home Page</title>
      <AppThemeProvider>
        <AppProtected />
      </AppThemeProvider>
    </main>
  );
};

export default App;
