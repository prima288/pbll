import { configureStore } from "@reduxjs/toolkit";

import carslice from "./slices/cartSlice";

const store = configureStore({
    reducer: {
        cart: carslice,
    },
});

export default store;
