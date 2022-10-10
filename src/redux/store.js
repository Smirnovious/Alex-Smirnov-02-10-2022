import { configureStore } from '@reduxjs/toolkit'
import forecastReducer from './slices/forecastSlice.js'

export default configureStore({
  reducer: {
    forecast: forecastReducer,
  },
})

