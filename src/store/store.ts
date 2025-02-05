import { configureStore } from '@reduxjs/toolkit';
// import SliderSlice from '@/features/slices/SliderSlice';
import { panelReducer, notesReducer } from '@/features/slices';

export const store = configureStore({
  reducer: {
    panel: panelReducer,
    notes: notesReducer
    // active: ActiveReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch