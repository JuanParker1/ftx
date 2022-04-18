import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Icon, IconButton } from "@mui/material";

function Navbar(props) {
  const { toggleSidebar } = props;
  return (
    <AppBar position="fixed" className="bg-white">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box className="grow">
            <Typography variant="h6" component="div" className="text-black">
              LOGO
            </Typography>
          </Box>
          <div className="hidden md:flex items-center gap-3">
            <Button variant="text">
              Login
            </Button>
            <Button variant="contained">Register</Button>
            <IconButton className="text-black">
              <Icon>settings</Icon>
            </IconButton>
          </div>
          <IconButton
            onClick={toggleSidebar}
            className="flex md:hidden text-black"
          >
            <Icon>menu</Icon>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
