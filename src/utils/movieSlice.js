import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState: {
        nowPlayingMovie :null,
        trailerVideo: null,
        popularMovie:null,
        topRatedMovie: null,
        upcomingMovie: null,
        trendingMovie: null,
        actionMovie: null,
        horrorMovie:null,
        documentaryMovie:null,
        comedyMovie:null,
        animationMovie:null,
        romanceMovie:null,
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
           addTrendingMovie:(state,action)=>{
            state.trendingMovie = action.payload;
           },
           addActionMovie:(state,action)=>{
            state.actionMovie = action.payload;
           },
           addHorrorMovie:(state,action)=>{
            state.horrorMovie = action.payload;
           },
           addComedyMovie:(state,action)=>{
            state.comedyMovie = action.payload;
           },
           addAnimationMovie:(state,action)=>{
            state.animationMovie = action.payload;
           },
           addDocumentaryMovie:(state,action)=>{
            state.documentaryMovie = action.payload;
           },
           addRomanceMovie:(state,action)=>{
            state.romanceMovie = action.payload;
           },
    }

});

export const {addNowplayingMovie, addTrailerVideo, addPopularMovie, addTopRatedMovie, addUpcomingMovie, addTrendingMovie,addActionMovie,addComedyMovie,addAnimationMovie,addDocumentaryMovie,addHorrorMovie,addRomanceMovie} = movieSlice.actions;
export default movieSlice.reducer;