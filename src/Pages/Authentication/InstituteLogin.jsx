import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import {useNavigate} from 'react-router-dom'
import useResponsive from '../../Hooks/useResponsive';
import BoxWrapper from '../../Components/Authentication/BoxWrapper';
import LogoComponent from '../../Components/Authentication/LogoComponent';
import { useContext, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import { ToastContainer } from "react-toastify";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";


const InstituteLogin = () => {
     const isMobile = useResponsive('sm')
     const navigate = useNavigate()
     let { loginUser } = useContext(AuthContext)
     const [showPassword, setShowPassword] = useState(false);

     const handleClickShowPassword = () => setShowPassword((show) => !show);
     const handleMouseDownPassword = (event) => {
        event.preventDefault();
     };


     
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
      <form onSubmit={loginUser}>
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
            sx={{ width: isMobile ? "70vw" : "40vw" }}
            margin="normal"
          />
          <FormControl sx={{ m: 1, width: "67%" }}  variant="outlined">
            <InputLabel  htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              name='password'
              onChange={(e)=>console.log(e.target.value)}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
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

export default InstituteLogin