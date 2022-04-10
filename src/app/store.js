// Author: @devangs

import { configureStore } from "@reduxjs/toolkit";dd
import carReducer from "../features/car/carSlice";

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
