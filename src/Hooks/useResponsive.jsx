import {  useMediaQuery, useTheme } from '@mui/material'

const useResponsive = (breakpoint) => {
     const theme = useTheme();
     return useMediaQuery(theme.breakpoints.down(breakpoint));
}

export default useResponsive