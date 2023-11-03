import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import SidebarComp from "../../Components/Sidebar/SidebarComp"
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useAxios from "../../Hooks/useAxios";
import axios from "axios";
import { INS_BASE_URL } from "../../utils/api/api";
import { useEffect, useState } from "react";
import SpinnerComp from "../../Components/SpinnerComp";

const InsBatchesDetail = () => {
  const navigate = useNavigate()
  const [batchDetails,setBatchDetails]=useState([])
  console.log(batchDetails);
  const [loading,setLoading] = useState(true)

  const api= useAxios()

  const {id} = useParams()

  useEffect(()=>{
    fetchBatchDetails();
  },[])

  const fetchBatchDetails = async () => {
    try{
      const response = await api.get(INS_BASE_URL+`batch/${id}/`)
      if (response.status === 200){
        setBatchDetails(response.data)
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }
  return (
    <>
      {loading ? (
        <SpinnerComp />
      ) : (
        <SidebarComp>
          <Box>
            <Button
              sx={{position: "absolute", marginTop: 2.5 }}
              onClick={() => navigate("/institute/batches")}
              size="large"
              color="secondary"
            >
              <ArrowBackIcon fontSize="large" sx={{ color: "#8338EC" }} />
            </Button>
            <Typography
              color={"#1F2D5A"}
              variant="h4"
              paddingLeft={1}
              marginLeft={7}
              paddingY={3}
            >
              {batchDetails.name}
            </Typography>
          </Box>
          <Paper>
            <Typography variant="h6" padding={2}>
              Batch Details
            </Typography>
            <Grid container padding={2} spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="outlined-basic-1"
                  label="Batch Name"
                  variant="outlined"
                  value={batchDetails.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="outlined-basic-2"
                  label="Start Date"
                  variant="outlined"
                  type="date"
                  value={batchDetails.start_date}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  multiline
                  id="outlined-basic-2"
                  label="Description"
                  variant="outlined"
                  value={batchDetails.description}
                />
              </Grid>
            </Grid>
          </Paper>
        </SidebarComp>
      )}
    </>
  );
}

export default InsBatchesDetail