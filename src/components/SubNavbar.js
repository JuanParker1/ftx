import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Icon, IconButton } from "@mui/material";

function SubNavbar(props) {
  const { toggleSidebar } = props;
  return (
    <AppBar position="fixed" className="bg-black top-[56px] h-">
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="dense">
          <IconButton onClick={toggleSidebar} className="text-white">
            <Icon>menu</Icon>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default SubNavbar;
