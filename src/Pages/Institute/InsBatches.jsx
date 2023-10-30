import { Box, Typography } from '@mui/material';
import SidebarComp from '../../Components/Sidebar/SidebarComp';
import SearchBar from '../../Components/SearchBar';
import CardComp from '../../Components/CardComp';



const InsBatches = () => {
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
            Batches
          </Typography>
        </Box>
        <SearchBar title='Add Batches'/> 
        <CardComp/>
        {/* <Table/> */}
      </SidebarComp>
    </>
  );
}

export default InsBatches