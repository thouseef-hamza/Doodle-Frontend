import AvatarComp from '../../Components/AvatarComp';
import SidebarComp  from '../../Components/Sidebar/SidebarComp'
import { Box, Typography,Grid,Card,CardContent,Container } from '@mui/material';
import SchoolIcon from "@mui/icons-material/School";
import useAxios from '../../Hooks/useAxios';
import { INS_BASE_URL } from '../../utils/api/api';
import { useEffect, useState } from 'react';
import {useSpring,animated} from '@react-spring/web'
import PeopleIcon from "@mui/icons-material/People";
const card = {
  "&:hover": {
    backgroundColor: "primary.dark", // Change to your desired color
    color: "white",
  },
}; 

function NumberAnimation({n}) {
  const {number} = useSpring({
    from:{number:0},
    number:n,
    delay:200,
    config:{mass:1,tension:20,friction:10},
  })
  return <animated.div>{number.to((n)=>n.toFixed(0))}</animated.div>
}

const InsDashboard = () => {
  let api=useAxios()
  console.log(api);
  const [data, setData] = useState("");
  console.log(data);
  const fetchData = async () => {
    try {
      const response = await api.get(INS_BASE_URL + "dashboard/");
      console.log(response);
      setData(response.data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(()=>{
    fetchData()
  },[])
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
                  <Typography variant="h4">
                    <NumberAnimation n={data.batch_count} />
                  </Typography>
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
                  <PeopleIcon fontSize="large" />
                  <Typography variant="h4">
                    <NumberAnimation n={data.student_count} />
                  </Typography>
                </Container>
              </CardContent>
            </Card>
          </Grid>
          {/* <Grid item xs={6} md={3}>
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
          </Grid> */}
        </Grid>
      </SidebarComp>
    </>
  );
}

export default InsDashboard