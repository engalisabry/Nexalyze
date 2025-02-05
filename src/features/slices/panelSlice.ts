import { ControlPanelSliceTypes } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ControlPanelSliceTypes = {
    isVisibleStatus: true,
    sliderValueNumber: 25,
    sourceBoxData: {
      label: 'books',
    }
};

export const panelSlice = createSlice({
    name: 'control-panel',
    initialState,
    reducers: {
        switchVisibleStatus: (state)=> {
          state.isVisibleStatus = !state.isVisibleStatus
        },
        
        changeSliderValueNumber: (state, action) => {
          state.sliderValueNumber = action.payload
        },

        sourceBoxData: (state, action)=> {
           state.sourceBoxData = {
            label: action.payload.label,
           }
        },
    }
});


export const panelActions = panelSlice.actions;

export default panelSlice.reducer;
