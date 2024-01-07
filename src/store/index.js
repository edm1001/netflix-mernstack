import {
    configureStore,
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";

import axios from "axios";
import { TMBD_BASE_URL, API_KEY } from "../utils/constants";

const initialState = {
    movies: [],
    genresLoaded: false,
    genres: [],
};

export const getGenres = createAsyncThunk("netflix/genres", async () => {
    const { data: {genres} } = await axios.get(
        `${TMBD_BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
    return genres
});

const getRawData = async(api,genres, paging) => {
    const moviesArray = [];
    for (let i = 1; moviesArray.length < 60 && i < 10 ; i++) {
        const {data: results} = await axios.get(`${api}${paging ? `&page=${i}` : ""}`)        
    }
}

export const fetchMovies = createAsyncThunk("netflix/trending", async ({type}, thunkAPI) => {
    const { netflix: {genres}} = thunkAPI.getState();
    return getRawData(`${TMBD_BASE_URL}/trending${type}/week?api_key=${API_KEY}`,
    genres,
    true
    )
})
// return getRawData(`${TMBD_BASE_URL}/discover/${type}?api_key=${API_KEY}&with_genres=${genre}`)

const NetflixSlice = createSlice({
    name: "Netflix",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getGenres.fulfilled,(state, action) =>  {
            state.genres = action.payload;
            state.genresLoaded = true;
        });
    }
});

export const store = configureStore({
    reducer: {
        netflix: NetflixSlice.reducer
    }
})