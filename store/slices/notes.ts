import { createSlice } from "@reduxjs/toolkit";
import { NotesSlice } from "@/types";

const initialState: NotesSlice = {
    noteData: [{id: ''  , text: ''}],
};

export const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        createNewNote: (state, action)=> {
            state.noteData = action.payload;
            // console.log(state, action.payload)
        }
    }
});

export const notesActions = notesSlice.actions;

export default notesSlice.reducer;