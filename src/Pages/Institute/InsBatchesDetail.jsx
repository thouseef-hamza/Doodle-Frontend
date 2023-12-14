import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import SidebarComp from "../../Components/Sidebar/SidebarComp"
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useAxios from "../../Hooks/useAxios";
import { useEffect, useState } from "react";
import SpinnerComp from "../../Components/SpinnerComp";
import { useDispatch, useSelector } from "react-redux";
import { deleteBatchDetail, editBatchDetail, getBatchDetail } from "../../Redux/Institute/InsBatches/InsBatchesDetailAction";
import { ToastContainer, toast } from "react-toastify";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { DateField, DesktopDatePicker } from "@mui/x-date-pickers";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { formatDate } from "../../utils/FormatDate/format-date";

const InsBatchesDetail = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData,setFormData]=useState([])
  const { batchDetails, loading } = useSelector(
    (state) => state.insBatchDetail
  );
  console.log("kiti",batchDetails);
  const api= useAxios()

  const {id} = useParams()

  useEffect(()=>{
    dispatch(getBatchDetail({id:id,api:api}))
  },[])

  useEffect(()=>{
    setFormData({
      name:batchDetails.name,
      start_date:batchDetails.start_date,
      description:batchDetails.description
    })
  },[batchDetails])

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name] : value
    })
  }
  console.log(formData)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Are you sure want to update")
    dispatch(editBatchDetail({id:id,values:formData,toast:toast,api:api}))
  }

  return (
    <SidebarComp>
      {loading ? (
        <SpinnerComp />
      ) : (
        <>
          <ToastContainer />
          <Box>
            <Button
              sx={{ position: "absolute", marginTop: 2.5 }}
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
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h6">Batch Details</Typography>
              <Button
                variant="contained"
                endIcon={<NotificationsIcon />}
                size="small"
              >
                Fee Reminder
              </Button>
            </Box>
            <form onSubmit={handleSubmit}>
              <Grid container padding={2} spacing={2}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    id="outlined-basic-1"
                    label="Batch Name"
                    name="name"
                    variant="outlined"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    id="outlined-basic-2"
                    label="Start Date"
                    variant="outlined"
                    name="start_date"
                    type="date"
                    format="YYYY-DD-MM"
                    value={formData.start_date}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  {/* <TextField
                    fullWidth
                    id="outlined-basic-3"
                    label="Fee Reminder"
                    variant="outlined"
                    name="scheduled_date" 
                    type="date"
                  /> */}
                  <DatePicker
                    label="Dash Seperator"
                    value={formData.scheduled_date}
                    onChange={(date) =>
                      setFormData({ ...formData, scheduled_date: date })
                    }
                    format="YYYY-MM-DD"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    multiline
                    name="description"
                    id="outlined-basic-2"
                    label="Description"
                    variant="outlined"
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Button
                  sx={{ marginTop: 1, marginLeft: 2 }}
                  variant="contained"
                  type="submit"
                >
                  Update
                </Button>
                <Button
                  sx={{ marginTop: 1, marginLeft: 2 }}
                  color="error"
                  variant="contained"
                  onClick={() => {
                    alert("Are you sure want to delete");
                    dispatch(deleteBatchDetail({ id, api, toast, navigate }));
                  }}
                >
                  Delete
                </Button>
              </Grid>
            </form>
          </Paper>
        </>
      )}
    </SidebarComp>
  );
}

export default InsBatchesDetail