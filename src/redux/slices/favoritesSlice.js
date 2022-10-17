import { createSlice} from '@reduxjs/toolkit'
import { loadState } from '../../utils/loadFavorites'

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoriteCities: loadState(),
    isLoading: false
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteCities.push(action.payload)
      localStorage.setItem('favorites', JSON.stringify(state.favoriteCities))
    },
    removeFavorite: (state, action) => {
      state.favoriteCities = state.favoriteCities.filter(city => city.id !== action.payload.id)
      localStorage.setItem('favorites', JSON.stringify(state.favoriteCities))
    },
    isLoadingFavorites: (state) => {
      state.isLoading = !state.isLoading
    }
  },
})

export default favoritesSlice.reducer
export const { addFavorite, removeFavorite, isLoadingFavorites } = favoritesSlice.actions