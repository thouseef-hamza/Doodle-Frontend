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
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import AddTaskIcon from "@mui/icons-material/AddTask";
import LogoutIcon from "@mui/icons-material/Logout";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";

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

// eslint-disable-next-line react/display-name
const SidebarComp =  React.memo(({children})=> {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false);
  const isMobile = useResponsive("sm")
  const navigate = useNavigate()
  const location = useLocation()
  const {logOutUser } = React.useContext(AuthContext)
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <Box>
          {open ? (
            <Typography
              onMouseLeave={() => setOpen(false)}
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
              onMouseEnter={() => setOpen(true)}
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
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              onClick={() => {
                navigate("/institute/dashboard");
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                backgroundColor:
                  location.pathname === "/institute/dashboard"
                    ? theme.palette.primary.dark
                    : "initial",
                color:
                  location.pathname === "/institute/dashboard"
                    ? "white"
                    : "text.primary",
                "&:hover": {
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
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              onClick={() => navigate("/institute/batches")}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                backgroundColor:
                  location.pathname === "/institute/batches"
                    ? theme.palette.primary.dark
                    : "initial",
                color:
                  location.pathname === "/institute/batches"
                    ? "white"
                    : "text.primary",
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
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              onClick={() => navigate("/institute/students")}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                backgroundColor:
                  location.pathname === "/institute/students"
                    ? theme.palette.primary.dark
                    : "initial",
                color:
                  location.pathname === "/institute/students"
                    ? "white"
                    : "text.primary",
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
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              onClick={() => navigate("/institute/profile")}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                backgroundColor:
                  location.pathname === "/institute/profile"
                    ? theme.palette.primary.dark
                    : "initial",
                color:
                  location.pathname === "/institute/profile"
                    ? "white"
                    : "text.primary",
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
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              onClick={() => navigate("/institute/task")}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                backgroundColor:
                  location.pathname === "/institute/task"
                    ? theme.palette.primary.dark
                    : "initial",
                color:
                  location.pathname === "/institute/task"
                    ? "white"
                    : "text.primary",
                ":hover": {
                  backgroundColor: theme.palette.primary.dark,
                  color: "white",
                },
              }}
            >
              <AddTaskIcon
                sx={{
                  ":hover": {
                    color: "white",
                  },
                  mr: open ? 3 : "auto",
                }}
              />
              <ListItemText
                primary={"Task"}
                color="#1F2D5A"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              onClick={() => navigate("/institute/classroom")}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                backgroundColor:
                  location.pathname === "/institute/classroom"
                    ? theme.palette.primary.dark
                    : "initial",
                color:
                  location.pathname === "/institute/classroom"
                    ? "white"
                    : "text.primary",
                ":hover": {
                  backgroundColor: theme.palette.primary.dark,
                  color: "white",
                },
              }}
            >
              <OndemandVideoIcon
                sx={{
                  ":hover": {
                    color: "white",
                  },
                  mr: open ? 3 : "auto",
                }}
              />
              <ListItemText
                primary={"Classroom"}
                color="#1F2D5A"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              onClick={() => navigate("/institute/chatroom")}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                backgroundColor:
                  location.pathname === "/institute/chatroom"
                    ? theme.palette.primary.dark
                    : "initial",
                color:
                  location.pathname === "/institute/chatroom"
                    ? "white"
                    : "text.primary",
                ":hover": {
                  backgroundColor: theme.palette.primary.dark,
                  color: "white",
                },
              }}
            >
              <QuestionAnswerOutlinedIcon
                sx={{
                  ":hover": {
                    color: "white",
                  },
                  mr: open ? 3 : "auto",
                }}
              />
              <ListItemText
                primary={"Chatroom"}
                color="#1F2D5A"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              onClick={() => navigate("/institute/account")}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                backgroundColor:
                  location.pathname === "/institute/account"
                    ? theme.palette.primary.dark
                    : "initial",
                color:
                  location.pathname === "/institute/account"
                    ? "white"
                    : "text.primary",
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
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => logOutUser()}
          >
            <ListItemButton
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
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
              <LogoutIcon
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
});
export default SidebarComp;