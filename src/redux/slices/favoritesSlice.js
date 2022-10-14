import { createSlice} from '@reduxjs/toolkit'
import { loadFavorites } from '../../utils/loadFavorites'

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: loadFavorites(),
  reducers: {
    addFavorite: (state, action) => {
      state.push(action.payload)
    },
    removeFavorite: (state, action) => {
      return state.filter((city) => city.cityKey !== action.payload)
    },
  },
})

export default favoritesSlice.reducer
export const { addFavorite, removeFavorite } = favoritesSlice.actions