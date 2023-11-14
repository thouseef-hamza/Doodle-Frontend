import { Box, Button, TextField,Card, CardActionArea,CardContent, CardMedia, Grid, Typography } from '@mui/material';
import SidebarComp from '../../Components/Sidebar/SidebarComp';
// import { useNavigate } from 'react-router-dom';
import {  useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import { AUTH_BASE_URL } from '../../utils/api/api';




const InsAccount = () => {
  const [pass,setPass]=useState(false)
  const api = useAxios()
  const [formData,setFormData] = useState({
    old_password:"",
    new_password:""
  })

  const handleChange = (e) => {
    const {name,value} = e.target
    setFormData({
      ...formData,
      [name]:value
    })
  };
  const handleSubmit = async () => {
    const response = await api.patch(AUTH_BASE_URL + "user/change-password/",formData);
    if response

  }
  console.log(formData);
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
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Card elevation={4}>
              <CardActionArea onClick={() => setPass(true)}>
                <CardMedia
                  loading="lazy"
                  component="img"
                  image="/src/assets/images/change-password.png"
                  title="change-password"
                  style={{ objectFit: "contain" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Change Password
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card elevation={4}>
              <CardActionArea>
                <CardMedia
                  loading="lazy"
                  component="img"
                  image="/src/assets/images/delete-account.png"
                  title="delete-account"
                  style={{ objectFit: "contain" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Delete Account
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        {pass ? (
          <Card
            sx={{
              width: 400,
              position: "absolute",
              backgroundColor: "#ffff",
              top: "20%",
              left: "35%",
            }}
          >
              <form onSubmit={handleSubmit}>
            <CardContent>
              <CardMedia
                height={200}
                width={10}
                component={"img"}
                style={{ objectFit: "contain" }}
                src="/src/assets/images/shield.png"
              />
              <Typography>Reset Password</Typography>
                
              <TextField
                id="outlined-basic"
                label="Old Password"
                type="text"
                variant="outlined"
                value={formData && formData.old_password}
                name="old_password"
                fullWidth
                margin="normal"
                onChange={handleChange}
              />
              <TextField
                id="outlined-basic"
                label="New Password"
                type="text"
                variant="outlined"
                name="new_password"
                value={formData && formData.new_password}
                fullWidth
                margin="normal"
                onChange={handleChange}
              />
              <Button onClick={() => setPass(false)} sx={{ marginLeft: 27 }}>
                Close
              </Button>
              <Button type="submit">Update</Button>
            </CardContent>
        </form>
          </Card>
        ) : null}
      </SidebarComp>
    </div>
  );
}

export default InsAccount