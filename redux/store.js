import { configureStore } from "@reduxjs/toolkit";
import detailsReducer from './parentSlice'

const store = configureStore({
  reducer: {
    details: detailsReducer,
  },
});

export default store;
