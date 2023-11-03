import { Avatar, Box, Button, Container, Grid, Typography,TextField } from '@mui/material';
import SidebarComp from '../../Components/Sidebar/SidebarComp';
import SearchBar from '../../Components/SearchBar';
import CardComp from '../../Components/CardComp';
import { useContext, useEffect, useReducer, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import useAxios from '../../Hooks/useAxios';
import StudentAddComp from '../../Components/StudentAddComp';
import { DateField } from "@mui/x-date-pickers/DateField";
import { ToastContainer, toast } from "react-toastify";
import { INS_BASE_URL } from '../../utils/api/api';
import { DateCalendar, DatePicker, DatePickerToolbar } from '@mui/x-date-pickers';
import { format } from "date-fns";
import SpinnerComp from '../../Components/SpinnerComp';



const InsBatchesListCreate = () => {
  const [open,setOpen] = useState(false)
  const { logOutUser } = useContext(AuthContext);
  const [batches, setBatches] = useState([])
  const [loading,setLoading] = useState(true)

  const [formData, setFormData] = useState({
    name: "",
    start_date: null,
    description: "",
  });
  const isMobile = useReducer("sm")

  let api = useAxios()  

  useEffect(() => {
    fetchBatches()
  }, []);
  
  const fetchBatches = async ()=> {
    try {
      let response = await api.get("/institutes/batches/")
      if (response.status === 200 ){
        setBatches(response.data)
        setLoading(false)
      } else if (response.statusText === 'Unauthorized') {
        logOutUser()
      }
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try{
      const response = await api.post(INS_BASE_URL+"batches/",formData);
      if (response.status === 201){
        setOpen(!open)
        setBatches([...batches,response.data])
        toast.success("Batch Created Successfully")
      } else {
        setOpen(!open)
        console.log(response);
      }
    }catch(error){
      console.log(error);
    } 
  }

  const handleChange = (e) => {
    const {name , value} = e.target
    setFormData({
      ...formData,
      [name] : value
    })
  }
  console.log(formData);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {loading ? (
        <SpinnerComp />
      ) : (
        <SidebarComp>
          <ToastContainer />
          <Box>
            <Typography
              color={"#1F2D5A"}
              variant="h4"
              paddingLeft={1}
              paddingY={3}
            >
              Batches
            </Typography>
          </Box>
          <SearchBar title="Add Batches">
            {/* Add Student Button */}
            <Button
              // onClick={() => setOpen(true)}
              variant="outlined"
              onClick={() => setOpen(true)}
              style={{
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
              }}
            >
              Add Batches
            </Button>
          </SearchBar>
          {batches.length === 0 ? (
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
                  />
                ))}
              </Grid>
            </>
          )}

          {/* Batch Filling Form */}
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
              <TextField
                id="outlined-basic"
                name="start_date"
                label="Start Date"
                type="date"
                value={formData.start_date}
                onChange={handleChange}
                sx={{ width: "100%" }}
                fullWidth
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
        </SidebarComp>
      )}
    </>
  );
}

export default InsBatchesListCreate;