import React from 'react'
import logo from '../../../assets/cloudy.png'

const Weather5DayForecast = () => {
    const x = [1,2,3,4,5]

  return (
    <div className="flex flex-row w-1/2 mx-auto">
        {x.map((item) => (
          <div className='border-2 bg-yellow-200 mt-2 rounded-xl w-28 h-28 
          mx-auto justify-around items-center'>
            <img src={logo} alt="" className='w-10 mx-auto'/>
            <p className='text-lg mx-auto w-fit'>70°/103°</p>
            <p className='text-xl mx-auto w-fit'>Sun</p>

          </div>
        ))}
    </div>
  )
}

export default Weather5DayForecast