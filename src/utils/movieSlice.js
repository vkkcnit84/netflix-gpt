import { createSlice } from "@reduxjs/toolkit"


const movieSlice = createSlice({
    initialState: { 
        nowPlayingMovie: null,
        nowPlayingMovieTrailer: null
    },
    name: 'Movie',
    reducers: {
            nowPlayingMovie: (state, action) => {
                state.nowPlayingMovie = action.payload
            },
            nowPlayingMovieTrailer: (state, action) => {
                state.nowPlayingMovieTrailer = action.payload
            }
        },
      
})

export const { nowPlayingMovie, nowPlayingMovieTrailer } = movieSlice.actions
export default movieSlice.reducer;