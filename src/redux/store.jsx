import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import productReducer from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    product: productReducer,
  },
});

export default store;
