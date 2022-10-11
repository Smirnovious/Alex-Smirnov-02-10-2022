import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const Forecast = createAsyncThunk(

const initialState = {
  forecast: {},
}



export const forecastSlice = createSlice({
  name: 'forecastSlice',
  initialState,
  reducers: {
    getForecast: (state, action) => {
      state.forecast = action.payload
    },
    getFiveDayForecast: (state, action) => {
      state.forecast = action.payload
    },
  },
})



export const { getForecast, getFiveDayForecast } = forecastSlice.actions

export default forecastSlice.reducer 