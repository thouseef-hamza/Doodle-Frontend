import { Box, Button, TextField, Typography } from '@mui/material';
import SidebarComp from '../../Components/Sidebar/SidebarComp';
import SearchBar from '../../Components/SearchBar';
import TableComp from '../../Components/TableComp';
import StudentAddComp from '../../Components/StudentAddComp';
import { useState } from 'react';
import { useFormik } from "formik";
import { basicSchema } from '../../schemas/AuthSchema';
import useResponsive from '../../Hooks/useResponsive';

const InsStudents = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const isMobile = useResponsive("sm");
  const { values, errors, touched, isSubmitting, handleBlur, handleChange } =
    useFormik({
      initialValues: {
        institute_name: "",
        email: "",
        phone_number: "",
      },
      validationSchema: basicSchema,
    });
  return (
    <>
      <SidebarComp>
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
        <TableComp />
        <StudentAddComp open={open} title={'Student Form Filling'}>
          <form>
            <TextField
              error={
                errors.first_name && touched.first_name ? true : false
              }
              helperText={
                errors.first_name && touched.first_name
                  ? errors.first_name
                  : null
              }
              id="outlined-basic"
              label="First Name"
              type="text"
              variant="outlined"
              value={values.first_name}
              onChange={handleChange}
              onBlur={handleBlur}
              name="first_name"
              sx={{ width: isMobile ? "70vw" : "40vw" }}
              margin="normal"
            />
            <TextField
              error={
                errors.last_name && touched.last_name ? true : false
              }
              helperText={
                errors.last_name && touched.last_name
                  ? errors.last_name
                  : null
              }
              id="outlined-basic"
              label="Last Name"
              type="text"
              variant="outlined"
              value={values.last_name}
              onChange={handleChange}
              onBlur={handleBlur}
              name="last_name"
              sx={{ width: isMobile ? "70vw" : "40vw" }}
              margin="normal"
            />
            <TextField
              error={
                errors.email && touched.email ? true : false
              }
              helperText={
                errors.email && touched.email
                  ? errors.email
                  : null
              }
              id="outlined-basic"
              label="Student Email"
              type="text"
              variant="outlined"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              sx={{ width: isMobile ? "70vw" : "40vw" }}
              margin="normal"
            />
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button color="primary">
              Submit
            </Button>
          </form>
        </StudentAddComp>
      </SidebarComp>
    </>
  );
}

export default InsStudents