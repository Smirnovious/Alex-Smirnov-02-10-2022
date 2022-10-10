import { createSlice} from '@reduxjs/toolkit'

const initialState = {
  forecast: {},
}

export const forecastSlice = createSlice({
  name: 'forecastSlice',
  initialState,
  reducers: {
    getLocation: (state, action) => {
      state.forecast = action.payload
    },
    getForecast: (state, action) => {
      state.forecast = action.payload
    },
    getFiveDayForecast: (state, action) => {
      state.forecast = action.payload
    },
  },
})



export const { getForecast, getFiveDayForecast, getLocation } = forecastSlice.actions

export default forecastSlice.reducer 