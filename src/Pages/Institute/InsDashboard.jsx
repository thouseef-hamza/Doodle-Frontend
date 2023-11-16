import AvatarComp from '../../Components/AvatarComp';
import SidebarComp  from '../../Components/Sidebar/SidebarComp'
import { Box, Typography,Grid,Card,CardContent,Container } from '@mui/material';
import SchoolIcon from "@mui/icons-material/School";

const card = {
  "&:hover": {
    backgroundColor: "primary.dark", // Change to your desired color
    color: "white",
  },
}; 

const InsDashboard = () => {
  return (
    <>
      <SidebarComp>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <Typography color="#1F2D5A" variant="h4" paddingLeft={1} paddingY={3}>
            Dashboard
          </Typography>
          <AvatarComp />
        </Box>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Grid item xs={6} md={3}>
            <Card sx={card}>
              <CardContent>
                <Typography>Total Batch</Typography>
                <Container
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 2,
                  }}
                >
                  <SchoolIcon fontSize="large" />
                  <Typography variant="h4">141</Typography>
                </Container>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={3}>
            <Card sx={card}>
              <CardContent>
                <Typography>Total Student</Typography>
                <Container
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 2,
                  }}
                >
                  <SchoolIcon fontSize="large" />
                  <Typography variant="h4">141</Typography>
                </Container>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={3}>
            <Card sx={card}>
              <CardContent>
                <Typography> Revenue this month</Typography>
                <Container
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 2,
                  }}
                >
                  <SchoolIcon fontSize="large" />
                  <Typography variant="h4">141</Typography>
                </Container>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={3}>
            <Card sx={card}>
              <CardContent>
                <Typography>Total Revenue</Typography>
                <Container
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 2,
                  }}
                >
                  <SchoolIcon fontSize="large" />
                  <Typography variant="h4">141</Typography>
                </Container>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </SidebarComp>
    </>
  );
}

export default InsDashboard