// Package Imports
import { combineReducers } from "@reduxjs/toolkit";


const appReducer = combineReducers({

});

export type RootState = ReturnType<typeof appReducer>;
export default appReducer;