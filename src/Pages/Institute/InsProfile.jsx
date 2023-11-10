import {  Box, Button, Card, CardActionArea, CardMedia, Grid, IconButton, TextField, Typography } from '@mui/material';
import SidebarComp from '../../Components/Sidebar/SidebarComp';
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useNavigate } from 'react-router-dom';
import UploadIcon from "@mui/icons-material/Upload";
import { useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import { INS_BASE_URL } from '../../utils/api/api';
import SpinnerComp from '../../Components/SpinnerComp';
 
// const linkStyle = {
//   textDecoration: "underline",
  
// };
const InsProfile = () => {
  const navigate =useNavigate()
  const [edit, setEdit] = useState(false)
  const [insProfile,setInsProfile] = useState([])
  const [loading,setLoading] = useState(true)
  const api=useAxios()


  useEffect(()=>{
    fetchInsProfile()
  },[])

  // Fetching Institute Profile
  const fetchInsProfile = async ()=>{
    try{
      const response = await api.get(INS_BASE_URL+"profile/")
      if (response.status == 200){
        setInsProfile(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
    const handleInputChange = (e) => {
      console.log(e.target.name);
      const { name, value } = e.target;
      setInsProfile({
        ...insProfile,
        [name]: value,
      });
    };

    
  // Updating Institute Profile
  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      let response = await api.post("/institutes/profile/",{
        insProfile
      });
      if (response.status === 200){
        setInsProfile(response.data)
        setEdit(false)
      }

    } catch (error){
      console.log(error);
    }
  }

  return (
    <>
      {loading ? (
        <SpinnerComp />
      ) : (
        <SidebarComp>
          <Box>
            <Typography
              color={"#1F2D5A"}
              variant="h4"
              paddingLeft={1}
              paddingY={3}
            >
              Profile
            </Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} margin={0}>
              <Grid item xs={3}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      sx={{ maxHeight: "50vh" }}
                      image="/src/assets/images/Login.png"
                      alt="green iguana"
                    />
                  </CardActionArea>
                </Card>
                {edit ? (
                  <Button
                    variant="contained"
                    endIcon={<UploadIcon />}
                    fullWidth
                    sx={{ marginTop: 2 }}
                    onClick={() => setEdit(false)}
                  >
                    Update
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ marginTop: 2 }}
                    onClick={() => setEdit(true)}
                  >
                    Edit Profile <EditNoteIcon />
                  </Button>
                )}
                <Button fullWidth variant="outlined" sx={{ marginTop: 1 }}>
                  ADMIN 0001
                </Button>
              </Grid>
              <Grid item xs={8}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    {/* <TextField
                    fullWidth
                    // id="outlined-read-only-input"
                    label="Institute Firstname"
                    variant="outlined"
                    name="first_name"
                    value={insProfile.first_name}
                    onChange={handleInputChange}
                    InputProps={{
                      readOnly: true,
                    }}
                  /> */}
                    <TextField
                      id="outlined-read-only-input"
                      label="Read Only"
                      defaultValue={insProfile.first_name}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Institute Lastname"
                      variant="outlined"
                      name="last_name"
                      value={insProfile.last_name}
                      onChange={handleInputChange}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Email primary"
                      color="primary"
                      variant="outlined"
                      value={"thousithouseef731@gmail.com"}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      variant="outlined"
                      value={"+918848285720"}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    {/* <TextField
                    label="Website Link"
                    variant="outlined"
                    value={"https://www.example.com"}
                    InputProps={{
                      style: linkStyle, // Apply the link-like styling
                      onClick: () => {
                        window.location.href = "https://www.example.com"; // Replace with your desired URL
                      },
                    }}
                    sx={{ cursor: "pointer" }}
                    fullWidth
                  /> */}
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      fullWidth
                      label="Establishment Year"
                      variant="outlined"
                      value={"1997"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Address"
                      variant="outlined"
                      multiline
                      value={
                        "Bismillah Manzil\n Pekkadam , Periyoth,\n P.O Thrikaripur"
                      }
                      maxRows={5}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      label="City"
                      variant="outlined"
                      value={"Calicut"}
                      maxRows={5}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      label="State"
                      variant="outlined"
                      value={"State"}
                      maxRows={5}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      label="Postal Code"
                      variant="outlined"
                      value={"67310"}
                      maxRows={5}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="About"
                      variant="outlined"
                      multiline
                      value={
                        "Bismillah Manzil\n Pekkadam , Periyoth,\n P.O Thrikaripur"
                      }
                      maxRows={10}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </SidebarComp>
      )}
    </>
  );
}

export default InsProfile

