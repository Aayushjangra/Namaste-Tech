import { configureStore } from "@reduxjs/toolkit";
import rootRedcuer from "./rootReducer";
import { authApi } from "@/features/api/authApi";



export const appStore = configureStore({
  reducer: rootRedcuer,
  middleware:(defaultMiddleware) => defaultMiddleware().concat(authApi.middleware)
});


//load hone pe data lost nhi hoga store ka
const initializeApp = async () => {
  await appStore.dispatch(authApi.endpoints.loadUser.initiate({},{forceRefetch:true}))
}
initializeApp();
