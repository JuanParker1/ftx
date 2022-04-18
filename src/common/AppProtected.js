import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SubNavbar from "../components/SubNavbar";

function AppProtected(props) {
  const [isSidebar, setIsSidebar] = useState(false);

  const toggleSidebarNavigation = () => {
    setIsSidebar((prev) => !prev);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebarNavigation} />
      <SubNavbar />
      <Sidebar isSidebar={isSidebar} toggleSidebar={toggleSidebarNavigation} />
    </>
  );
}

export default AppProtected;
