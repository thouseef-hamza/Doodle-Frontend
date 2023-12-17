import { Avatar, Box, Button, Container, Grid, Typography,TextField, Select, MenuItem, Menu } from '@mui/material';
import SidebarComp from '../../Components/Sidebar/SidebarComp';
import CardComp from '../../Components/CardComp';
import {  useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import StudentAddComp from '../../Components/StudentAddComp';
import { ToastContainer, toast } from "react-toastify";
import SpinnerComp from '../../Components/SpinnerComp';
import { useDispatch, useSelector } from 'react-redux';
import { createBatches, listBatches } from '../../Redux/Institute/InsBatches/InsBatchesListCreateAction';
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

const InsBatchesListCreate = () => {
  const [open,setOpen] = useState(false)
  const [searchQuery,setSearchQuery] = useState("")
  const [sortQuery, setSortQuery] = useState("");
  const dispatch = useDispatch()
  const [notification,setNotification] = useState(false)
  const { batches, loading } = useSelector(
    (state) => state.insBatchesListCreate
  );
  const [formData, setFormData] = useState({
    name: "",
    start_date: new Date(),
    description: "",
  });
  let api = useAxios()  

  useEffect(() => {
      dispatch(listBatches({ api, searchQuery,sortQuery,notification }));
  }, [searchQuery,sortQuery,notification]);

  const handleSubmit = async e => {
    e.preventDefault()
    dispatch(createBatches({api : api,values:formData,setOpen:setOpen,toast:toast,open:open}))
  }

  const handleChange = (e) => {
    const {name , value} = e.target
    setFormData({
      ...formData,
      [name] : value
    })
  }
  const handleClose = () => {
    setOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    setSortQuery(null)
  };


  // Sort ============>
   const [anchorEl, setAnchorEl] = useState(null);
   const sortOpen = Boolean(anchorEl);
   const handleSortClick = (event) => {
     setAnchorEl(event.currentTarget);
   };
   const handleSortClose = (e,type) => {
      e.preventDefault()
      setSearchQuery(null)
      setSortQuery(type)
      setAnchorEl(null);
   };
  return (
    <SidebarComp>
      <ToastContainer />
      <Box>
        <Typography color={"#1F2D5A"} variant="h4" paddingLeft={1} paddingY={3}>
          Batches
        </Typography>
      </Box>
      <Container sx={{ display: "flex", alignItems: "center", marginLeft: -3 }}>
        {/* <form onSubmit={handleSearchQuery}> */}
        <TextField
          onChange={handleSearchChange}
          id="outlined-size-small"
          value={searchQuery}
          placeholder="Search..."
          size="small"
        />
        <Button sx={{ marginLeft: 1 }} variant="contained" type="submit">
          Search
        </Button>
        {/* </form> */}
        <Button
          sx={{ marginLeft: 1 }}
          onClick={() => setNotification(!notification)}
          variant={notification ? "contained" : "outlined"}
        >
          {notification ? <NotificationsActiveIcon /> : <NotificationsIcon />}
        </Button>
        <Button
          sx={{ marginLeft: 1 }}
          id="basic-button"
          aria-controls={sortOpen ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={sortOpen ? "true" : undefined}
          onClick={handleSortClick}
          endIcon={<FilterAltIcon />}
          variant="outlined"
        >
          Sort By
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={sortOpen}
          onClose={handleSortClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={(e) => handleSortClose(e, "asc")}>
            Name (A - Z)
          </MenuItem>
          <MenuItem onClick={(e) => handleSortClose(e, "desc")}>
            Name (Z - A)
          </MenuItem>
          <MenuItem onClick={(e) => handleSortClose(e, "fee_asc")}>
            Fee (Low to High)
          </MenuItem>
          <MenuItem onClick={(e) => handleSortClose(e, "fee_desc")}>
            Fee (High to Low)
          </MenuItem>
        </Menu>
        <Button
          onClick={() => setOpen(true)}
          variant="outlined"
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          Add Batch
        </Button>
      </Container>
      {loading ? (
        <SpinnerComp />
      ) : (
        <>
          {batches && batches.length === 0 ? (
            <>
              <Container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Avatar
                  alt="No Batches Found"
                  src="/src/assets/images/NoBatches.png"
                  style={{ width: 350, height: 250, borderRadius: 0 }}
                />
              </Container>
              <Typography marginLeft={"40vw"}>No Batches Found !</Typography>
            </>
          ) : (
            <>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {batches.map((item) => (
                  <CardComp
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    start_date={item.start_date}
                    batch_fee={item.batch_fees}
                    fee_penalty={item.fee_penalty}
                    is_scheduled={item.is_scheduled}
                    scheduled_date={item.scheduled_date}
                  />
                ))}
              </Grid>
              <StudentAddComp open={open} title={"Batch Form Filling"}>
                <form onSubmit={handleSubmit}>
                  <TextField
                    id="outlined-basic"
                    label="Batch Name"
                    type="text"
                    variant="outlined"
                    name="name"
                    fullWidth
                    margin="normal"
                    onChange={handleChange}
                  />
                  <DatePicker
                  sx={{width:"100%"}}
                    label="Start Date"
                    format="DD-MM-YYYY"
                    onChange={(date) =>
                      setFormData({ ...formData, start_date: date })
                    }
                    value={dayjs(formData.start_date)}
                    name="start_date"
                    slotProps={(props) => <TextField fullWidth {...props} />}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Description"
                    type="text"
                    multiline
                    variant="outlined"
                    name="description"
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                  />
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </form>
              </StudentAddComp>
            </>
          )}
        </>
      )}
    </SidebarComp>
  );   
}

export default InsBatchesListCreate;