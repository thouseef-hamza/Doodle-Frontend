import { Avatar, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ArrowRightIcon from "@mui/icons-material/ArrowRight";


const TableComp = ( { data,columns,search } ) => {
  const navigate = useNavigate()
  return (
    <TableContainer sx={{ marginTop: 4 }} component={Paper}>
      <Table sx={{ minWidth: "100%" }} aria-label="simple table">
        <TableHead>
          {columns &&
            columns.map((value) => (
              <TableRow key={value.key} sx={{ backgroundColor: "#ECE9FD" }}>
                <TableCell>{value.profile_picture}</TableCell>
                <TableCell>{value.student_id} </TableCell>
                <TableCell>{value.name}</TableCell>
                <TableCell>{value.email}</TableCell>
                <TableCell>{value.phone_number}</TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
        </TableHead>
        <TableBody>
          {data.map((value) => (
            <TableRow key={value.id}>
              <TableCell align="left">
                <Avatar
                  alt={`${value.first_name}`}
                  src={`${value.student_profile?.profile_picture}`}
                />
              </TableCell>
              <TableCell align="left">{value.unique_code}</TableCell>
              <TableCell component="th" scope="row">
                {value.first_name + " " + value.last_name}
              </TableCell>
              <TableCell align="left">{value.email}</TableCell>
              <TableCell align="left">{value.phone_number}</TableCell>
              <TableCell>
                <Button
                  onClick={() => navigate(`/institute/student/${value.id}`)}
                  endIcon={<ArrowRightIcon />}
                >
                  view
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableComp;
