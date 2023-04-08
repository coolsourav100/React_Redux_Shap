import { createStore } from "redux";
import { createSlice , configureStore } from "@reduxjs/toolkit";

const initialState = {counter : 0 , showCounter : true}
const authSatate = {isLoggIn: false}
const counterSlice =  createSlice({
    name : 'counter',
    initialState : initialState ,
    reducers : {
        increment(state){
            state.counter++
        },
        drecement(state){
            state.counter--
        },
        increase(state,action){
            state.counter = state.counter + action.payload
        },
        toggeleCounter(state){
            state.showCounter = ! state.showCounter
        }
    }


})

const authSlice = createSlice({
    name:'authSlice',
    initialState: authSatate,
    reducers:{
        login(state){
            state.isLoggIn = true
        },
        logout(state){
            state.isLoggIn = false
        }
    }
})




const store = configureStore({
    reducer: {
       counter: counterSlice.reducer,
      auth:  authSlice.reducer
    }
})

export const counterAction = counterSlice.actions
export const authAction = authSlice.actions
export default store
