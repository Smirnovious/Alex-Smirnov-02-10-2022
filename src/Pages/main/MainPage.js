import React, { useEffect } from 'react'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import Weather5DayForecast from './components/Weather5DayForecast'
import WeatherPanel from './components/WeatherPanel'
const API = 'QcpZQ2HRLYqJe0dobhTOQL7fAYwWWmKm'

const MainPage = () => {
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/215854?apikey=${API}`)
      const data = await response.json()
      console.log(data)
    }
    getData()
  }, [])

  return (
    <div className='bg-slate-100'>
    <NavBar/>
    <SearchBar/>
    <WeatherPanel/>
    <Weather5DayForecast/>
    </div>
  )
}

export default MainPage