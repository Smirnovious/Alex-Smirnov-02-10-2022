import React, { useEffect } from 'react'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import Weather5DayForecast from './components/Weather5DayForecast'
import WeatherPanel from './components/WeatherPanel'
import { useSelector, useDispatch } from 'react-redux'
import { getCity, getWeather, get5DayForecast } from '../../redux/slices/forecastSlice'

const MainPage = () => {
  const dispatch = useDispatch()
  const city = useSelector(state => state.forecast.city)
  const weather = useSelector(state => state.forecast.weather)
  const fiveDayForecast = useSelector(state => state.forecast.fiveDayForecast)
  
  
  useEffect(() => {
    dispatch(getCity())
    dispatch(getWeather(city))
    dispatch(get5DayForecast(city))
  }, [city, dispatch])
   


  return (
    <div className='bg-cyan-400 dark:bg-gray-800 h-screen'> 
    <NavBar/>
    <SearchBar/>
    <WeatherPanel/>
    <Weather5DayForecast />
    </div>
  )
}

export default MainPage