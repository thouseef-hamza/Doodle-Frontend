import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';



const TableComp = ({ data }) => {

  return (
    <TableContainer sx={{ marginTop: 4 }} component={Paper}>
      <Table sx={{ minWidth: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#ECE9FD" }}>
            <TableCell>Student Code</TableCell>
            <TableCell>Student Name</TableCell>
            <TableCell>Batch No</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={"index"}>
            <TableCell>{"STU 0002"}</TableCell>
            <TableCell>{"Thouseef"}</TableCell>
            <TableCell>{"B-6"}</TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <TableRow key={"index"}>
            <TableCell>{"STU 0002"}</TableCell>
            <TableCell>{"Thouseef"}</TableCell>
            <TableCell>{"B-6"}</TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <TableRow key={"index"}>
            <TableCell>{"STU 0002"}</TableCell>
            <TableCell>{"Thouseef"}</TableCell>
            <TableCell>{"B-6"}</TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <TableRow key={"index"}>
            <TableCell>{"STU 0002"}</TableCell>
            <TableCell>{"Thouseef"}</TableCell>
            <TableCell>{"B-6"}</TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <TableRow key={"index"}>
            <TableCell>{"STU 0002"}</TableCell>
            <TableCell>{"Thouseef"}</TableCell>
            <TableCell>{"B-6"}</TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <TableRow key={"index"}>
            <TableCell>{"STU 0002"}</TableCell>
            <TableCell>{"Thouseef"}</TableCell>
            <TableCell>{"B-6"}</TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <TableRow key={"index"}>
            <TableCell>{"STU 0002"}</TableCell>
            <TableCell>{"Thouseef"}</TableCell>
            <TableCell>{"B-6"}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableComp;
