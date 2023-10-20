import {createSlice} from '@reduxjs/toolkit'


const initialState = {
     isAuthenticated: false,
     user: null,
     loading:false,
     registered:false,

}

const authSlice = createSlice({
     name:'auth',
     initialState,
     reducers:{
          resetRegistered: state => {
               state.registered = false;
          }
     },
})

export const { resetRegistered } = authSlice.actions
export default authSlice.reducer