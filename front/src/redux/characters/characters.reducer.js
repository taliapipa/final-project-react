// characters.reducer.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchCharacter = createAsyncThunk('characters/fetchCharacter', async () => {
  const response = await fetch('https://64afad70c60b8f941af4648d.mockapi.io/users');
  const data = await response.json();
  return data;
});

const characterSlice = createSlice({
  name: "characters",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacter.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchCharacter.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default characterSlice.reducer;

