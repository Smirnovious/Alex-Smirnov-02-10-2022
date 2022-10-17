import React from 'react'
import NavBar from './main/components/NavBar'
import SearchBar from './main/components/SearchBar'
import Weather5DayForecast from './main/components/Weather5DayForecast'
import WeatherPanel from './main/components/WeatherPanel'

// This Page is for the Favorite Cities Render Via Params 
const WeatherFavPage = () => {
  return (
    <div className='bg-gray-50 h-full lg:h-screen dark:bg-gray-800'> 
    <NavBar/>
    <SearchBar/>
    <WeatherPanel/>
    <Weather5DayForecast/>
    </div>
  )
}



export default WeatherFavPage