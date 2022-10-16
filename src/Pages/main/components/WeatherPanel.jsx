import React, {useEffect} from 'react'
import Loading from './Loading'
import { useSelector, useDispatch } from 'react-redux'
import {BsHeart} from 'react-icons/bs'
import { BsHeartFill } from 'react-icons/bs'
import { fetchCurrentWeather, setCity } from '../../../redux/slices/forecastSlice'
import { addFavorite, removeFavorite } from '../../../redux/slices/favoritesSlice'
import { iconPicker } from '../../../utils/iconPicker'

const WeatherPanel = () => {  
    const dispatch = useDispatch()
    const {favoriteCities} = useSelector(state => state.favorites)
    const {currentWeather} = useSelector(state => state.forecast)
    const location = useSelector(state => state.forecast.location)
    const city = useSelector(state => state.forecast.city)
    const isMetric = useSelector(state => state.forecast.isMetric)

    useEffect(() => {
      dispatch(fetchCurrentWeather('215854'))
      dispatch(setCity('Tel Aviv'))
    }, [dispatch])
      
  if (!currentWeather) {
    return <Loading />
  } else {
  return (
  <div className="flex flex-col w-1/2 mx-auto rounded-2xl mt-2">
    <div className="flex flex-row">
    {favoriteCities.some(favorite => favorite.id === location.id) ?
    <BsHeartFill className="text-amber-500 text-2xl m-2" onClick={() => dispatch(removeFavorite(location))} /> :
    <BsHeart className="text-amber-500 text-2xl m-2" onClick={() => dispatch(addFavorite(location))} />
    }
      </div>
      <p className='mx-auto text-5xl mt-4 font-bold dark:text-amber-200'>{city}</p>
        <div className="flex flex-row justify-between">
          <p className='text-black text-8xl dark:text-amber-200'>{iconPicker(currentWeather.WeatherIcon)}</p>
          <p className='text-4xl my-auto font-bold  dark:text-amber-200'>{currentWeather.WeatherText}</p>
          <p className='text-6xl my-auto font-bold dark:text-amber-200'>{isMetric ? Math.floor(currentWeather.Temperature.Metric.Value) :  Math.floor(currentWeather.Temperature.Imperial.Value)}°</p>
        </div>  
  </div>
  )
  }
}


export default WeatherPanel

