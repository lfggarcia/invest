import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    alerts: '',
  },
  reducers: {
    updAlert: (state, action) => {
      state.alerts = action.payload;
    },
    clearAlerts: state => {
      state.alerts = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const {clearAlerts, updAlert} = authSlice.actions;

export default authSlice.reducer;
