import { createSlice } from "@reduxjs/toolkit";

const initialStore = []

const passengers = createSlice({
    name:'passengers',
    initialState : initialStore,
    reducers:{
        addPassengers(state, action){
            return [...action.payload]
        },
        editPassngers(state, action){
            state.forEach((item)=>{
                if(item.id === action.payload.id){
                    item[action.payload.param] = action.payload.value
                }
              })
        }
    }
})
export const {addPassengers, editPassngers} = passengers.actions
export default passengers.reducer