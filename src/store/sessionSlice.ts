
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SessionState {
  sessionType: 'chat' | 'video' | 'inperson' | null;
  therapyType: 'individual' | 'couples' | 'family' | null;
  selectedDate: string | null;
  selectedTime: string | null;
}

const initialState: SessionState = {
  sessionType: null,
  therapyType: null,
  selectedDate: null,
  selectedTime: null
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setSessionType: (state, action: PayloadAction<'chat' | 'video' | 'inperson' | null>) => {
      state.sessionType = action.payload;
    },
    setTherapyType: (state, action: PayloadAction<'individual' | 'couples' | 'family' | null>) => {
      state.therapyType = action.payload;
    },
    setSelectedDate: (state, action: PayloadAction<string | null>) => {
      state.selectedDate = action.payload;
    },
    setSelectedTime: (state, action: PayloadAction<string | null>) => {
      state.selectedTime = action.payload;
    },
    resetSessionState: (state) => {
      state.sessionType = null;
      state.therapyType = null;
      state.selectedDate = null;
      state.selectedTime = null;
    }
  }
});

export const { 
  setSessionType, 
  setTherapyType, 
  setSelectedDate, 
  setSelectedTime,
  resetSessionState
} = sessionSlice.actions;
export default sessionSlice.reducer;
