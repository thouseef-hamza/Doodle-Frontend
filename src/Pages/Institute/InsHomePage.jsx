import { useContext, useEffect, useReducer, useState } from 'react';
import { AppBar, Button, Card, CardContent, Container, Drawer, Grid, IconButton, List, ListItem, Toolbar, Typography, useMediaQuery } from '@mui/material';
import HomeLogoComponent from '../../Components/HomeLogoComponent';
import MenuIcon from "@mui/icons-material/Menu";
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LogoutIcon from "@mui/icons-material/Logout";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
const card = {
  "&:hover": {
    backgroundColor: "primary.dark", // Change to your desired color
    color: "white",
  },
};

const InsHomePage = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const [elevation, setElevation] = useState(0);
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  const isMobile = useReducer("sm")

  let { user, logOutUser } = useContext(AuthContext);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setElevation(5);
      } else {
        setElevation(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <AppBar
        position="sticky"
        style={{ background: "white" }}
        elevation={elevation}
      >
        <Toolbar>
          {isMatch ? (
            <>
              <HomeLogoComponent />
              <Drawer
                open={openDrawer}
                anchor={"right"}
                onClose={() => setOpenDrawer(false)}
              >
                <List>
                  <ListItem>
                    <Button
                      style={{
                        width: "100%",
                        color: theme.palette.primary.main,
                        borderColor: theme.palette.primary.main,
                        marginLeft: "auto",
                        marginRight: "10px",
                      }}
                      variant="outlined"
                    >
                      Post a job
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button
                      style={{
                        color: "#ffff",
                        backgroundColor: theme.palette.primary.main,
                      }}
                      color={"primary"}
                      variant="elevated"
                    >
                      Dashboard
                    </Button>
                  </ListItem>
                </List>
              </Drawer>
              <IconButton
                sx={{ color: "black", marginLeft: "auto" }}
                onClick={() => setOpenDrawer(!openDrawer)}
              >
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            <>
              <HomeLogoComponent />
              <Button
                style={{
                  color: theme.palette.primary.main,
                  marginLeft: 50,
                }}
                // onClick={() => navigate("/login")}
              >
                View Teachers
              </Button>
              <Button
                style={{
                  color: theme.palette.primary.main,
                }}
                onClick={() => navigate("/login")}
                variant="elevated"
              >
                Post A Job
              </Button>
              <Button
                style={{ color: theme.palette.primary.main }}
                onClick={() => navigate("/institute/dashboard")}
                variant="elevated"
              >
                Dashboard
              </Button>
              <Button
                style={{
                  marginLeft: "auto",
                  marginRight: "10px",
                }}
                onClick={() => navigate("/logout")}
                variant="contained"
                endIcon={<LogoutIcon />}
              >
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" textTransform={"uppercase"}>
              Hey,
              <br />
              What are you waiting for <br />
              Find your talented Teachers
            </Typography>
            <Button
              variant="outlined"
              size="large"
              color="primary"
              sx={{ borderRadius: "22px", marginTop: 2 }}
            >
              POST JOBS
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ borderRadius: "22px", marginLeft: 3, marginTop: 2 }}
              endIcon={<ArrowForwardIcon />}
            >
              Hire Teachers
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="/src/assets/images/Ins-Hiring.png"
              alt="Description"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>
      <Grid
        container
        spacing={3}
        sx={{ backgroundColor: "#F5F6FB", color: "text.primary" }}
        paddingX={10}
      >
        <Grid item xs={12}>
          <Typography variant="h4" textAlign={"center"} margin={1}>
            Teachers Hiring Process
          </Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card sx={card}>
            <CardContent>
              <Container
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: 1,
                }}
              >
                <BusinessCenterIcon fontSize="large" />
                <Typography marginTop={1} marginLeft={2}>
                  Post Jobs
                </Typography>
                <br />
              </Container>
              <Typography
                fontSize={15}
                marginTop={1}
                marginLeft={2}
                textTransform={"capitalize"}
              >
                Post jobs Based on your needs
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card sx={card}>
            <CardContent>
              <Container
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: 1,
                }}
              >
                <BusinessCenterIcon fontSize="large" />
                <Typography marginTop={1} marginLeft={2}>
                  Find Teachers
                </Typography>
                <br />
              </Container>
              <Typography
                fontSize={15}
                marginTop={1}
                marginLeft={2}
                textTransform={"capitalize"}
              >
                Find Teachers that's for your students
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card sx={card}>
            <CardContent>
              <Container
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: 1,
                }}
              >
                <BusinessCenterIcon fontSize="large" />
                <Typography marginTop={1} marginLeft={2}>
                  Connect
                </Typography>
                <br />
              </Container>
              <Typography
                fontSize={15}
                marginTop={1}
                marginLeft={2}
                textTransform={"capitalize"}
              >
                Connect with them,chat with them
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card sx={card}>
            <CardContent>
              <Container
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: 1,
                }}
              >
                <BusinessCenterIcon fontSize="large" />
                <Typography marginTop={1} marginLeft={2}>
                  Hire Them !
                </Typography>
                <br />
              </Container>
              <Typography
                fontSize={15}
                marginTop={1}
                marginLeft={2}
                textTransform={"capitalize"}
              >
                Hire them  for your students
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}></Grid>
      </Grid>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <img
              src="/src/assets/images/Search-teachers.png"
              alt="Description"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Search teachers efficiently and Easily
            </Typography>
            <Typography variant="body1" paragraph>
              Join Doodle today and experience the future of
              teacher recruitment. Connect with passionate educators, streamline
              your hiring process, and elevate the standard of education at your
              institution.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default InsHomePage