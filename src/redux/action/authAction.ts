import { createAsyncThunk } from "@reduxjs/toolkit";


export const userDetails = createAsyncThunk(
  "userDetails",
  async (user: any, thunkAPI) => {
    try {
      const data = user
      if (data) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.data);
    }
  }
);
