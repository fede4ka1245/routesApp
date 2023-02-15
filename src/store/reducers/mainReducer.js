import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  friends: []
};

const mainReducer = createSlice({
  name: "mainReducer",
  initialState,
  reducers: {
    setFriends: (state, action) => {
      state.friends = action.payload;
    }
  }
});

export const { setFriends } = mainReducer.actions;
export default mainReducer.reducer;