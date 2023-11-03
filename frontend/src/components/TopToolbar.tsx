import React from "react";
import { createUseStyles } from "react-jss";
import MenuIcon from "@mui/icons-material/Menu";

import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import HomeIcon from "@mui/icons-material/Home";
import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
const useTopbarStyles = createUseStyles({
  topbarContainer: {
    top: 0,
    position: "fixed",
    height: "5rem",
    width: "100%",
    backgroundColor: "#333",
    color: "#f2f2f2",
    textAlign: "center",
    padding: "16px 16px",
    textDecoration: "none",
    display: "inline-grid",
    alignItems: "center",
  },

  menuIconContainer: {
    backgroundColor: "#333",
    color: "#f2f2f2",
    height: "auto",
    width: "auto",
    position: "inherit",
    margin: "",
    float: "left",
  },
});
interface TopToolbarProps {
  isOpen?: boolean;
}

export const TopToolbar: React.FC<TopToolbarProps> = ({ isOpen = false }) => {
  const styles = useTopbarStyles();
  const [showMenu, setShowMenu] = React.useState<boolean>(isOpen);

  const navigate = useNavigate();

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.topbarContainer} data-testid="top_bar">
      <h1>Address book</h1>
      <Button
        className={styles.menuIconContainer}
        onClick={() => handleMenuClick()}
      >
        <MenuIcon />
      </Button>
      {showMenu && (
        <Drawer
          container={document.body}
          variant="temporary"
          open={showMenu}
          onClose={() => setShowMenu(false)}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <div>
            <Toolbar />
            <ListItemButton
              sx={{
                display: "flex",
                alignContent: "center",
                transition: "height 0.4s ease-in-out 0.5s", // fix
              }}
              onClick={() => {
                setShowMenu(false);
              }}
            >
              <ListItemIcon>
                <CloseIcon />
              </ListItemIcon>

              <ListItemText primary={"Close"} />
            </ListItemButton>
            <Divider />
            <List>
              {[
                { text: "Home", handler: () => navigate("/") },
                { text: "Contacts on map", handler: () => navigate("/map") },
                { text: "huri buri todo", handler: () => console.log("todo") },
              ].map((item, index) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton onClick={item.handler}>
                    <ListItemIcon>
                      {index === 1 ? <GpsFixedIcon /> : null}
                      {index === 0 ? <HomeIcon /> : null}
                      {index === 2 ? <AddIcon /> : null}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {[
                { text: "Settings", handler: () => navigate("/settings") },
                { text: "Log out", handler: () => navigate("/login") },
              ].map((item, index) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton onClick={item.handler}>
                    <ListItemIcon>
                      {index === 0 ? <SettingsIcon /> : <LogoutIcon />}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      )}
    </div>
  );
};
