import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState: {
        nowPlayingMovie :null,
    },
    reducers:{
        addNowplayingMovie:(state,action)=>{
         state.nowPlayingMovie = action.payload;
        },
    }

});

export const {addNowplayingMovie} = movieSlice.actions;
export default movieSlice.reducer;