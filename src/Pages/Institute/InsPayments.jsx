import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, Container, FormControl, Grid, Icon, InputLabel, Menu, MenuItem, Pagination, Paper, Select, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import SidebarComp from '../../Components/Sidebar/SidebarComp'
import { ToastContainer } from 'react-toastify'
import StudentAddComp from '../../Components/StudentAddComp';
import useResponsive from '../../Hooks/useResponsive';
import { useState } from 'react';
import  ExpandMoreIcon  from '@mui/icons-material/ExpandMore'
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DoneIcon from "@mui/icons-material/Done";
import UnpublishedOutlinedIcon from "@mui/icons-material/UnpublishedOutlined";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ClearIcon from "@mui/icons-material/Clear";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { DatePicker } from '@mui/x-date-pickers';


const InsPayments = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useResponsive("sm");
  const [edit, setEdit] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortQuery, setSortQuery] = useState("");
    const [notification, setNotification] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    setSortQuery(null)
  };

  const handleStudentPaymentSubmit = (e) => {
    e.preventDefault();
  };
  
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
          <Grid container md={9} spacing={2}>
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
            <Grid item spacing={2}>
              <Typography>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 900 }} aria-label="simple table">
                    <TableHead fullWidth>
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
                      <TableRow>
                        <TableCell align="left">Thouseef Hamza T P</TableCell>
                        <TableCell align="left">Kunnamkulam</TableCell>
                        <TableCell align="left">
                          <Typography>Thousi</Typography>
                        </TableCell>
                        <TableCell align="left">
                          <Typography>Thousi</Typography>
                        </TableCell>
                        <TableCell align="left">
                          <Icon>
                            <UnpublishedOutlinedIcon color="error" />
                          </Icon>
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
                      {/* Here Ends */}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Typography>
            </Grid>
            <Box mx={"auto"} marginTop={2} textAlign="center">
              <Pagination variant="outlined" count={10} color="primary" />
            </Box>
          </Grid>
          <Grid container spacing={2} md={3} justifyContent={"flex-end"}>
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
            <Grid item xs={12} marginLeft={2}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>SBI</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <form>
                    <TextField
                      required
                      id="outlined-basic"
                      label="Payment Number"
                      type="text"
                      variant="outlined"
                      name="payment_number"
                      margin="normal"
                      fullWidth
                    />
                    <TextField
                      required
                      id="outlined-basic"
                      label="Payment Bank"
                      type="text"
                      variant="outlined"
                      name="last_name"
                      margin="normal"
                      fullWidth
                    />
                    <TextField
                      id="outlined-basic"
                      required
                      label="Payment ID"
                      type="text"
                      variant="outlined"
                      name="email"
                      margin="normal"
                      fullWidth
                    />
                    <br />
                    <Button type="submit" color="primary" variant="contained">
                      Update
                    </Button>
                  </form>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Box>
        {/* Student Filling Form */}
        <StudentAddComp open={open} title={"Payment Detail Filling"}>
          <form>
            <TextField
              required
              id="outlined-basic"
              label="Payment Number"
              type="text"
              variant="outlined"
              name="payment_number"
              sx={{ width: isMobile ? "70vw" : "40vw" }}
              margin="normal"
            />
            <TextField
              required
              id="outlined-basic"
              label="Payment Bank"
              type="text"
              variant="outlined"
              name="last_name"
              sx={{ width: isMobile ? "70vw" : "40vw" }}
              margin="normal"
            />
            <TextField
              id="outlined-basic"
              required
              label="Payment ID"
              type="text"
              variant="outlined"
              name="email"
              sx={{ width: isMobile ? "70vw" : "40vw" }}
              margin="normal"
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

                                  // <FormControl
                                  //   sx={{ m: 1, minWidth: 120 }}
                                  //   size="small"
                                  // >
                                  //   <InputLabel id="demo-select-small-label">
                                  //     Status
                                  //   </InputLabel>
                                  //   <Select
                                  //     labelId="demo-select-small-label"
                                  //     id="demo-select-small"
                                  //     defaultValue={"none"}
                                  //     // value={age}
                                  //     label="Age"
                                  //     // onChange={handleChange}
                                  //   >
                                  //     <MenuItem value="none" disabled>
                                  //       <em>None</em>
                                  //     </MenuItem>
                                  //     <MenuItem value={"completed"}>
                                  //       Completed
                                  //     </MenuItem>
                                  //     <MenuItem value={""}>Pending</MenuItem>
                                  //   </Select>
                                  // </FormControl>