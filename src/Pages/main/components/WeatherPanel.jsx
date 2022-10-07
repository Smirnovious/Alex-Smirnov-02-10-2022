import React, { useState } from 'react'

const WeatherPanel = () => {
    const [weather, setWeather] = useState({
        city: 'Tel Aviv',
        date: 'Monday, 12 April',
        temperature: '20',
        description: 'Sunny',
        icon: '01d'
    })

  return (
    <div className='border-2 mt-2 rounded-xl w-1/2 h-96 mx-auto flex flex-row justify-between items-center'>
        <div>
            logo
        </div>
        <p className='text-7xl'>
            22
        </p>
        <div className='flex flex-col'>
            <div>wind</div>
            <div>humidity</div>
            <div>pressure</div>
        </div>
    </div>
  )
}

export default WeatherPanel