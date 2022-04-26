import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Icon, IconButton } from "@mui/material";
import MenuButton from "./MenuButton";

function Navbar(props) {
  const { toggleSidebar, toggleLoginDialog } = props;

  return (
    <AppBar position="fixed" className="bg-white">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div className="flex flex-grow gap-3">
            <Typography variant="h6" component="div" className="text-black">
              LOGO
            </Typography>
            <div className="gap-3 hidden md:flex">
              {MENU_ITEMS.map((menu) => (
                <MenuButton
                  variant="text"
                  label={menu.label}
                  endIcon={
                    menu.hasIcon ? <Icon>keyboard_arrow_down</Icon> : null
                  }
                ></MenuButton>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <Button variant="text" onClick={toggleLoginDialog}>
              Login
            </Button>
            <Button variant="contained">Create a free account</Button>
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

const MENU_ITEMS = [
  {
    label: "Markets",
    hasIcon: true,
    style: "",
    items: [{ item: "All markets" }],
  },
  {
    label: "FTT",
    hasIcon: false,
    style: "",
    items: [{ item: "All markets" }],
  },
  {
    label: "More",
    hasIcon: true,
    style: "",
    items: [{ item: "All markets" }],
  },
  {
    label: "Help",
    hasIcon: true,
    style: "",
    items: [{ item: "All markets" }],
  },
];
