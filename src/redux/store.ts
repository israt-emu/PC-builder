import {configureStore} from "@reduxjs/toolkit";
import pcBuilderSlice from "./pcBuilder/pcBuilderSlice";

const store = configureStore({
  reducer: {
    pcBuilder: pcBuilderSlice,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
