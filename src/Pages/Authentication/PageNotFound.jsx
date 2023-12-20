import { Box, Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import LogoComponent from '../../Components/Authentication/LogoComponent';

const PageNotFound = () => {
     const navigate=useNavigate()
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
          <br/>
        <LogoComponent />
        <img
          src="/src/assets/images/404ErrorPagenotFound.png"
          width={"30%"}
          alt="Page Not Found"
        />
        <Button onClick={() => navigate("/institute/home")} variant="outlined" sx={{marginTop:5}}>
          Back To Home
        </Button>
      </Box>
    </>
  );
}

export default PageNotFound