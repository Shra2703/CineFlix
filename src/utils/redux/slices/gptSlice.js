import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showSearch: false
    },
    reducers:{
        toggleGptSearch: (state) => {
            state.showSearch = !state.showSearch
        }
    }
});

export const {toggleGptSearch} = gptSlice.actions;
export default gptSlice.reducer;