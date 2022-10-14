import { configureStore } from '@reduxjs/toolkit'
import forecastReducer from './slices/forecastSlice.js'
import favoritesReducer from './slices/favoritesSlice.js'
import autoCompleteReducer from './slices/autoCompleteSlice.jsx'
export default configureStore({
  reducer: {
    forecast: forecastReducer,
    favorites: favoritesReducer,
    autoComplete: autoCompleteReducer,
  },
})

