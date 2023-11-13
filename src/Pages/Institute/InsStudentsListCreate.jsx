import { Avatar, Box, Button, Container, InputLabel, MenuItem, Select,TextField, Typography } from '@mui/material';
import SidebarComp from '../../Components/Sidebar/SidebarComp';
import SearchBar from '../../Components/SearchBar';
import TableComp from '../../Components/TableComp';
import StudentAddComp from '../../Components/StudentAddComp';
import { useContext, useEffect, useState } from 'react';
import { useFormik } from "formik";
import { basicSchema } from '../../schemas/AuthSchema';
import useResponsive from '../../Hooks/useResponsive';
import useAxios from '../../Hooks/useAxios';
import AuthContext from '../../context/AuthContext';
import { ToastContainer, toast } from "react-toastify";
import { INS_BASE_URL } from '../../utils/api/api';
import SpinnerComp from '../../Components/SpinnerComp';
import { useDispatch, useSelector } from 'react-redux';
import { createStudent, listStudents } from '../../Redux/Institute/InsStudents/InsStudentListCreateAction';
import { listBatches } from '../../Redux/Institute/InsBatches/InsBatchesListCreateAction';

let tableHead = [
  {key:1,name:"Student Code"},
  {key:2,name:"Student Name"},
  {key:3,name:"Batch Number"},
];

const InsStudentsListCreate = () => {
    const [open, setOpen] = useState(false);
    const { logOutUser } = useContext(AuthContext);
    const dispatch = useDispatch()
    const { students, loading , error} = useSelector(
      (state) => state.insStudentsListCreate
    );
    const {batches} = useSelector(state=>state.insBatchesListCreate)
    let api = useAxios();

    const formik = useFormik({
      initialValues: {
        first_name: "",
        last_name:"",
        email: "",
        phone_number:"",
        batch_id:""
      },
      validationSchema: basicSchema,
    });
    console.log(formik.values,"ith thousi");
    
    const handleSubmit= async(e)=>{
      e.preventDefault()
      const value = formik.values
      dispatch(
        createStudent({
          values: value,
          api:api,
          setOpen:setOpen,
          toast:toast,
        })
      );
    }
    console.log(error);

    useEffect(() => {
      dispatch(listStudents({api:api}))
      dispatch(listBatches({api:api}))
    }, []);
    
  const handleClose = () => {
    setOpen(false);
  };
  const isMobile = useResponsive("sm");
  return (
    <>
      {loading ? (
        <SpinnerComp/>
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
              Students
            </Typography>
          </Box>
          <SearchBar>
            {/* Add Student Button */}
            <Button
              onClick={() => setOpen(true)}
              variant="outlined"
              style={{
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
              }}
            >
              Add Students
            </Button>
          </SearchBar>

          {/* Student List Table */}
          {students.length === 0 ? (
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
                  alt="No User Found"
                  src="/src/assets/images/NoStudents.png"
                  style={{ width: 350, height: 250, borderRadius: 0 }}
                />
              </Container>
              <Typography marginLeft={"40vw"}>No Students Found !</Typography>
            </>
          ) : (
            <TableComp data={students} columns={tableHead} />
          )}

          {/* Student Filling Form */}
          <StudentAddComp open={open} title={"Student Form Filling"}>
            <form onSubmit={handleSubmit}>
              <TextField
                required
                id="outlined-basic"
                label="First Name"
                type="text"
                variant="outlined"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.first_name && Boolean(formik.errors.first_name)
                }
                helperText={
                  formik.touched.first_name && formik.errors.first_name
                }
                name="first_name"
                sx={{ width: isMobile ? "70vw" : "40vw" }}
                margin="normal"
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                type="text"
                variant="outlined"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.last_name && Boolean(formik.errors.last_name)
                }
                helperText={formik.touched.last_name && formik.errors.last_name}
                name="last_name"
                sx={{ width: isMobile ? "70vw" : "40vw" }}
                margin="normal"
              />
              <TextField
                id="outlined-basic"
                required
                label="Email"
                type="email"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                name="email"
                sx={{ width: isMobile ? "70vw" : "40vw" }}
                margin="normal"
              />
              <TextField
                id="outlined-basic"
                required
                label="Phonenumber"
                type="number"
                variant="outlined"
                value={formik.values.phone_number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.phone_number &&
                  Boolean(formik.errors.phone_number)
                }
                helperText={
                  formik.touched.phone_number && formik.errors.phone_number
                }
                name="phone_number"
                sx={{ width: isMobile ? "70vw" : "40vw" }}
                margin="normal"
              />
              {/* <Container fullWidth> */}
              <InputLabel id="demo-simple-select-label" required>Batch</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                required
                label="Batch"
                fullWidth
                name="batch_id"
                value={formik.values.batch_id}
                onChange={formik.handleChange}
              >
                {batches.map((batch) => (
                  <MenuItem key={batch.id} value={batch.id}>
                    {batch.name}
                  </MenuItem>
                ))}
              </Select>
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
      )}
    </>
  );
}

export default InsStudentsListCreate