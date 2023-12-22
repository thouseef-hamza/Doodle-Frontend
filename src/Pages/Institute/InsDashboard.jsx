import AvatarComp from '../../Components/AvatarComp';
import SidebarComp  from '../../Components/Sidebar/SidebarComp'
import { Box, Typography,Grid,Card,CardContent,Container, Paper, CardMedia } from '@mui/material';
import SchoolIcon from "@mui/icons-material/School";
import useAxios from '../../Hooks/useAxios';
import { INS_BASE_URL } from '../../utils/api/api';
import { useEffect, useState } from 'react';
import {useSpring,animated} from '@react-spring/web'
import PeopleIcon from "@mui/icons-material/People";
import { Doughnut, Line, } from "react-chartjs-2";
import CallMadeIcon from "@mui/icons-material/CallMade";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import PaymentsIcon from "@mui/icons-material/Payments";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
} from "chart.js";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title
);
const card = {
  "&:hover": {
    backgroundColor: "primary.dark", 
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
    const datas = {
      labels: ["Collections", "Remaining"],
      datasets: [
        {
          data: [data.this_month_revenue, data.remaining_amount ? data.remaining_amoun : 10  ],
          backgroundColor: ["#7E56D8", "#A47DFD"],
          hoverBackgroundColor: ["#7E56D8", "#A47DFD"],
        },
      ],
    };
    const line_data = {
      labels: ["Jan", "Feb", "Mar", "April", "May", "Jun", "July"],
      datasets: [
        {
          label: "My First Dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: "#A47DFD",
          tension: 0.1,
        },
      ],
    };

const options = {
  responsive: false,
  maintainAspectRatio: true, 
  innerWidth: 50, 
  height: 50, 
  align:"center",
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
                  <AutorenewIcon fontSize="large" />
                  <Typography variant="h4">
                    {data.this_month_revenue === null
                      ? 0
                      : data.this_month_revenue}
                  </Typography>
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
                  <PaymentsIcon fontSize="large" />
                  <Typography variant="h4">
                    {data.total_revenue === null ? 0 : data.this_month_revenue}
                  </Typography>
                </Container>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={2} marginTop={2}>
          <Grid item sm={8}>
            <Paper>
              <Line data={line_data}></Line>
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Card sx={{ maxWidth: "100%" }}>
              <Typography variant="h6" padding={1}>
                Estimated fee this month
              </Typography>
              <Typography variant="h5" sx={{ color: "#FB5607" }} display={"flex"} justifyContent={"center"}>
                {data.remaining_amount === null ? 0 : data.remaining_amount} Rs
              </Typography>
              <CardMedia sx={{ marginLeft: 5 }}>
                <Doughnut data={datas} options={options} />
              </CardMedia>
              <CardContent sx={{ width: "100%" }}>
                <Box display={"flex"} justifyContent={"space-around"}>
                  <Box display={"flex"} flexDirection={"column"}>
                    <Typography variant="h5" padding={0}>
                      {data.total_revenue === null
                        ? 0
                        : data.this_month_revenue}
                    </Typography>
                    <Typography sx={{ color: "#39FF07" }} variant="h6">
                      Collections
                      <CallMadeIcon />
                    </Typography>
                  </Box>
                  <Box display={"flex"} flexDirection={"column"}>
                    <Typography variant="h5" padding={0}>
                      {data.remaining_amount === null
                        ? 0
                        : data.remaining_amount}
                    </Typography>
                    <Typography sx={{ color: "#FB5607" }} variant="h6">
                      Remaining &nbsp;
                      <SouthEastIcon />
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </SidebarComp>
    </>
  );
}

export default InsDashboard