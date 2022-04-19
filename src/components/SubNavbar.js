import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";

function SubNavbar(props) {
  const { toggleSidebar } = props;
  return (
    <AppBar position="fixed" className="bg-black top-[56px] h-">
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="dense">
          <div className="flex gap-1">
            <IconButton onClick={toggleSidebar} className="text-white">
              <Icon>menu</Icon>
            </IconButton>
            <div className="flex gap-3">
              {MENU_ITEMS.map((menu) => (
                <Button variant="text" className="text-white">
                  {menu.label}
                </Button>
              ))}
            </div>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default SubNavbar;

const MENU_ITEMS = [
  {
    label: "Home",
  },
  {
    label: "About",
  },
  {
    label: "Contact",
  },
  {
    label: "FAQs",
  },
];
