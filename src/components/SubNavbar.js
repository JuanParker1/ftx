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
    <AppBar position="fixed" className="bg-black top-[56px]">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            onClick={toggleSidebar}
            className="flex md:hidden text-white"
          >
            <Icon>menu</Icon>
          </IconButton>
          <div className="hidden md:flex items-center gap-3">
            <Button variant="text" className="text-white">
              Login
            </Button>
            <Button variant="contained">Register</Button>
            <Icon>settings</Icon>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default SubNavbar;
