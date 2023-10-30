import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import useResponsive from "../../Hooks/useResponsive";
import ExploreIcon from "@mui/icons-material/Explore";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import { useNavigate } from "react-router-dom";


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default  function  SidebarComp({children}) {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false);
  const isMobile = useResponsive("sm")
  const navigate = useNavigate()

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}></AppBar>
      <Drawer variant="permanent" open={open}>
        <Box onClick={open ? handleDrawerClose : handleDrawerOpen}>
          {open ? (
            <Typography
              padding={5}
              sx={{ fontSize: isMobile ? "50px" : "35px" }}
              margin={0}
            >
              <span style={{ color: "#8338EC", fontFamily: "Montserrat" }}>
                :D
              </span>
              <span style={{ color: "#FFBE0B", fontFamily: "Montserrat" }}>
                o
              </span>
              <span style={{ color: "#FB5607", fontFamily: "Montserrat" }}>
                o
              </span>
              <span style={{ color: "#8338EC", fontFamily: "Montserrat" }}>
                d
              </span>
              <span style={{ color: "#FF006E", fontFamily: "Montserrat" }}>
                l
              </span>
              <span style={{ color: "#13C2C2", fontFamily: "Montserrat" }}>
                e
              </span>
            </Typography>
          ) : (
            <Typography
              sx={{ fontSize: isMobile ? "50px" : "35px" }}
              paddingX={1.5}
              paddingY={5}
            >
              <span style={{ color: "#8338EC", fontFamily: "Montserrat" }}>
                :D
              </span>
            </Typography>
          )}
        </Box>
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate("/institute/dashboard");
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                ":hover": {
                  backgroundColor: theme.palette.primary.dark,
                  color: "white",
                },
              }}
            >
              <ExploreIcon
                sx={{
                  ":hover": {
                    color: "white",
                  },
                  mr: open ? 3 : "auto",
                }}
              />
              <ListItemText
                primary={"Dashboard"}
                color="#1F2D5A"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => navigate("/institute/batches")}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                ":hover": {
                  backgroundColor: theme.palette.primary.dark,
                  color: "white",
                },
              }}
            >
              <SchoolOutlinedIcon
                sx={{
                  ":hover": {
                    color: "white",
                  },
                  mr: open ? 3 : "auto",
                }}
              />
              <ListItemText
                primary={"Batches"}
                color="#1F2D5A"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => navigate("/institute/students")}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                ":hover": {
                  backgroundColor: theme.palette.primary.dark,
                  color: "white",
                },
              }}
            >
              <PeopleAltOutlinedIcon
                sx={{
                  ":hover": {
                    color: "white",
                  },
                  mr: open ? 3 : "auto",
                }}
              />
              <ListItemText
                primary={"Students"}
                color="#1F2D5A"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => navigate("/institute/profile")}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                ":hover": {
                  backgroundColor: theme.palette.primary.dark,
                  color: "white",
                },
              }}
            >
              <ContactEmergencyOutlinedIcon
                sx={{
                  ":hover": {
                    color: "white",
                  },
                  mr: open ? 3 : "auto",
                }}
              />
              <ListItemText
                primary={"Profile"}
                color="#1F2D5A"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => navigate("/institute/account")}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                ":hover": {
                  backgroundColor: theme.palette.primary.dark,
                  color: "white",
                },
              }}
            >
              <AccountCircleOutlinedIcon
                sx={{
                  ":hover": {
                    color: "white",
                  },
                  mr: open ? 3 : "auto",
                }}
              />
              <ListItemText
                primary={"Account"}
                color="#1F2D5A"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                ":hover": {
                  backgroundColor: theme.palette.primary.dark,
                  color: "white",
                },
              }}
            >
              <InboxIcon
                sx={{
                  ":hover": {
                    color: "white",
                  },
                  mr: open ? 3 : "auto",
                }}
              />
              <ListItemText
                primary={"LogOut"}
                color="#1F2D5A"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}
