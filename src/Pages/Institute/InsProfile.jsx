import {  Box, Button, Card, CardActionArea, CardMedia, Grid, TextField, Typography } from '@mui/material';
import SidebarComp from '../../Components/Sidebar/SidebarComp';
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useNavigate } from 'react-router-dom';

const linkStyle = {
  textDecoration: "underline",
  
};
const InsProfile = () => {
  const navigate =useNavigate()
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
            Profile
          </Typography>
        </Box>
        <Grid container spacing={2} margin={0}>
          <Grid item xs={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{ maxHeight: "50vh" }}
                  image="/src/assets/images/Login.png"
                  alt="green iguana"
                />
              </CardActionArea>
            </Card>
            <Button
              variant="contained"
              fullWidth
              sx={{ marginTop: 2 }}
              onClick={() => navigate("/institute/account")}
            >
              Edit Profile <EditNoteIcon />
            </Button>
            <Button fullWidth variant="outlined" sx={{ marginTop: 1 }}>
              ADMIN 0001
            </Button>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Institute Name"
                  variant="outlined"
                  value={"Bridgeon Solutions"}
                  focused
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Email primary"
                  color="primary"
                  variant="outlined"
                  value={"thousithouseef731@gmail.com"}
                  focused
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  variant="outlined"
                  value={"+918848285720"}
                  focused
                />
              </Grid>
              <Grid item xs={9}>
                <TextField
                  label="Website Link"
                  variant="outlined"
                  value={"https://www.example.com"}
                  InputProps={{
                    style: linkStyle, // Apply the link-like styling
                    onClick: () => {
                      window.location.href = "https://www.example.com"; // Replace with your desired URL
                    },
                  }}
                  sx={{cursor:'pointer'}}
                  fullWidth
                  focused
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  label="Establishment Year"
                  variant="outlined"
                  value={"1997"}
                  focused
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  variant="outlined"
                  multiline
                  value={
                    "Bismillah Manzil\n Pekkadam , Periyoth,\n P.O Thrikaripur"
                  }
                  maxRows={5}
                  focused
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="City"
                  variant="outlined"
                  value={"Calicut"}
                  maxRows={5}
                  focused
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="State"
                  variant="outlined"
                  value={"State"}
                  maxRows={5}
                  focused
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="Postal Code"
                  variant="outlined"
                  value={"67310"}
                  maxRows={5}
                  focused
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="About"
                  variant="outlined"
                  multiline
                  value={
                    "Bismillah Manzil\n Pekkadam , Periyoth,\n P.O Thrikaripur"
                  }
                  maxRows={10}
                  focused
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </SidebarComp>
    </>
  );
}

export default InsProfile

