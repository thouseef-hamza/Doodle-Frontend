import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, Container, FormControl, Grid, Icon, InputLabel, Menu, MenuItem, Pagination, Paper, Select, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import SidebarComp from '../../Components/Sidebar/SidebarComp'
import { ToastContainer,toast } from 'react-toastify'
import StudentAddComp from '../../Components/StudentAddComp';
import useResponsive from '../../Hooks/useResponsive';
import { useEffect, useState } from 'react';
import  ExpandMoreIcon  from '@mui/icons-material/ExpandMore'
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DoneIcon from "@mui/icons-material/Done";
import UnpublishedOutlinedIcon from "@mui/icons-material/UnpublishedOutlined";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ClearIcon from "@mui/icons-material/Clear";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { DatePicker } from '@mui/x-date-pickers';
import { useDispatch, useSelector } from 'react-redux';
import { listPayments } from '../../Redux/Institute/InsPayments/PaymentListAction';
import useAxios from '../../Hooks/useAxios';
import { createUPI, listUPI } from '../../Redux/Institute/InsPayments/UPIListAction';


const InsPayments = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useResponsive("sm");
  const [edit, setEdit] = useState(false);
  const { payments } = useSelector((state) => state.insStudPayments);
  const { upis } = useSelector((state) => state.insUPI);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortQuery, setSortQuery] = useState("");
    const [editupiFormData,seteditUpiFormData] = useState("")
    const [upiFormData,setUpiFormData]=useState({})
  const handleClose = () => {
    setOpen(false);
  };
  const api = useAxios()
  const dispatch = useDispatch() 
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    setSortQuery(null)
  };

  const handleStudentPaymentSubmit = (e) => {
    e.preventDefault();
  };

  const handleUpiChange = (e)=>{
    const {name,value} = e.target
    setUpiFormData({
      ...upiFormData,
      [name]: value,
    });
    console.log(upiFormData);
  }

  const handleUPISubmit=(e)=>{
    e.preventDefault()
    dispatch(createUPI({api,toast,values:upiFormData}))
  }
  
  useEffect(()=>{
    dispatch(listPayments({api,searchQuery,sortQuery}))
    dispatch(listUPI({api}))
  },[])

  
  // Sort ============>
  const [anchorEl, setAnchorEl] = useState(null);
  const sortOpen = Boolean(anchorEl);
  const handleSortClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSortClose = (type) => {
    setSearchQuery(null);
    setSortQuery(type);
    setAnchorEl(null);
  };
  return (
    <>
      <SidebarComp>
        <ToastContainer />
        <Box>
          <Typography
            color={"#1F2D5A"}
            variant="h4"
            paddingLeft={1}
            paddingY={3}
          >
            Payments
          </Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          marginLeft={0}
        >
          <Grid container spacing={2}>
            {/* Student Section */}
            <Grid
              item
              md={12}
              sx={{ display: "flex" }}
              justifyContent={"space-between"}
            >
              <Typography color={"text.primary"} variant="h5">
                Student Payment List
              </Typography>
            </Grid>
            <Container
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: -1,
                marginTop: 1,
              }}
            >
              {/* <form onSubmit={handleSearchQuery}> */}
              <TextField
                onChange={handleSearchChange}
                id="outlined-size-small"
                value={searchQuery}
                placeholder="Search..."
                size="small"
              />
              {/* </form> */}
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
                <MenuItem onClick={() => handleSortClose("pending")}>
                  Pending
                </MenuItem>
                <MenuItem onClick={() => handleSortClose("completed")}>
                  Completed
                </MenuItem>
                <MenuItem onClick={() => handleSortClose("over_due")}>
                  Over Due
                </MenuItem>
                <MenuItem onClick={() => handleSortClose("fee_asc")}>
                  Fee (Low to High)
                </MenuItem>
                <MenuItem onClick={() => handleSortClose("fee_desc")}>
                  Fee (High to Low)
                </MenuItem>
              </Menu>
              {/* <Button
                variant="outlined"
                onClick={() => setOpen(true)}
                sx={{ marginTop: 1,justifySelf:"flex-start" }}
              >
                Add New Payment
              </Button> */}
            </Container>
            <Grid item>
              <Typography>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 900 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="left">Batch No</TableCell>
                        <TableCell align="left">Fee Amount</TableCell>
                        <TableCell align="left">Paid Amount</TableCell>
                        <TableCell align="left">Status</TableCell>
                        <TableCell align="left"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {payments &&
                        payments.students?.length > 0 &&
                        payments.students?.map((student) => (
                          <TableRow key={student.id}>
                            <TableCell align="left">
                              {student.student_name}
                            </TableCell>
                            <TableCell align="left">
                              {student.batch_name}
                            </TableCell>
                            <TableCell align="left">
                              <Typography>{student.fee_amount}</Typography>
                            </TableCell>
                            <TableCell align="left">
                              <Typography>{student.fee_paid}</Typography>
                            </TableCell>
                            <TableCell align="left">
                              {student.fee_status === "overdue" ? (
                                <Icon>
                                  <UnpublishedOutlinedIcon color="error" />
                                </Icon>
                              ) : student.fee_status === "pending" ? (
                                <Icon>
                                  <AccessTimeIcon color="warning" />
                                </Icon>
                              ) : (
                                <Icon>
                                  <DoneIcon color="success" />
                                </Icon>
                              )}
                            </TableCell>
                            <TableCell align="left">
                              <Button
                                variant="outlined"
                                onClick={() => setEdit(!edit)}
                              >
                                Edit
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Typography>
            </Grid>
            <Box mx={"auto"} marginTop={2} textAlign="center">
              <Pagination
                variant="outlined"
                count={payments && payments.total_page}
                color="primary"
              />
            </Box>
          </Grid>
          <Grid container spacing={2} justifyContent={"flex-end"}>
            <Typography color={"text.primary"} variant="h5" marginTop={3}>
              Payment Detail
            </Typography>
            <Button
              variant="outlined"
              onClick={() => setOpen(true)}
              sx={{ marginTop: 1 }}
            >
              Add New Upi
            </Button>
            {upis && upis.length > 0 ? (
              <>
                {upis.map((upi, index) => (
                  <Grid item xs={12} key={index} marginLeft={2}>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                      >
                        <Typography>{upi.payment_bank}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <form>
                          <TextField
                            required
                            value={upi.payment_number}
                            id="outlined-basic"
                            label="Payment Number"
                            type="text"
                            variant="outlined"
                            name="payment_number"
                            margin="normal"
                            fullWidth
                          />
                          <TextField
                            value={upi.payment_bank}
                            required
                            id="outlined-basic"
                            label="Payment Bank"
                            type="text"
                            variant="outlined"
                            name="payment_bank"
                            margin="normal"
                            fullWidth
                          />
                          <TextField
                            id="outlined-basic"
                            value={upi.upi_id}
                            required
                            label="UPI ID"
                            type="text"
                            variant="outlined"
                            name="email"
                            margin="normal"
                            fullWidth
                          />
                          <br />
                          <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                          >
                            Update
                          </Button>
                        </form>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                ))}
              </>
            ) : null}
          </Grid>
        </Box>
        {/* Student Filling Form */}
        <StudentAddComp open={open} title={"Payment Detail Filling"}>
          <form onSubmit={handleUPISubmit}>
            <TextField
              required
              id="outlined-basic"
              label="Payment Number"
              type="text"
              variant="outlined"
              name="payment_number"
              sx={{ width: isMobile ? "70vw" : "40vw" }}
              margin="normal"
              onChange={handleUpiChange}
            />
            <TextField
              required
              id="outlined-basic"
              label="Payment Bank"
              type="text"
              variant="outlined"
              name="payment_bank"
              sx={{ width: isMobile ? "70vw" : "40vw" }}
              margin="normal"
              onChange={handleUpiChange}
            />
            <TextField
              id="outlined-basic"
              required
              label="UPI ID"
              type="text"
              variant="outlined"
              name="upi_id"
              sx={{ width: isMobile ? "70vw" : "40vw" }}
              margin="normal"
              onChange={handleUpiChange}
            />
            {/* </FormControl> */}
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </form>
        </StudentAddComp>
      </SidebarComp>
    </>
  );
}

export default InsPayments

                         