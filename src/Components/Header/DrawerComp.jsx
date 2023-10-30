import { Button, Drawer,IconButton,List, ListItem, } from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material';
const DrawerComp = () => {
  const theme = useTheme()

  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <>
      <Drawer open={openDrawer} anchor={'right'}
      onClose={()=>setOpenDrawer(false)}
      >
        <List>
          <ListItem>
            <Button  style={{width:"100%",color:theme.palette.primary.main,borderColor:theme.palette.primary.main,marginLeft:'auto',marginRight:"10px"}} variant="outlined">Login</Button>
          </ListItem>
          <ListItem>
            <Button style={{color:"#ffff",backgroundColor:theme.palette.primary.main}} color={'primary'} variant="elevated">Create an Account</Button>
          </ListItem>
        </List>
      </Drawer>
      <IconButton sx={{color:"black",marginLeft:'auto'}} onClick={()=>setOpenDrawer(!openDrawer)}>
        <MenuIcon/> 
      </IconButton>
    </>
  )
}

export default DrawerComp