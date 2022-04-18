import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

export default function Sidebar(props) {
  const { isSidebar, toggleSidebar } = props;
  return (
    <Drawer anchor="right" open={isSidebar} onClose={() => toggleSidebar()}>
      <div className="w-[300px] pt-[10px] px-[10px] h-screen overflow-y-auto flex flex-col items-center gap-3">
        <div className="self-end">
          <IconButton onClick={toggleSidebar} className="text-black">
            <span>x</span>
          </IconButton>
        </div>
        <div className="flex gap-4">
          <Button>Login</Button>
          <Button>Register</Button>
        </div>
      </div>
    </Drawer>
  );
}
