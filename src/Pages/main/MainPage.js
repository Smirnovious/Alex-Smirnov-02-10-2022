import React, { useEffect, useState } from 'react'
import FahrenheitToCelsius from './components/FahrenheitToCelsius'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import Weather5DayForecast from './components/Weather5DayForecast'
import WeatherPanel from './components/WeatherPanel'
const API = 'QcpZQ2HRLYqJe0dobhTOQL7fAYwWWmKm'

const MainPage = () => {
const [darkMode, setDarkMode] = useState(false) 

  // useEffect(() => {
  //   const getWeather = async () => {
  //     const response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=${API}&metric=true`)
  //     const data = await response.json()
  //     console.log(data)
  //   }
  //   getWeather()
  // }, [])

  //   const getCity = async () => {
  //     const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API}&q=Tel%20Aviv`)
  //     const data = await response.json()
  //     console.log(data)
  //   }
  //   getCity()

    


  return (
    <div className='bg-gradient-to-bl from-blue-100 via-blue-300 to-blue-500'>
    <NavBar/>
     <label class="toggleDarkBtn">
        <input type="checkbox" onClick={() => setDarkMode(!darkMode)} />
        <span class="slideBtnTg round"></span>
      </label>
    <SearchBar/>
    <WeatherPanel/>
    <Weather5DayForecast/>
    <FahrenheitToCelsius/>
    </div>
  )
}

export default MainPage