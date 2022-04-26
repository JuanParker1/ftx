import React from "react";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import InputAdornment from "@mui/material/InputAdornment";

export default function AuthLoginDialog(props) {
  const { openLoginDialog, toggleLoginDialog } = props;
  const [isVisible, setVisible] = React.useState(false);
  const handleVisible = () => {
    setVisible((p) => !p);
  };

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={openLoginDialog}
      onClose={toggleLoginDialog}
    >
      <DialogTitle className="text-center">Logo</DialogTitle>
      <DialogContent>
        <form>
          <div className="flex flex-col gap-4 mt-3">
            <TextField
              fullWidth
              type="email"
              label="Email Address"
              variant="outlined"
            />
            <TextField
              fullWidth
              type={isVisible ? "text" : "password"}
              label="Password"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleVisible}>
                      <Icon>{isVisible ? "visibility" : "visibility_off"}</Icon>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button>Log in</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
