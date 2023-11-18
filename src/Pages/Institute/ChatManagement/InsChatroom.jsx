import SidebarComp from '../../../Components/Sidebar/SidebarComp'
import {Avatar, Box, Button, Grid,  Paper,  TextField, Typography } from '@mui/material';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Divider from "@mui/material/Divider";
import { useState } from 'react';

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
      <SidebarComp>
        <Box>
          <Typography
            color={"#1F2D5A"}
            variant="h4"
            paddingLeft={1}
            paddingY={3}
          >
            Chatroom
          </Typography>
        </Box>
        <Grid
          container
          display={"flex"}
          sx={{ backgroundColor: "white" }}
          alignItems={"cente"}
        >
          <Grid item xs={4}>
            <Paper sx={{ borderRadius: "0px" }}>
              <TextField
                id="outlined-size-small"
                placeholder="Search"
                size="small"
                fullWidth
                sx={{ marginRight: 1, paddingX: 2, paddingY: 1 }}
              />
            </Paper>
            <Divider />
            <Paper
              sx={{
                margin: 0,
                padding: 0,
                maxHeight: "70vh",
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
          <Grid item xs={8} sx={{ maxHeight: "70vh" }}>
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
            {/* <Box display={"flex"} alignItems={"flex-end"} justifyContent={"flex-end"} height={"70vh"}>
              <Typography>hg</Typography>
              <Typography>hg</Typography>
            </Box> */}
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                height: "70vh",
                padding: "16px",
                justifyContent: "flex-end",
              }}
            >
              <MessageList messages={messages} />
              <Box style={{ marginTop: "auto" }}>
                <TextField
                  fullWidth
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
                  style={{ marginTop: "8px" }}
                >
                  Send
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </SidebarComp>
    </>
  );
}

export default InsChatroom