import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import SidebarComp from '../../Components/Sidebar/SidebarComp';
import { useNavigate } from 'react-router-dom';

const InsAccount = () => {

  const navigate = useNavigate()
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
            <Card>
              <CardActionArea onClick={()=>navigate("/institute/account/change-password")}>
              <CardMedia
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
            <Card>
              <CardActionArea onClick={()=>navigate("/institute/account/delete-account")}>
              <CardMedia
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
      </SidebarComp>
    </div>
  );
}

export default InsAccount