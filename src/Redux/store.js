import { configureStore } from "@reduxjs/toolkit";
import bookingSlice from "./states/BookingState";

const store = configureStore({
    reducer: {
        bookingState: bookingSlice.reducer
    }
});

export default store;
