import { Box, Typography } from '@mui/material';
import SidebarComp from '../../Components/Sidebar/SidebarComp';

const InsAccount = () => {
  return (
    <div>
      <SidebarComp>
        <Box>
          <Typography
            color={"#1F2D5A"}
            variant="h4"
            paddingLeft={1}
            paddingY={3}
          >
            Accounts
          </Typography>
        </Box>
        
      </SidebarComp>
    </div>
  );
}

export default InsAccount