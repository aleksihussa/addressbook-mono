import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { ContactProps } from "./types";

export const AddButton = ({
  contacts,
  setContacts,
}: {
  contacts: ContactProps[];
  setContacts: (contacts: ContactProps[]) => void;
}) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [name, setName] = React.useState<string>("");
  const [address, setAddress] = React.useState<string>("");
  const [phoneNum, setPhonenum] = React.useState<string>("");
  const [help_text, sethelp_text] = React.useState<string>("");

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const addClose = (): void => {
    if (name.length > 2) {
      //TODO clean this
      const copy = [...contacts];
      copy.push({ name, phoneNum, address });
      setContacts(copy);
      setOpen(false);
    } else {
      sethelp_text("Name can't be blank.");
      setTimeout(() => {
        sethelp_text("");
      }, 1500);
    }
  };

  const cancelClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    setName("");
    setAddress("");
    setPhonenum("");
  }, [open]);

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} color={"inherit"}>
        Add
      </Button>
      <Dialog open={open} onClose={cancelClose}>
        <DialogContent>
          <DialogContentText>
            Type contact information here to save it.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="Name"
            fullWidth
            variant="standard"
            helperText={help_text}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="address"
            label="Address"
            type="Name"
            fullWidth
            variant="standard"
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            margin="dense"
            id="phoneNum"
            label="Phone number"
            type="Name"
            fullWidth
            variant="standard"
            onChange={(e) => setPhonenum(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelClose}>Cancel</Button>
          <Button onClick={addClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
