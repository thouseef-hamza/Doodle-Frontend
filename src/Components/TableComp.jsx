import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ArrowRightIcon from "@mui/icons-material/ArrowRight";


const TableComp = ( { data,columns,search } ) => {
  const navigate = useNavigate()
  return (
    <TableContainer sx={{ marginTop: 4 }} component={Paper}>
      <Table sx={{ minWidth: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#ECE9FD" }}>
            {columns.map((value) => (
              <TableCell key={value.key}>{value.name}</TableCell>
            ))}
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((value) => (
            <TableRow key={value.id}>
              <TableCell>{value.unique_code}</TableCell>
              <TableCell>{value.first_name + value.last_name}</TableCell>
              <TableCell>{value.student_profile?.batch.name}</TableCell>
              <TableCell>
                <Button
                  onClick={() => navigate(`/institute/student/${value.id}`)}
                  endIcon={<ArrowRightIcon/>}
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
