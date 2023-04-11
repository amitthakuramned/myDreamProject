// Package Imports
import { combineReducers } from "@reduxjs/toolkit";
import UserReducer from "../reducer/userReducer";

const appReducer = combineReducers({
    user: UserReducer,
});

export type RootState = ReturnType<typeof appReducer>;
export default appReducer;