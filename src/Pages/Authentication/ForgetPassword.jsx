import { Button } from '@mui/base';
import { TextField, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router';
import { ToastContainer } from 'react-toastify';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import BoxWrapper from '../../Components/Authentication/BoxWrapper';
import LogoComponent from '../../Components/Authentication/LogoComponent';
import useResponsive from '../../Hooks/useResponsive';

const ForgetPassword = () => {
     const navigate=useNavigate()
     const isMobile = useResponsive();
  return (
    <>
      <Button
        sx={{ margin: "10px" }}
        onClick={() => navigate("/login")}
        size="large"
        color="secondary"
      >
        <ArrowBackOutlinedIcon fontSize="large" sx={{ color: "#8338EC" }} />
      </Button>
      <ToastContainer />
      <form >
        <BoxWrapper>
          <LogoComponent />
          <Typography
            gutterBottom
            sx={{ fontSize: isMobile ? "15px" : "20px" }}
          >
            Hey Happy to see you here !
          </Typography>
          <TextField
            id="outlined-basic"
            label="Your Code"
            variant="outlined"
            name="unique_code"
            defaultValue={"ADMIN 0003"}
            sx={{ width: isMobile ? "70vw" : "40vw" }}
            margin="normal"
          />
          <Button
            type="submit"
            sx={{
              backgroundColor: "#8338EC",
              ":hover": { backgroundColor: "#8338EC" },
            }}
            margin={"10px 0px 0px 0px"}
            variant="contained"
          >
            Login
          </Button>
        </BoxWrapper>
      </form>
    </>
  );
}

export default ForgetPassword