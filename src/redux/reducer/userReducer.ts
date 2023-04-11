import { createSlice } from "@reduxjs/toolkit";
import {
  fulfilledState,
  rejectedState,
  pendingState,
  resetState,
  errorState,
} from "../../utility/stateUtil";
import { AppStateService } from "../store/appStateService";
import { userDetails } from "../action/authAction";
import { AuthState } from "../state/user/authState";
import { RootState } from "../store/rootReducer";
const initialState: AuthState = {
  isUserAuth: false,
  user: [],
  appVersion: '',
  formState: resetState(),
  authErrMsg:''
};

export const UserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    clearUserState: (state) => {
      state.formState = resetState();
      state.user = [];
      state.isUserAuth = false;
      return state;
    },

    clearUserOnSignOut: (state) => {
      state.user = [];
      state.isUserAuth = false;
      return state;
    },
  
  },
  extraReducers: {
    [userDetails.fulfilled.toString()]: (state, { payload }) => {
      state.user = payload;
      state.isUserAuth = true;
      state.authErrMsg = payload?.error !== undefined ? payload : [];
      if (state.user) {
        state.formState = fulfilledState();
      } else {
        state.formState = errorState(payload.errorMsg);
      }
      return state;
    }
    ,
    [userDetails.pending.toString()]: (state) => {
      state.formState = pendingState();
    },
    [userDetails.rejected.toString()]: (state) => {
      state.formState = rejectedState();
    },
   
  },
});

export const { clearUserState,clearUserOnSignOut } = UserSlice.actions;
export const userStateSelector = (state: RootState) => state.user;
export default UserSlice.reducer;
