import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Stock} from '@types/stock';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    alerts: '[]',
  },
  reducers: {
    addAlert: (state, action: PayloadAction<Stock>) => {
      const jsonAlerts: Stock[] = JSON.parse(state.alerts);
      const exist = jsonAlerts.findIndex(({value}) => action.payload === value);

      if (exist >= 0) {
        jsonAlerts[exist] = action.payload;
      } else {
        jsonAlerts.push(action.payload);
      }

      state.alerts = JSON.stringify(jsonAlerts);
    },
    removeAlert: (state, action: PayloadAction<Stock>) => {
      const jsonAlerts: Stock[] = JSON.parse(state.alerts);
      const newAlerts = jsonAlerts.filter(
        stock => stock.value !== action.payload.value,
      );
      state.alerts = JSON.stringify(newAlerts);
    },
    clearAlerts: state => {
      state.alerts = '[]';
    },
  },
});

// Action creators are generated for each case reducer function
export const {clearAlerts, addAlert, removeAlert} = authSlice.actions;

export default authSlice.reducer;
