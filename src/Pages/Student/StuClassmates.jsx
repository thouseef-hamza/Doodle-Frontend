import { Button } from '@mui/base';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listClassmates } from '../../Redux/Student/StuClassmates/ClassmatesAction';
import useAxios from '../../Hooks/useAxios';
import StuSidebarComp from '../../Components/Sidebar/StuSidebarComp';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router';
import Avatar from '@mui/material/Avatar';

const StuClassmates = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const {classmates} = useSelector((state)=>state.stuClassmates)
  const api=useAxios()
  const dispatch = useDispatch()
     const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  };
  useEffect(()=>{
     dispatch(listClassmates({api,searchQuery}))
  },[searchQuery])
  console.log(classmates);
  return (
    <>
      <StuSidebarComp>
        <ToastContainer />
        <Box>
          <Typography
            color={"#1F2D5A"}
            variant="h4"
            paddingLeft={1}
            paddingY={3}
          >
            Classmates
          </Typography>
        </Box>

        <Container
          sx={{ display: "flex", alignItems: "center", marginLeft: -3 }}
        >
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
        </Container>
        <TableContainer component={Paper} sx={{ marginTop: 3 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Student</TableCell>
                <TableCell align="left">Full Name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Phone Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {classmates &&
              classmates.students?.map((student) => (
                <TableRow
                  key={student.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell align="left">
                    <Avatar
                      alt={`${student.first_name}`}
                      src={`${student.profile_picture}`}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {student.first_name + " " + student.last_name}
                  </TableCell>
                  <TableCell align="left">{student.email}</TableCell>
                  <TableCell align="left">{student.phone_number}</TableCell>
                  <TableCell align="left">
                    {student?.student_profile?.date_of_birth}
                  </TableCell>
                  <TableCell align="left">
                    {student?.student_profile?.gender?.replace(
                      /\b\w/g,
                      (match) => match.toUpperCase()
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
         <Box mx={"auto"} marginTop={2} textAlign="center" display={"flex"} justifyContent={'center'}>
                <Pagination
                  variant="outlined"
                  page={page}
                  onChange={(event, page) => setPage(page)}
                  count={students && students.total_page}
                  color="primary"
                />
              </Box>
      </StuSidebarComp>
    </>
  );
}

export default StuClassmates