import React, { useEffect, useState } from 'react'



import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import Weather5DayForecast from './components/Weather5DayForecast'
import WeatherPanel from './components/WeatherPanel'


const MainPage = () => {
  const [weather, setWeather] = useState({})

    useEffect(() => {
      getCity('Tel Aviv').then(data => {
        getWeather(data.Key)
      })
    }, [])

      const getCity = async (city) => {
      const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}`)
      const data = await response.json()
      return data[0];
    };
    const getWeather = async (cityKey) => {
      const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${process.env.REACT_APP_WEATHER_API_KEY}
      `)
      const data = await response.json()
      console.log(data)
      setWeather({
        city: 'Tel-Aviv',
        temperature: data[0].Temperature.Metric.Value,
        weatherText: data[0].WeatherText,
        weatherIcon: data[0].WeatherIcon,
        isDayTime: data[0].IsDayTime
        
      })
    };





  return (
    <div className='bg-cyan-400 dark:bg-gray-800 h-screen'> 
    
    <NavBar/>
    <SearchBar/>
   
  
    <WeatherPanel 
    weather={weather}
    />
    <Weather5DayForecast/>
    
    </div>
  )
}

export default MainPage