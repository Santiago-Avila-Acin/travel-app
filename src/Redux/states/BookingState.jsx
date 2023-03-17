import { createSlice } from "@reduxjs/toolkit";

const BookingEmptyState = [];

const bookingSlice = createSlice({
    name: "place",
    initialState: BookingEmptyState,
    reducers: {
        createBooking: (state, action) => {
            state.push(action.payload);
        },
        removeBooking: (state, action) => {
        return false;
        },
    },
});

export default bookingSlice;
export const { createBooking, removeBooking } = bookingSlice.actions;
