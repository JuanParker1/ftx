import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SubNavbar from "../components/SubNavbar";
import { StyledEngineProvider } from "@mui/material";
import AppThemeProvider from "../components/ThemeProvider";

import "../style/index.css";

function Layout(props) {
  const { children } = props;
  const [isSidebar, setIsSidebar] = useState(false);

  const toggleSidebarNavigation = () => {
    setIsSidebar((prev) => !prev);
  };

  return (
    <div className="h-full">
      <title>Home Page</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <StyledEngineProvider injectFirst>
        <AppThemeProvider>
          <Navbar toggleSidebar={toggleSidebarNavigation} />
          <SubNavbar />
          <Sidebar
            isSidebar={isSidebar}
            toggleSidebar={toggleSidebarNavigation}
          />
          <main className="mt-[100px] overflow-hidden min-w-0">{children}</main>
        </AppThemeProvider>
      </StyledEngineProvider>
    </div>
  );
}

export default Layout;
