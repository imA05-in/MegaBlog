import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: false,
         userData: null,
    },
    reducers:{
        toggleloginStatus: function (state, action){
            state.status = true;
             state.userData = action.payload;
        },
        togglelogoutStatus: function (state,action){
            state.status = false
            state.userData = null
        }
    }
})

export default authSlice.reducer

export const {toggleloginStatus, togglelogoutStatus} = authSlice.actions