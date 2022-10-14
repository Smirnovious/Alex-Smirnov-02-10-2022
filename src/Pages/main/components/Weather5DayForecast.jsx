import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment';

const Weather5DayForecast = ({forecast}) => {
const fiveDayForecast = useSelector(state => state.forecast.fiveDayForecast)
    return (
    <div className="flex flex-row w-1/2 mx-auto">
      {fiveDayForecast && fiveDayForecast.map((day, index) => {
        return (
          <div key={index} className='mt-2 rounded-xl w-28 h-28 
          mx-auto justify-around items-center border'>
            <div className='text-black text-2xl w-fit mx-auto dark:text-amber-200'>icon</div>
            <p className='text-black text-xl w-fit mx-auto dark:text-amber-200'>{Math.floor(day.Temperature.Minimum.Value)}° | {Math.floor(day.Temperature.Maximum.Value)}°</p>
            <p className='text-black text-xl w-fit mx-auto dark:text-amber-200'>{new Date().getDay()}</p>
          </div>
        )
      })}
    </div>
    

  )
}


export default Weather5DayForecast