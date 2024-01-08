import { useState } from 'react';
import HeaderComp from '../../Components/Header/HeaderComp'
import { Grid, Typography,CardMedia, CardContent, Card, Box, Link, Container, Button, Alert, Snackbar } from '@mui/material'
import {  ArrowForward, Facebook, Instagram, Twitter } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import FirstImage from '../../assets/images/Education.png'
import SecondImage from '../../assets/images/Online learning-pana.png'
import Feature1 from '../../assets/images/Job hunt-amico.png'
import Feature2 from '../../assets/images/Job offers-amico.png'
import Feature3 from '../../assets/images/college class-bro.png'
import Feature4 from '../../assets/images/Dashboard-amico.png'


const HomePage = () => {
  const navigate = useNavigate()
  const [message,setMessage] = useState(false)
  const [elevation, setElevation] = useState({
    Card1:0,
    Card2:0,
    Card3:0,
    Card4:0
  })
  
  return (
    <>
      <HeaderComp />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={message}
        onClose={() => setMessage(false)}
        key={"top" + "center"}
      >
        <Alert severity="info" sx={{ width: "100%" }}>
          I am working upon that.I will Release Soon
        </Alert>
      </Snackbar>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              textTransform={"uppercase"}
              color={"text.primary"}
            >
              Lets Educate and Empower, make the next Generation with teaching
            </Typography>
            <Typography variant="body1" paragraph color={"text.primary"}>
              This platform offer you the best student management for teaching
              center and job opportunities for teachers
            </Typography>
            <Button
              variant="outlined"
              size="large"
              color="primary"
              sx={{ borderRadius: "22px", marginTop: 2 }}
              onClick={() => setMessage(true)}
            >
              Join as Teacher
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ borderRadius: "22px", marginLeft: 2, marginTop: 2 }}
              endIcon={<ArrowForward />}
              onClick={() => navigate("/institute/register")}
            >
              Join as School
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src={FirstImage}
              alt="Description"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>
      {/* Second Page */}

      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{ backgroundColor: "#F5F6FB" }}
      >
        <Grid item xs={12} md={6}>
          <img
            src={SecondImage}
            alt="Description"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            marginLeft={3}
            textTransform={"uppercase"}
            gutterBottom
            color={"text.primary"}
          >
            Lets learn together teach together make the future brighter
          </Typography>
        </Grid>
      </Grid>
      {/* Third Page */}
      <Grid item xs={12}>
        <Typography
          variant="h4"
          textAlign={"center"}
          margin={4}
          color={"text.primary"}
        >
          Our Features
        </Typography>
      </Grid>
      <Grid
        container
        spacing={3}
        marginTop={0}
        marginBottom={15}
        paddingLeft={5}
        paddingRight={5}
      >
        <Grid item xs={6} md={3}>
          <Card
            onMouseEnter={() =>
              setElevation((prevElevation) => ({ ...prevElevation, Card1: 5 }))
            }
            onMouseLeave={() =>
              setElevation((prevElevation) => ({ ...prevElevation, Card1: 0 }))
            }
            elevation={elevation.Card1}
          >
            <CardMedia
              component={"img"}
              style={{ objectFit: "contain" }}
              loading="lazy"
              image={Feature1}
            />
            <CardContent>
              <Typography variant="h6">
                You can find jobs and hire teachers easily{" "}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card
            onMouseEnter={() =>
              setElevation((prevElevation) => ({ ...prevElevation, Card2: 5 }))
            }
            onMouseLeave={() =>
              setElevation((prevElevation) => ({ ...prevElevation, Card2: 0 }))
            }
            elevation={elevation.Card2}
          >
            <CardMedia
              component={"img"}
              style={{ objectFit: "contain" }}
              image={Feature2}
              loading="lazy"
            />
            <CardContent>
              <Typography variant="h6">
                You can post jobs and find talented teachers{" "}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card
            sx={{ maxHeight: 600 }}
            onMouseEnter={() =>
              setElevation((prevElevation) => ({ ...prevElevation, Card3: 5 }))
            }
            onMouseLeave={() =>
              setElevation((prevElevation) => ({ ...prevElevation, Card3: 0 }))
            }
            elevation={elevation.Card3}
          >
            <CardMedia
              loading="lazy"
              component={"img"}
              title="class"
              image={Feature3}
              style={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography variant="h6">
                Online classroom where everyone joins together
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card
            onMouseEnter={() =>
              setElevation((prevElevation) => ({ ...prevElevation, Card4: 5 }))
            }
            onMouseLeave={() =>
              setElevation((prevElevation) => ({ ...prevElevation, Card4: 0 }))
            }
            elevation={elevation.Card4}
          >
            <CardMedia
              loading="lazy"
              component={"img"}
              title="dashboard"
              image={Feature4}
              style={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography variant="h6">
                Stunning dashboard where you can manage
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {/* Integrations */}
      {/* <Grid
        container
        spacing={3}
        sx={{ backgroundColor: "#F5F6FB", color: "text.primary" }}
        paddingX={10}
      >
        <Grid item xs={12}>
          <Typography variant="h4" textAlign={"center"} margin={1}>
            Our Website Powered with
          </Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card>
            <CardContent>
              <CardMedia
                component={"img"}
                loading="lazy"
                sx={{ objectFit: "contain" }}
                src="http://jwt.io/img/logo-asset.svg"
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card>
            <CardContent>
              <CardMedia
                component={"img"}
                loading="lazy"
                sx={{ objectFit: "contain" }}
                src="/src/assets/images/whatsapp.png"
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card>
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
          <Card>
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
                Hire them for your students
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}></Grid>
      </Grid> */}

      {/* Footer Page */}
      <Box
        component="footer"
        sx={{
          backgroundColor: "#A47DFD",
          p: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" color="white" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2" color="white">
                We are XYZ company, dedicated to providing the best service to
                our customers.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="white" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" color="white">
                123 Main Street, Anytown, USA
              </Typography>
              <Typography variant="body2" color="white">
                Email: info@example.com
              </Typography>
              <Typography variant="body2" color="white">
                Phone: +1 234 567 8901
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="white" gutterBottom>
                Follow Us
              </Typography>
              <Link href="https://www.facebook.com/" color={"inherit"}>
                <Facebook color="white" />
              </Link>
              <Link
                href="https://www.instagram.com/"
                color="inherit"
                sx={{ pl: 1, pr: 1 }}
              >
                <Instagram />
              </Link>
              <Link href="https://www.twitter.com/" color="inherit">
                <Twitter />
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography variant="body2" color="text.secondary" align="center">
              {"Copyright © "}
              <Link color="inherit" href="https://your-website.com/">
                Doodle
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default HomePage