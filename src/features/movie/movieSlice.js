import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: null,
  newDisney: null,
  original: null,
  trending: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, { payload }) => {
      state.recommend = payload.recommend;
      state.newDisney = payload.newDisney;
      state.original = payload.original;
      state.trending = payload.trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export default movieSlice.reducer;
