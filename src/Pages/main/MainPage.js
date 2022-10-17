import React, {useEffect} from 'react'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import Weather5DayForecast from './components/Weather5DayForecast'
import WeatherPanel from './components/WeatherPanel'
import { useDispatch } from 'react-redux'
import { fetchWeatherByGeoLocation } from '../../redux/slices/forecastSlice'

const MainPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
     navigator.geolocation.getCurrentPosition(position => {
        dispatch(fetchWeatherByGeoLocation(position.coords.latitude, position.coords.longitude))
      }
    )
  }, [dispatch])
      
  return (
    <div className='bg-gray-50 h-full lg:h-screen dark:bg-gray-800'> 
    <NavBar/>
    <SearchBar/>
    <WeatherPanel/>
    <Weather5DayForecast />
    </div>
  )
}

export default MainPage