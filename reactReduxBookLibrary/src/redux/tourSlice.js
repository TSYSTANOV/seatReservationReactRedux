import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { API_component } from "../components/API";

const initialStore = []

export const asyncThunkForTourSlice = createAsyncThunk(
    'add/Tours',
    async (url, thunkApi) => {
        const data = await API_component.getData()
        return data
    }
)
const tourSlice = createSlice({
    name:'tours',
    initialState:initialStore,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(asyncThunkForTourSlice.fulfilled, (state,action)=>{
            return [...action.payload]
        })
    }
})
export default tourSlice.reducer