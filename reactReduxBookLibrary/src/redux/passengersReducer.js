import { createSlice } from "@reduxjs/toolkit";

const initialStore = [];

const passengers = createSlice({
  name: "passengers",
  initialState: initialStore,
  reducers: {
    addPassengers(state, action) {
      return [...action.payload];
    },
    editPassngers(state, action) {
      state.forEach((item) => {
        if (item.id === action.payload.id) {
          item[action.payload.param] = action.payload.value;
        }
      });
    },
    correctPassenger(state, action) {
      state.forEach((item) => {
        if (item.id === action.payload) {
          if (item.name && item.ticket) {
            item.correct = true;
          }
        }
      });
    },
    addSeatPlaces(state, action) {
      for (let i = 0; i < state.length; i++) {
        let item = state[i];
        if (!action.payload.checked) {
          if (item.seatPlace === action.payload.place) {
            item.seatPlace = "";
          }
        } else {
          if (!item.seatPlace) {
            item.seatPlace = action.payload.place;
            break;
          }
        }
      }
    },
  },
});
export const { addPassengers, editPassngers, correctPassenger, addSeatPlaces } =
  passengers.actions;
export default passengers.reducer;
