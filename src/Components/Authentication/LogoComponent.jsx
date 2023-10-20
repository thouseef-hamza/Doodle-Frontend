import { Typography } from '@mui/material'
import useResponsive from '../../Hooks/useResponsive'

const LogoComponent = () => {
     const isMobile = useResponsive('sm')
  return (
    <>
     <Typography sx={{fontSize:isMobile ?  "50px" : "55px"}} margin={0}>
          <span style={{color:"#8338EC",fontFamily:'Montserrat'}}>:D</span>
          <span style={{color:"#FFBE0B",fontFamily:'Montserrat'}}>o</span>
          <span style={{color:"#FB5607",fontFamily:'Montserrat'}}>o</span>
          <span style={{color:"#8338EC",fontFamily:'Montserrat'}}>d</span>
          <span style={{color:"#FF006E",fontFamily:'Montserrat'}}>l</span>
          <span style={{color:"#13C2C2",fontFamily:'Montserrat'}}>e</span>
     </Typography>
    
    </>
  )
}

export default LogoComponent