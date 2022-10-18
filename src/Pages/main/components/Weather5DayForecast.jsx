import React  from 'react'
import moment from 'moment'; 
import { useSelector } from 'react-redux'
import { degreeConverter } from '../../../utils/degreeConverter';
import { iconPicker } from '../../../assets/iconPicker'

const Weather5DayForecast = () => {
  const dailyForecast = useSelector(state => state.forecast.dailyForecast)
  const {isMetric} = useSelector(state => state.forecast)

    return (
    <div className="flex flex-col lg:flex-row w-full mx-auto">
      {dailyForecast.map((day, index) => {
        return (
          <div key={index} className='rounded-xl w-full lg:w-60 lg:mt-16 lg:h-32 shadow-2xl  
          mx-auto flex-row justify-around h-20 mt-3 flex lg:flex-col'>
            <p className='text-black text-xl w-fit my-auto lg:mx-auto dark:text-amber-200'>{moment(day.Date).format('ddd')}</p>
            <p className='text-black text-xl w-fit my-auto lg:mx-auto dark:text-amber-200'>{iconPicker(day.Day.Icon)}</p>
            <p className='text-black text-xl w-fit my-auto lg:mx-auto dark:text-amber-200'>{isMetric ?  `${Math.floor(day.Temperature.Minimum.Value)}\xB0C - ${Math.floor(day.Temperature.Maximum.Value)}\xB0C` : degreeConverter(day.Temperature.Minimum.Value, day.Temperature.Maximum.Value)}</p>
            <p className='text-black text-lg w-fit my-auto lg:mx-auto font-bold dark:text-amber-200'>{day.Day.IconPhrase}</p>
          </div>
        )
      })}
    </div>
  )}


export default Weather5DayForecast