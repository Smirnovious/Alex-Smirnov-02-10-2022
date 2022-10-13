import React, { useEffect } from 'react'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import Weather5DayForecast from './components/Weather5DayForecast'
import WeatherPanel from './components/WeatherPanel'
import { useDispatch } from 'react-redux'
import { getWeather, get5DayForecast } from '../../redux/slices/forecastSlice'

const MainPage = () => {

  const dispatch = useDispatch()
    useEffect(() => {
    dispatch(getWeather('215854'))
    dispatch(get5DayForecast('215854'))
    }, []) 



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