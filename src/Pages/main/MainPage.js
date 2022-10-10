import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getForecast, getFiveDayForecast, getLocation } from '../../redux/slices/forecastSlice'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import Weather5DayForecast from './components/Weather5DayForecast'
import WeatherPanel from './components/WeatherPanel'


const MainPage = () => {
  const dispatch = useDispatch()
  const getForecast = useSelector(state => state.forecast.getForecast)
  const getFiveDayForecast = useSelector(state => state.forecast.getFiveDayForecast)
  const getLocation = useSelector(state => state.forecast.getLocation)
  
// const [weather, setWeather] = useState({})
  // const [fiveDayForecast, setFiveDayForecast] = useState([])


    // useEffect(() => {
    //   getCity('Tel Aviv').then(data => {
    //     getWeather(data.Key).then(data => {
    //       get5DayForecast(data.key)     
    //     })
    //   })
    // }, [])

    //   const getCity = async (city) => {
    //   const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}`)
    //   const data = await response.json()
    //   return data[0];
    // };

    // const getWeather = async (cityKey) => {
    //   const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${process.env.REACT_APP_WEATHER_API_KEY}
    //   `)
    //   const data = await response.json()
    //   console.log(data)
    //   setWeather({
    //     city: 'Tel-Aviv',
    //     temperature: data[0].Temperature.Metric.Value,
    //     weatherText: data[0].WeatherText,
    //     weatherIcon: data[0].WeatherIcon,
    //     isDayTime: data[0].IsDayTime
        
    //   })
    // };
    // const get5DayForecast = async (cityKey) => {
    //   const response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${process.env.REACT_APP_WEATHER_API_KEY}&metric=true`)
    //   const data = await response.json()
    //   setFiveDayForecast(data.DailyForecasts)
    // };
    

  return (
    <div className='bg-cyan-400 dark:bg-gray-800 h-screen'> 
    
   <NavBar/>
   
    <SearchBar/>
    <WeatherPanel 
    
    />
    <Weather5DayForecast />
    
    </div>
  )
}

export default MainPage