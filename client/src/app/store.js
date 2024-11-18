import { configureStore } from "@reduxjs/toolkit";
import rootRedcuer from "./rootReducer";
import { authApi } from "@/features/api/authApi";



export const appStore = configureStore({
  reducer: rootRedcuer,
  middleware:(defaultMiddleware) => defaultMiddleware().concat(authApi.middleware)
});

