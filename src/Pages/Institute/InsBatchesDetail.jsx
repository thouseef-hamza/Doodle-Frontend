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
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { DateField, DateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
// import { DateAdapter } from "../../utils/FormatDate/DateAdapter";

const InsBatchesDetail = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData,setFormData]=useState([])
  const { batchDetails, loading } = useSelector(
    (state) => state.insBatchDetail
  );
  const api= useAxios()

  const {id} = useParams()
  console.log(formData);
  useEffect(()=>{
    dispatch(getBatchDetail({id:id,api:api}))
  },[])

  useEffect(()=>{
    setFormData({
      name: batchDetails.name,
      description: batchDetails.description,
      start_date: batchDetails.start_date,
      scheduled_date: batchDetails.scheduled_date,
      batch_fees: batchDetails.batch_fees,
      fee_penalty: batchDetails.fee_penalty,
    });
  },[batchDetails])
  const handleInputChange = (e) => {
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name] : value
    })
  }
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
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 10,
                marginLeft: 8,
              }}
            >
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
                <Grid item sm={4}>
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
                <Grid item sm={2}>
                  <DatePicker
                    label="Start Date"
                    format="DD-MM-YYYY"
                    onChange={(date) =>
                      setFormData({ ...formData, start_date: date })
                    }
                    value={dayjs(formData.start_date)}
                    name="start_date"
                    views={["year", "month", "day"]}
                    slotProps={(props) => <TextField {...props} />}
                  />
                </Grid>
                <Grid item sm={3}>
                  <TextField
                    required
                    fullWidth
                    label="Batch Fees"
                    value={formData.batch_fees}
                    name="batch_fees"
                    onChange={(e) =>
                      setFormData({ ...formData, batch_fees: e.target.value })
                    }
                    type="number"
                  />
                </Grid>
                <Grid item sm={3}>
                  <TextField
                    label="Fee Penalty"
                    value={formData.fee_penalty}
                    name="fee_penalty"
                    onChange={(e) =>
                      setFormData({ ...formData, fee_penalty: e.target.value })
                    }
                    type="number"
                  />
                </Grid>
                <Grid item sm={3}>
                  <DatePicker
                    label="Fee Scheduled Date"
                    onChange={(date) =>
                      setFormData({ ...formData, scheduled_date: date })
                    }
                    value={dayjs(formData.scheduled_date)}
                    format="DD-MM-YYYY"
                    slotProps={(params) => (
                      <TextField
                        value={formData && formData.scheduled_date}
                        {...params}
                      />
                    )}
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