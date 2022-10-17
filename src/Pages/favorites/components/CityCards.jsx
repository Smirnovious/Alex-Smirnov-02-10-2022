import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { isLoadingFavorites, removeFavorite } from '../../../redux/slices/favoritesSlice'
import Loading from '../../Loading'
import { useNavigate } from 'react-router-dom'

const API = 'xj9aLa2hN5AeujVcNIpcmEtsZ7b7GbyQ'


const CityCards = () => {
    const {favoriteCities} = useSelector(state => state.favorites)
    const {isLoading} = useSelector(state => state.favorites)
    const dispatch = useDispatch()
    const [FavCitiesTemps, setFavCitiesTemps] = useState([]) 
    const isMetric = useSelector(state => state.forecast.isMetric)
    const navigate = useNavigate()
    useEffect(() => {
      fetchFavCitiesWeather()
    }, [])

    const fetchFavCitiesWeather = async () => {
      dispatch(isLoadingFavorites(true))
      const favTemps = {}
      for (let favoriteCity of favoriteCities) {
        const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${favoriteCity.id}?apikey=${API}`)
        const weatherObj = await response.json()
        favTemps[favoriteCity.id] = weatherObj[0]
      }
      setFavCitiesTemps(favTemps)
      dispatch(isLoadingFavorites(false))
    }

 
    // Rendering 
    if(favoriteCities.length === 0) {
      return (
        <div className="flex justify-center items-center h-full">
          <p className="text-5xl dark:text-amber-200">No favorites yet</p>
        </div>
      )
    } else if(isLoading) { 
      return <Loading />
    } else {
  return (
    <div className='flex flex-row items-center justify-center'>
    {favoriteCities.map((favorite, index) => (
          <div key={index} className='flex flex-col m-2 justify-between items-center bg-slate-700 
          text-white rounded-xl h-32 w-40 dark:bg-amber-200 dark:text-black'>
          <p className='text-3xl'>{favorite.name}</p>
          <p className='text-4xl'>{isMetric ? Math.floor(FavCitiesTemps[favorite.id]?.Temperature.Metric.Value) :  Math.floor(FavCitiesTemps[favorite.id]?.Temperature.Imperial.Value)}°</p>
          <button className="font-bold text-red-500" onClick={() => dispatch(removeFavorite(favorite))}>Remove</button>
          </div>
        
    ))}
    </div>
  )
}
}

export default CityCards