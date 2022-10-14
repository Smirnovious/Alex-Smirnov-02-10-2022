import React from 'react'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import SearchBarNew from './components/SearchBarNew'
import Weather5DayForecast from './components/Weather5DayForecast'
import WeatherPanel from './components/WeatherPanel'


const MainPage = () => {
  return (
    <div className='bg-cyan-400 dark:bg-gray-800 h-screen'> 
    <NavBar/>
    <SearchBarNew/>
    <WeatherPanel/>
    <Weather5DayForecast />
    </div>
  )
}

export default MainPage