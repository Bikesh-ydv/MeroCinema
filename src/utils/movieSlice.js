import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState: {
        nowPlayingMovie :null,
        trailerVideo: null,
        popularMovie:null,
        topRatedMovie: null,
        upcomingMovie: null,
    },
    reducers:{
        addNowplayingMovie:(state,action)=>{
         state.nowPlayingMovie = action.payload;
        },
        addTrailerVideo:(state,action)=>{
         state.trailerVideo = action.payload;
        },
        addPopularMovie:(state,action)=>{
            state.popularMovie = action.payload;
           },
           addTopRatedMovie:(state,action)=>{
            state.topRatedMovie = action.payload;
           },
           addUpcomingMovie:(state,action)=>{
            state.upcomingMovie = action.payload;
           },
    }

});

export const {addNowplayingMovie, addTrailerVideo, addPopularMovie, addTopRatedMovie, addUpcomingMovie} = movieSlice.actions;
export default movieSlice.reducer;