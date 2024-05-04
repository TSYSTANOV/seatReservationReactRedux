import {configureStore} from '@reduxjs/toolkit'
import passengers from './passengersReducer'
import tourSlice from './tourSlice'
const store = configureStore({
    reducer:{
        passengers:passengers,
        tours:tourSlice
    }
})
export {store}