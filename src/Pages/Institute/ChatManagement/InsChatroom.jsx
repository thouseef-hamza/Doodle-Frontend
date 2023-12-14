import SidebarComp from '../../../Components/Sidebar/SidebarComp'
import {Avatar, Box, Button, Grid,  Paper,  TextField, Typography } from '@mui/material';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Divider from "@mui/material/Divider";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import Send from '@mui/icons-material/Send';
// import RightPanel from '../../../Components/Chat/RightPanel';
// import LeftPanel from '../../../Components/Chat/LeftPanel';

const MessageList = ({ messages }) => (
  <Box>
    {messages.map((message, index) => (
      <Paper key={index} style={{ padding: "8px", marginBottom: "8px" }}>
        {message}
      </Paper>
    ))}
  </Box>
);


const InsChatroom = () => {
   const [inputValue, setInputValue] = useState("");
   const [messages, setMessages] = useState(["thousi","thosui"]);

   const handleInputChange = (e) => {
     setInputValue(e.target.value);
   };
   
  return (
    <>
      <Grid
        container
        display={"flex"}
        sx={{ backgroundColor: "white" }}
        alignItems={"cente"}
      >
        <Grid item xs={3}>
          <TextField size="small" placeholder="Search" sx={{ margin: 1 }} />
          <Button variant="contained" sx={{ marginTop: 1.5 }}>
            <SearchIcon />
          </Button>
          <Divider />
          <Paper
            sx={{
              margin: 0,
              padding: 0,
              maxHeight: "91.7vh",
              overflow: "auto",
              borderRadius: 0,
              borderTop: 0,
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
              }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    margin
                    alt="Remy Sharp"
                    src="/src/assets/images/salman.png"
                  />
                </ListItemAvatar>
                <ListItemText primary="Salman" secondary="Jan 9, 2014" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    margin
                    alt="Remy Sharp"
                    src="/src/assets/images/salman.png"
                  />
                </ListItemAvatar>
                <ListItemText primary="Salman" secondary="July 20, 2014" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    margin
                    alt="Remy Sharp"
                    src="/src/assets/images/salman.png"
                  />
                </ListItemAvatar>
                <ListItemText primary="Salman" secondary="July 20, 2014" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    margin
                    alt="Remy Sharp"
                    src="/src/assets/images/salman.png"
                  />
                </ListItemAvatar>
                <ListItemText primary="Salman" secondary="Jan 9, 2014" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    margin
                    alt="Remy Sharp"
                    src="/src/assets/images/salman.png"
                  />
                </ListItemAvatar>
                <ListItemText primary="Salman" secondary="July 20, 2014" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    margin
                    alt="Remy Sharp"
                    src="/src/assets/images/salman.png"
                  />
                </ListItemAvatar>
                <ListItemText primary="Salman" secondary="July 20, 2014" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    margin
                    alt="Remy Sharp"
                    src="/src/assets/images/salman.png"
                  />
                </ListItemAvatar>
                <ListItemText primary="Salman" secondary="Jan 9, 2014" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    margin
                    alt="Remy Sharp"
                    src="/src/assets/images/salman.png"
                  />
                </ListItemAvatar>
                <ListItemText primary="Salman" secondary="July 20, 2014" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    margin
                    alt="Remy Sharp"
                    src="/src/assets/images/salman.png"
                  />
                </ListItemAvatar>
                <ListItemText primary="Salman" secondary="July 20, 2014" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={9} sx={{ maxHeight: "70vh" }}>
          <Paper
            sx={{
              display: "flex",
              alignItems: "center",
              padding: 1,
              borderRadius: 0,
            }}
          >
            <Avatar
              margin
              alt="Remy Sharp"
              src="/src/assets/images/salman.png"
            />
            <Typography paddingLeft={3}>Muhammed Salman</Typography>
            <Divider />
          </Paper>
          <Box display={"flex"} alignItems={"flex-end"} justifyContent={"flex-end"} height={"70vh"}>
              <Typography>hg</Typography>
              <Typography>hg</Typography>
            </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              height: "85vh",
              justifyContent: "flex-end",
            }}
          >
            <MessageList messages={messages} />
            <Box
              style={{
                marginTop: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextField
                fullWidth
                size="small"
                label="Type a message"
                variant="outlined"
                value={inputValue}
                onChange={handleInputChange}
                // onKeyDown={(e) => {
                //   if (e.key === "Enter") {
                //     handleSendMessage();
                //   }
                // }}
              />
              <Button
                variant="contained"
                color="primary"
                // onClick={handleSendMessage}/
                style={{ marginTop: "5px", marginLeft: 10 }}
              >
                <Send/>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default InsChatroom