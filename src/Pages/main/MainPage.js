import React, {useEffect} from 'react'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import Weather5DayForecast from './components/Weather5DayForecast'
import WeatherPanel from './components/WeatherPanel'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCurrentWeather, fetchDailyForecast, fetchDefaultLocation, fetchGeoLocation, setPageLoading } from '../../redux/slices/forecastSlice'
import LoadingApp from '../extra/LoadingApp'



const MainPage = () => {
  const {pageLoading} = useSelector(state => state.forecast)
  
  const dispatch = useDispatch()
    useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(fetchGeoLocation(position.coords.latitude, position.coords.longitude))
      })
      dispatch(fetchDefaultLocation('Tel Aviv')).unwrap().then((result) => {
      dispatch(fetchCurrentWeather(result.id))
      dispatch(fetchDailyForecast(result.id))
        }).then(() => {
          dispatch(setPageLoading())
        })
    }, [dispatch])

  if(pageLoading) {
    return (
     <LoadingApp/>
    )
  } else {
  return (
    <div className='bg-gray-50 h-full lg:h-screen dark:bg-gray-800'> 
      <NavBar/>
      <SearchBar/>
      <WeatherPanel/>
      <Weather5DayForecast />
    </div>
  )
}
}

export default MainPage