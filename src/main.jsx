import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/AuthContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { theme } from './Theme/muiTheme.jsx'
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { store } from './Redux/store.jsx'
import { Provider } from 'react-redux'
// import { StrictMode } from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
  <BrowserRouter>
    <AuthProvider>
    <Provider store={store}>
      {/* <StrictMode> */}
      <App />
      {/* </StrictMode> */}
    </Provider>
    </AuthProvider>
  </BrowserRouter>
  </LocalizationProvider>
  </ThemeProvider>
) 
  