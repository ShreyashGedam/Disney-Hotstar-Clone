import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: null,
  error: null,
  recommend: null,
  newDisney: null,
  original: null,
  trending: null,
};

export const newMovies = createAsyncThunk(
  "disney/new",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.get("https://disney-backend-k5ak.onrender.com/disney/new");
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const originalMovies = createAsyncThunk(
  "disney/original",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.get("https://disney-backend-k5ak.onrender.com/disney/original");
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const reccommendMovies = createAsyncThunk(
  "disney/reccommend",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.get("https://disney-backend-k5ak.onrender.com/disney/reccommend");
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const trendingMovies = createAsyncThunk(
  "disney/trending",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.get("https://disney-backend-k5ak.onrender.com/disney/trending");
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

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
  extraReducers(builder) {
    builder
      .addCase(newMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(newMovies.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.newDisney = payload;
      })
      .addCase(newMovies.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(originalMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(originalMovies.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.original = payload;
      })
      .addCase(originalMovies.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(reccommendMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(reccommendMovies.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.recommend = payload;
      })
      .addCase(reccommendMovies.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(trendingMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(trendingMovies.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.trending = payload;
      })
      .addCase(trendingMovies.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export const { setMovies } = movieSlice.actions;

export default movieSlice.reducer;
