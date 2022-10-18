import React from 'react'
import Loading from '../../extra/LoadingComponent'
import { useSelector, useDispatch } from 'react-redux'
import {BsHeart} from 'react-icons/bs'
import { BsHeartFill } from 'react-icons/bs'
import { addFavorite, removeFavorite } from '../../../redux/slices/favoritesSlice'
import { iconPicker } from '../../../assets/iconPicker'


const WeatherPanel = () => {  
    const dispatch = useDispatch()
    const {favoriteCities} = useSelector(state => state.favorites)
    const {currentWeather} = useSelector(state => state.forecast)
    const {location} = useSelector(state => state.forecast)
    const {isMetric} = useSelector(state => state.forecast)

  if(!currentWeather && !location) {
    return (
      <Loading/>
    )
  } else {
  return (
  <div className="flex flex-col w-full lg:w-1/2 mx-auto rounded-2xl mt-2">
    <div className="flex flex-row">
      {favoriteCities.some(favorite => favorite.id === location.id) ?
      <BsHeartFill className="text-red-500 text-2xl m-2 hover:cursor-pointer" onClick={() => dispatch(removeFavorite(location))} /> :
      <BsHeart className="text-red-500 text-2xl m-2 hover:cursor-pointer" onClick={() => dispatch(addFavorite(location))} />
      }
    </div>
    <p className='mx-auto text-5xl mt-4 font-bold dark:text-amber-200'>{location?.name}</p>
    <div className="flex flex-row justify-between">
      <p className='text-black text-8xl dark:text-amber-200'>{iconPicker(currentWeather?.WeatherIcon)}</p>
      <p className='text-4xl my-auto font-bold  dark:text-amber-200'>{currentWeather?.WeatherText}</p>
      <p className='text-6xl my-auto font-bold dark:text-amber-200'>{isMetric ? Math.floor(currentWeather?.Temperature.Metric.Value) :  
          Math.floor(currentWeather?.Temperature.Imperial.Value)}°
      </p>
    </div>  
  </div>
  )
  }
}



export default WeatherPanel

