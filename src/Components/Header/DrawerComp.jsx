import { Button, Drawer,IconButton,List, ListItem, } from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Colors from '../../assets/Colors/Colors';
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <>
      <Drawer open={openDrawer} anchor={'right'}
      onClose={()=>setOpenDrawer(false)}
      >
        <List>
          <ListItem>
            <Button  style={{width:"100%",color:Colors.primary_color,borderColor:Colors.primary_color,marginLeft:'auto',marginRight:"10px"}} variant="outlined">Login</Button>
          </ListItem>
          <ListItem>
            <Button style={{color:"#ffff",backgroundColor:Colors.primary_color}} variant="elevated">Create an Account</Button>
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