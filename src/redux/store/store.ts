import { 
    AnyAction, configureStore, Reducer } from "@reduxjs/toolkit";
  import storage from "redux-persist/lib/storage";
  import { persistReducer } from "redux-persist";
  import thunk from "redux-thunk";
  import appReducer, { RootState } from "./rootReducer";
  import { AppStateStores } from "./appStateService";
  
  const persistConfig = {
    key: AppStateStores.APP_STATE,
    storage,
  };
  
  const RootReducer:Reducer =  (state:RootState, action: AnyAction)=> {
      // eslint-disable-next-line eqeqeq
      if (action.type == "api/logout/fulfilled") {
        state = {} as RootState
      }
      return appReducer(state, action);
    }
  
   const persistedReducer = persistReducer(persistConfig, RootReducer);
  
  const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk],
  });
  
  export default store;
  