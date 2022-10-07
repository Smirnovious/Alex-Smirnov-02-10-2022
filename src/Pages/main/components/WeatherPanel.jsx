import React, { useState } from 'react'
import sun from '../../../assets/sun.png'
import Weather5DayForecast from './Weather5DayForecast'
const WeatherPanel = () => {
    const [weather, setWeather] = useState({
        city: 'Tel Aviv',
        date: 'Monday, 12 April',
        temperature: '20',
        description: 'Sunny',
        icon: '01d'
    })

  return (
    <div className="flex flex-col w-1/2 mx-auto">
    <p className='mx-auto text-4xl mt-4 font-bold'>Tel-Aviv</p>
    <div className='mt-2 rounded-xl w-fit h-52 mx-auto flex flex-row justify-between items-center'>
        <img src={sun} alt="" className='w-1/4'/>
            
        <p className='text-8xl'>
            22°
        </p>
        <div className='flex flex-col '>
            <div>Wind</div>
            <div>Humidity</div>
            <div>Pressure</div>
        </div>
    </div>
    
    </div>


  )
}

export default WeatherPanel