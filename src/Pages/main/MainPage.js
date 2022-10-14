import React from 'react'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import SearchBarNew from './components/SearchBarNew'
import Weather5DayForecast from './components/Weather5DayForecast'
import WeatherPanel from './components/WeatherPanel'


const MainPage = () => {
  return (
    <div className='bg-gray-50 h-screen dark:bg-gray-800 '> 
    <NavBar/>
    <SearchBarNew/>
    <WeatherPanel/>
    <Weather5DayForecast />
    </div>
  )
}

export default MainPage